# FootStats ⚽📊

FootStats is a comprehensive Sports Management System designed for football (soccer) enthusiasts, managers, and analysts. It provides a robust platform to track and manage data for players, teams, coaches, and leagues. 

## Features 🚀
- **User Authentication**: Secure signup and login system using JWT and `bcryptjs`.
- **Player Database**: View and manage comprehensive details about football players, including their stats, age, nationality, and current teams.
- **Team Management**: Access information about football teams, their founding years, stadiums, and associated leagues.
- **Coach Profiles**: Track coaches, their team assignments, nationality, and years of experience.
- **League Demographics**: Explore different football leagues, their origins, and associated teams.
- **Modern UI**: An intuitive, responsive frontend built with HTML, CSS, and vanilla JavaScript.

## Tech Stack 🛠️
### Frontend
- HTML5, CSS3
- Vanilla JavaScript

### Backend
- **Node.js** & **Express.js**: For routing and handling application logic.
- **MySQL**: Relational database to store stats and user identities.
- **JWT (JSON Web Tokens)**: Secure stateless user authentication.

## Getting Started 🏁

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or above)
- [MySQL](https://www.mysql.com/) installed and running on your local machine

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AspectCR07/FootStats.git
   cd FootStats
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Database Setup:**
   Create a new MySQL database using the provided SQL file:
   ```bash
   mysql -u root -p < setup_database.sql
   ```
   *(Ensure you update the database credentials in your `.env` file.)*

4. **Environment Variables:**
   Create a `.env` file in the root of the project with your MySQL connection details and JWT secret:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=football
   JWT_SECRET=your_super_secret_jwt_key
   ```

5. **Start the server:**
   ```bash
   # Development mode with nodemon
   npm run dev

   # Production mode
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` (or whatever port your server runs on) to access FootStats.

## License 📄
This project is licensed under the MIT License.
