document.addEventListener('DOMContentLoaded', function() {
    // Get team ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id');
    
    if (teamId) {
        // In a real application, you would fetch team data from a server
        // For demo purposes, we'll simulate loading team data
        loadTeamDetails(teamId);
    } else {
        // No team ID provided, redirect to teams list
        window.location.href = 'teams.html';
    }
    
    // Stats toggle tabs
    const statsTabs = document.querySelectorAll('.stats-tab');
    if (statsTabs.length > 0) {
        statsTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all stats sections
                document.querySelectorAll('.stats-section').forEach(section => section.style.display = 'none');
                
                // Show the selected stats section
                const targetSection = this.getAttribute('data-target');
                document.getElementById(targetSection).style.display = 'block';
            });
        });
    }
    
    function loadTeamDetails(id) {
        // Simulate loading data with a delay
        showNotification('Loading team details...', 'info');
        
        // In a real application, you would fetch data from a server
        // For demo purposes, we'll simulate a successful data load
        setTimeout(() => {
            // Update page title with team name
            const teamName = getTeamName(id);
            document.title = `${teamName} - FootStats`;
            
            // Update team header
            const teamHeader = document.querySelector('.team-header h1');
            if (teamHeader) {
                teamHeader.textContent = teamName;
            }
            
            showNotification('Team details loaded successfully', 'success');
        }, 1000);
    }
    
    function getTeamName(id) {
        // Mock team data - in a real app, this would come from a database
        const teams = {
            '1': 'Manchester City',
            '2': 'Real Madrid',
            '3': 'Bayern Munich',
            '4': 'Liverpool',
            '5': 'Paris Saint-Germain',
            '6': 'Barcelona'
        };
        
        return teams[id] || 'Unknown Team';
    }
    
    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Append to body
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Add notification styles if not already in CSS
    if (!document.querySelector('#team-details-styles')) {
        const style = document.createElement('style');
        style.id = 'team-details-styles';
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 4px;
                color: white;
                font-weight: 500;
                z-index: 1000;
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.3s ease;
                max-width: 300px;
            }
            .notification.show {
                transform: translateY(0);
                opacity: 1;
            }
            .notification.success {
                background-color: #28a745;
            }
            .notification.error {
                background-color: #dc3545;
            }
            .notification.info {
                background-color: #17a2b8;
            }
        `;
        document.head.appendChild(style);
    }
});

// Team data (mock data for demonstration)
const teams = {
    1: {
        name: "Manchester City",
        logo: "images/team1.jpg",
        league: "Premier League",
        country: "England",
        founded: "1880",
        description: "Manchester City Football Club is an English professional football club based in Manchester that competes in the Premier League, the top flight of English football. Founded in 1880 as St. Mark's (West Gorton), it became Ardwick Association Football Club in 1887 and Manchester City in 1894.",
        stats: {
            matchesPlayed: 38,
            wins: 29,
            draws: 5,
            losses: 4
        },
        trophies: [
            { name: "Premier League", count: 7 },
            { name: "FA Cup", count: 6 },
            { name: "League Cup", count: 8 },
            { name: "Champions League", count: 1 }
        ],
        stadium: {
            name: "Etihad Stadium",
            image: "images/stadiums/etihad-stadium.jpg",
            capacity: "53,400",
            built: "2002",
            surface: "Hybrid Grass"
        },
        squad: [
            { id: 1, name: "Ederson", position: "goalkeeper", number: 31 },
            { id: 2, name: "Kyle Walker", position: "defender", number: 2 },
            { id: 3, name: "Ruben Dias", position: "defender", number: 3 },
            { id: 4, name: "John Stones", position: "defender", number: 5 },
            { id: 5, name: "Rodri", position: "midfielder", number: 16 },
            { id: 6, name: "Kevin De Bruyne", position: "midfielder", number: 17 },
            { id: 7, name: "Bernardo Silva", position: "midfielder", number: 20 },
            { id: 8, name: "Phil Foden", position: "midfielder", number: 47 },
            { id: 9, name: "Erling Haaland", position: "forward", number: 9 },
            { id: 10, name: "Jack Grealish", position: "forward", number: 10 }
        ],
        fixtures: [
            { date: "2023-08-12", opponent: "Burnley", competition: "Premier League" },
            { date: "2023-08-19", opponent: "Newcastle", competition: "Premier League" },
            { date: "2023-08-26", opponent: "Sheffield United", competition: "Premier League" }
        ]
    },
    2: {
        name: "Real Madrid",
        logo: "images/team2.jpg",
        league: "La Liga",
        country: "Spain",
        founded: "1902",
        description: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional football club based in Madrid. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit since its inception.",
        stats: {
            matchesPlayed: 38,
            wins: 24,
            draws: 6,
            losses: 8
        },
        trophies: [
            { name: "La Liga", count: 35 },
            { name: "Copa del Rey", count: 20 },
            { name: "Champions League", count: 14 },
            { name: "Club World Cup", count: 5 }
        ],
        stadium: {
            name: "Santiago Bernabéu",
            image: "images/stadiums/bernabeu.jpg",
            capacity: "81,044",
            built: "1947",
            surface: "Hybrid Grass"
        },
        squad: [
            { id: 11, name: "Thibaut Courtois", position: "goalkeeper", number: 1 },
            { id: 12, name: "Dani Carvajal", position: "defender", number: 2 },
            { id: 13, name: "Éder Militão", position: "defender", number: 3 },
            { id: 14, name: "David Alaba", position: "defender", number: 4 },
            { id: 15, name: "Toni Kroos", position: "midfielder", number: 8 },
            { id: 16, name: "Luka Modrić", position: "midfielder", number: 10 },
            { id: 17, name: "Federico Valverde", position: "midfielder", number: 15 },
            { id: 18, name: "Vinicius Junior", position: "forward", number: 20 },
            { id: 19, name: "Rodrygo", position: "forward", number: 21 },
            { id: 20, name: "Jude Bellingham", position: "midfielder", number: 22 }
        ],
        fixtures: [
            { date: "2023-08-13", opponent: "Athletic Bilbao", competition: "La Liga" },
            { date: "2023-08-20", opponent: "Almería", competition: "La Liga" },
            { date: "2023-08-27", opponent: "Celta Vigo", competition: "La Liga" }
        ]
    },
    3: {
        name: "Bayern Munich",
        logo: "images/team3.jpg",
        league: "Bundesliga",
        country: "Germany",
        founded: "1900",
        description: "FC Bayern München, commonly known as Bayern Munich, is a German professional sports club based in Munich, Bavaria. It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system.",
        stats: {
            matchesPlayed: 34,
            wins: 21,
            draws: 8,
            losses: 5
        },
        trophies: [
            { name: "Bundesliga", count: 33 },
            { name: "DFB-Pokal", count: 20 },
            { name: "Champions League", count: 6 },
            { name: "Club World Cup", count: 2 }
        ],
        stadium: {
            name: "Allianz Arena",
            image: "images/stadiums/allianz.jpg",
            capacity: "75,024",
            built: "2005",
            surface: "Hybrid Grass"
        },
        squad: [
            { id: 21, name: "Manuel Neuer", position: "goalkeeper", number: 1 },
            { id: 22, name: "Dayot Upamecano", position: "defender", number: 2 },
            { id: 23, name: "Matthijs de Ligt", position: "defender", number: 4 },
            { id: 24, name: "Joshua Kimmich", position: "midfielder", number: 6 },
            { id: 25, name: "Leon Goretzka", position: "midfielder", number: 8 },
            { id: 26, name: "Leroy Sané", position: "midfielder", number: 10 },
            { id: 27, name: "Jamal Musiala", position: "midfielder", number: 42 },
            { id: 28, name: "Thomas Müller", position: "forward", number: 25 },
            { id: 29, name: "Harry Kane", position: "forward", number: 9 },
            { id: 30, name: "Kingsley Coman", position: "forward", number: 11 }
        ],
        fixtures: [
            { date: "2023-08-18", opponent: "Werder Bremen", competition: "Bundesliga" },
            { date: "2023-08-25", opponent: "Augsburg", competition: "Bundesliga" },
            { date: "2023-09-02", opponent: "Borussia Mönchengladbach", competition: "Bundesliga" }
        ]
    },
    4: {
        name: "Paris Saint-Germain",
        logo: "images/team4.jpg",
        league: "Ligue 1",
        country: "France",
        founded: "1970",
        description: "Paris Saint-Germain Football Club, commonly referred to as Paris Saint-Germain, Paris SG, or simply PSG, is a professional football club based in Paris, France. They compete in Ligue 1, the top division of French football.",
        stats: {
            matchesPlayed: 38,
            wins: 27,
            draws: 4,
            losses: 7
        },
        trophies: [
            { name: "Ligue 1", count: 11 },
            { name: "Coupe de France", count: 14 },
            { name: "Coupe de la Ligue", count: 9 },
            { name: "Trophée des Champions", count: 11 }
        ],
        stadium: {
            name: "Parc des Princes",
            image: "images/stadiums/parc-des-princes.jpg",
            capacity: "48,583",
            built: "1972",
            surface: "Hybrid Grass"
        },
        squad: [
            { id: 31, name: "Gianluigi Donnarumma", position: "goalkeeper", number: 99 },
            { id: 32, name: "Achraf Hakimi", position: "defender", number: 2 },
            { id: 33, name: "Marquinhos", position: "defender", number: 5 },
            { id: 34, name: "Milan Škriniar", position: "defender", number: 37 },
            { id: 35, name: "Manuel Ugarte", position: "midfielder", number: 4 },
            { id: 36, name: "Marco Verratti", position: "midfielder", number: 6 },
            { id: 37, name: "Kylian Mbappé", position: "forward", number: 7 },
            { id: 38, name: "Ousmane Dembélé", position: "forward", number: 10 },
            { id: 39, name: "Randal Kolo Muani", position: "forward", number: 23 },
            { id: 40, name: "Gonçalo Ramos", position: "forward", number: 9 }
        ],
        fixtures: [
            { date: "2023-08-12", opponent: "Lorient", competition: "Ligue 1" },
            { date: "2023-08-19", opponent: "Toulouse", competition: "Ligue 1" },
            { date: "2023-08-26", opponent: "Lens", competition: "Ligue 1" }
        ]
    },
    5: {
        name: "AC Milan",
        logo: "images/team5.jpg",
        league: "Serie A",
        country: "Italy",
        founded: "1899",
        description: "Associazione Calcio Milan, commonly referred to as AC Milan or simply Milan, is a professional football club in Milan, Italy, that competes in Serie A, the top flight of Italian football. The club is one of the most successful in the world.",
        stats: {
            matchesPlayed: 38,
            wins: 20,
            draws: 10,
            losses: 8
        },
        trophies: [
            { name: "Serie A", count: 19 },
            { name: "Coppa Italia", count: 5 },
            { name: "Champions League", count: 7 },
            { name: "Club World Cup", count: 1 }
        ],
        stadium: {
            name: "San Siro",
            image: "images/stadiums/san-siro.jpg",
            capacity: "75,923",
            built: "1926",
            surface: "Hybrid Grass"
        },
        squad: [
            { id: 41, name: "Mike Maignan", position: "goalkeeper", number: 16 },
            { id: 42, name: "Davide Calabria", position: "defender", number: 2 },
            { id: 43, name: "Fikayo Tomori", position: "defender", number: 23 },
            { id: 44, name: "Theo Hernández", position: "defender", number: 19 },
            { id: 45, name: "Ismaël Bennacer", position: "midfielder", number: 4 },
            { id: 46, name: "Ruben Loftus-Cheek", position: "midfielder", number: 8 },
            { id: 47, name: "Christian Pulisic", position: "midfielder", number: 11 },
            { id: 48, name: "Rafael Leão", position: "forward", number: 17 },
            { id: 49, name: "Olivier Giroud", position: "forward", number: 9 },
            { id: 50, name: "Noah Okafor", position: "forward", number: 7 }
        ],
        fixtures: [
            { date: "2023-08-21", opponent: "Bologna", competition: "Serie A" },
            { date: "2023-08-26", opponent: "Torino", competition: "Serie A" },
            { date: "2023-09-02", opponent: "Roma", competition: "Serie A" }
        ]
    },
    6: {
        name: "FC Barcelona",
        logo: "images/team6.jpg",
        league: "La Liga",
        country: "Spain",
        founded: "1899",
        description: "Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a professional football club based in Barcelona, Catalonia, Spain, that competes in La Liga, the top flight of Spanish football.",
        stats: {
            matchesPlayed: 38,
            wins: 28,
            draws: 4,
            losses: 6
        },
        trophies: [
            { name: "La Liga", count: 27 },
            { name: "Copa del Rey", count: 31 },
            { name: "Champions League", count: 5 },
            { name: "Club World Cup", count: 3 }
        ],
        stadium: {
            name: "Camp Nou",
            image: "images/stadiums/camp-nou.jpg",
            capacity: "99,354",
            built: "1957",
            surface: "Hybrid Grass"
        },
        squad: [
            { id: 51, name: "Marc-André ter Stegen", position: "goalkeeper", number: 1 },
            { id: 52, name: "Jules Koundé", position: "defender", number: 23 },
            { id: 53, name: "Ronald Araújo", position: "defender", number: 4 },
            { id: 54, name: "João Cancelo", position: "defender", number: 2 },
            { id: 55, name: "Frenkie de Jong", position: "midfielder", number: 21 },
            { id: 56, name: "Gavi", position: "midfielder", number: 6 },
            { id: 57, name: "Pedri", position: "midfielder", number: 8 },
            { id: 58, name: "Robert Lewandowski", position: "forward", number: 9 },
            { id: 59, name: "Raphinha", position: "forward", number: 22 },
            { id: 60, name: "João Félix", position: "forward", number: 14 }
        ],
        fixtures: [
            { date: "2023-08-13", opponent: "Getafe", competition: "La Liga" },
            { date: "2023-08-20", opponent: "Cádiz", competition: "La Liga" },
            { date: "2023-08-27", opponent: "Villarreal", competition: "La Liga" }
        ]
    }
};

// Function to load team data
function loadTeamData() {
    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get('id');
    
    if (teamId && teams[teamId]) {
        const team = teams[teamId];
        
        // Update team information
        document.getElementById('team-name').textContent = team.name;
        document.getElementById('team-logo').src = team.logo;
        document.getElementById('team-logo').alt = team.name;
        document.getElementById('team-league').textContent = team.league;
        document.getElementById('team-country').textContent = team.country;
        document.getElementById('team-founded').textContent = `Founded: ${team.founded}`;
        document.getElementById('team-description').textContent = team.description;
        
        // Update stats
        document.getElementById('matches-played').textContent = team.stats.matchesPlayed;
        document.getElementById('wins').textContent = team.stats.wins;
        document.getElementById('draws').textContent = team.stats.draws;
        document.getElementById('losses').textContent = team.stats.losses;
        
        // Update trophies
        const trophiesGrid = document.getElementById('trophies-grid');
        trophiesGrid.innerHTML = team.trophies.map(trophy => `
            <div class="trophy-card">
                <i class="fas fa-trophy trophy-icon"></i>
                <div class="trophy-name">${trophy.name}</div>
                <div class="trophy-count">${trophy.count}</div>
            </div>
        `).join('');
        
        // Update stadium information
        document.getElementById('stadium-image').src = team.stadium.image;
        document.getElementById('stadium-image').alt = team.stadium.name;
        document.getElementById('stadium-name').textContent = team.stadium.name;
        document.getElementById('stadium-capacity').textContent = team.stadium.capacity;
        document.getElementById('stadium-built').textContent = team.stadium.built;
        document.getElementById('stadium-surface').textContent = team.stadium.surface;
        
        // Update squad
        updateSquad(team.squad);
        
        // Update fixtures
        updateFixtures(team.fixtures);
        
        // Update page title
        document.title = `${team.name} - Team Details | FootStats`;
    } else {
        // Redirect to teams page if team ID is invalid
        window.location.href = 'teams.html';
    }
}

// Function to update squad
function updateSquad(squad) {
    const squadGrid = document.getElementById('squad-grid');
    squadGrid.innerHTML = squad.map(player => `
        <div class="player-card">
            <div class="player-number">${player.number}</div>
            <div class="player-name">${player.name}</div>
            <div class="player-position">${player.position}</div>
        </div>
    `).join('');
}

// Function to update fixtures
function updateFixtures(fixtures) {
    const fixturesList = document.getElementById('fixtures-list');
    fixturesList.innerHTML = fixtures.map(fixture => `
        <div class="fixture-item">
            <div class="fixture-date">${new Date(fixture.date).toLocaleDateString()}</div>
            <div class="fixture-teams">
                <div class="fixture-team">
                    <div class="fixture-team-logo">
                        <img src="images/teams/${fixture.opponent.toLowerCase().replace(/\s+/g, '-')}.png" alt="${fixture.opponent}">
                    </div>
                    <span>${fixture.opponent}</span>
                </div>
                <span class="fixture-vs">vs</span>
                <div class="fixture-team">
                    <div class="fixture-team-logo">
                        <img src="${document.getElementById('team-logo').src}" alt="${document.getElementById('team-name').textContent}">
                    </div>
                    <span>${document.getElementById('team-name').textContent}</span>
                </div>
            </div>
            <div class="fixture-competition">${fixture.competition}</div>
        </div>
    `).join('');
}

// Load team data when the page loads
document.addEventListener('DOMContentLoaded', loadTeamData);