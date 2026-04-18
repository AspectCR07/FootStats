const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Initial database connection (without database selected)
const initialDb = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'mysql'
});

// Create database and tables
initialDb.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  // Create database
  initialDb.query('CREATE DATABASE IF NOT EXISTS football', (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log('Database created or already exists');

    // Use the database
    initialDb.query('USE football', (err) => {
      if (err) {
        console.error('Error selecting database:', err);
        return;
      }

      // Create tables one by one
      const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          username VARCHAR(50) NOT NULL,
          email VARCHAR(100) NOT NULL UNIQUE,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

      const createPlayersTable = `
        CREATE TABLE IF NOT EXISTS players (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          position VARCHAR(50),
          team_id INT,
          age INT,
          nationality VARCHAR(50),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

      const createTeamsTable = `
        CREATE TABLE IF NOT EXISTS teams (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          league_id INT,
          founded_year INT,
          stadium VARCHAR(100),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

      const createCoachesTable = `
        CREATE TABLE IF NOT EXISTS coaches (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          team_id INT,
          nationality VARCHAR(50),
          experience_years INT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

      const createLeaguesTable = `
        CREATE TABLE IF NOT EXISTS leagues (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          country VARCHAR(50),
          founded_year INT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

      // Execute each table creation query
      initialDb.query(createUsersTable, (err) => {
        if (err) {
          console.error('Error creating users table:', err);
          return;
        }
        console.log('Users table created or already exists');
      });

      initialDb.query(createPlayersTable, (err) => {
        if (err) {
          console.error('Error creating players table:', err);
          return;
        }
        console.log('Players table created or already exists');
      });

      initialDb.query(createTeamsTable, (err) => {
        if (err) {
          console.error('Error creating teams table:', err);
          return;
        }
        console.log('Teams table created or already exists');
      });

      initialDb.query(createCoachesTable, (err) => {
        if (err) {
          console.error('Error creating coaches table:', err);
          return;
        }
        console.log('Coaches table created or already exists');
      });

      initialDb.query(createLeaguesTable, (err) => {
        if (err) {
          console.error('Error creating leagues table:', err);
          return;
        }
        console.log('Leagues table created or already exists');
      });
    });
  });
});

// Main database connection (with database selected)
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'harsh',
  database: process.env.DB_NAME || 'football'
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Routes
app.get('/api/players', (req, res) => {
  const query = 'SELECT * FROM players';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/teams', (req, res) => {
  const query = 'SELECT * FROM teams';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/coaches', (req, res) => {
  const query = 'SELECT * FROM coaches';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.get('/api/leagues', (req, res) => {
  const query = 'SELECT * FROM leagues';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Authentication routes
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  
  db.query(query, [username, email, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'User registered successfully' });
  });
});

app.post('/api/signin', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  
  db.query(query, [email, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length > 0) {
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
}); 