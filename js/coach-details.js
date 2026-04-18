document.addEventListener('DOMContentLoaded', function() {
    // Get coach ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const coachId = urlParams.get('id');
    
    if (coachId) {
        // In a real application, you would fetch coach data from a server
        // For demo purposes, we'll simulate loading coach data
        loadCoachDetails(coachId);
    } else {
        // No coach ID provided, redirect to coaches list
        window.location.href = 'coaches.html';
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
    
    // Career timeline interaction
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach(item => {
            item.addEventListener('click', function() {
                // Toggle active class
                this.classList.toggle('active');
                
                // Toggle visibility of details
                const details = this.querySelector('.timeline-details');
                if (details) {
                    if (details.style.maxHeight) {
                        details.style.maxHeight = null;
                    } else {
                        details.style.maxHeight = details.scrollHeight + 'px';
                    }
                }
            });
        });
    }
    
    function loadCoachDetails(id) {
        // Simulate loading data with a delay
        showNotification('Loading coach details...', 'info');
        
        // In a real application, you would fetch data from a server
        // For demo purposes, we'll simulate a successful data load
        setTimeout(() => {
            // Update page title with coach name
            const coachName = getCoachName(id);
            document.title = `${coachName} - FootStats`;
            
            // Update coach header
            const coachHeader = document.querySelector('.coach-header h1');
            if (coachHeader) {
                coachHeader.textContent = coachName;
            }
            
            showNotification('Coach details loaded successfully', 'success');
        }, 1000);
    }
    
    function getCoachName(id) {
        // Mock coach data - in a real app, this would come from a database
        const coaches = {
            '1': 'Pep Guardiola',
            '2': 'Carlo Ancelotti',
            '3': 'Jürgen Klopp',
            '4': 'Thomas Tuchel',
            '5': 'Xavi Hernández',
            '6': 'Luis Enrique'
        };
        
        return coaches[id] || 'Unknown Coach';
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
    if (!document.querySelector('#coach-details-styles')) {
        const style = document.createElement('style');
        style.id = 'coach-details-styles';
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
            
            /* Timeline animation */
            .timeline-details {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.3s ease;
            }
            .timeline-item.active .timeline-details {
                max-height: 500px;
            }
        `;
        document.head.appendChild(style);
    }
});

// Coach data (mock data for demonstration)
const coaches = {
    1: {
        name: "Pep Guardiola",
        image: "images/coaches/guardiola.jpg",
        nationality: "Spain",
        dateOfBirth: "1971-01-18",
        currentTeam: "Manchester City",
        teamLogo: "images/teams/manchester-city.png",
        description: "Josep 'Pep' Guardiola Sala is a Spanish professional football manager and former player, who is the current manager of Manchester City. He is considered one of the greatest managers of all time and holds the record for the most consecutive league games won in La Liga, the Bundesliga, and the Premier League.",
        stats: {
            matchesManaged: 850,
            wins: 600,
            draws: 150,
            losses: 100,
            winPercentage: "70.6%"
        },
        achievements: [
            { name: "Champions League", count: 3 },
            { name: "Premier League", count: 5 },
            { name: "La Liga", count: 3 },
            { name: "Bundesliga", count: 3 }
        ],
        career: [
            { team: "Barcelona B", period: "2007-2008", role: "Manager" },
            { team: "Barcelona", period: "2008-2012", role: "Manager" },
            { team: "Bayern Munich", period: "2013-2016", role: "Manager" },
            { team: "Manchester City", period: "2016-Present", role: "Manager" }
        ],
        coachingStyle: "Possession-based, high pressing, positional play",
        notablePlayers: [
            "Lionel Messi",
            "Xavi",
            "Andrés Iniesta",
            "Kevin De Bruyne",
            "Erling Haaland"
        ]
    },
    2: {
        name: "Carlo Ancelotti",
        image: "images/coaches/ancelotti.jpg",
        nationality: "Italy",
        dateOfBirth: "1959-06-10",
        currentTeam: "Real Madrid",
        teamLogo: "images/teams/real-madrid.png",
        description: "Carlo Ancelotti is an Italian professional football manager and former player who is the manager of Real Madrid. He is one of only three managers to have won the UEFA Champions League three times and the only manager to have won league titles in all of Europe's top five leagues.",
        stats: {
            matchesManaged: 1200,
            wins: 750,
            draws: 300,
            losses: 150,
            winPercentage: "62.5%"
        },
        achievements: [
            { name: "Champions League", count: 4 },
            { name: "Premier League", count: 1 },
            { name: "La Liga", count: 2 },
            { name: "Serie A", count: 1 }
        ],
        career: [
            { team: "Reggiana", period: "1995-1996", role: "Manager" },
            { team: "Parma", period: "1996-1998", role: "Manager" },
            { team: "Juventus", period: "1999-2001", role: "Manager" },
            { team: "AC Milan", period: "2001-2009", role: "Manager" },
            { team: "Chelsea", period: "2009-2011", role: "Manager" },
            { team: "Paris Saint-Germain", period: "2011-2013", role: "Manager" },
            { team: "Real Madrid", period: "2013-2015", role: "Manager" },
            { team: "Bayern Munich", period: "2016-2017", role: "Manager" },
            { team: "Napoli", period: "2018-2019", role: "Manager" },
            { team: "Everton", period: "2019-2021", role: "Manager" },
            { team: "Real Madrid", period: "2021-Present", role: "Manager" }
        ],
        coachingStyle: "Flexible, pragmatic, man-management focused",
        notablePlayers: [
            "Cristiano Ronaldo",
            "Kaká",
            "Andrea Pirlo",
            "Karim Benzema",
            "Luka Modrić"
        ]
    },
    3: {
        name: "Thomas Tuchel",
        image: "images/coaches/tuchel.jpg",
        nationality: "Germany",
        dateOfBirth: "1973-08-29",
        currentTeam: "Bayern Munich",
        teamLogo: "images/teams/bayern-munich.png",
        description: "Thomas Tuchel is a German professional football manager and former player who is the current manager of Bayern Munich. Known for his tactical flexibility and innovative approach to the game, he has managed several top European clubs.",
        stats: {
            matchesManaged: 450,
            wins: 280,
            draws: 100,
            losses: 70,
            winPercentage: "62.2%"
        },
        achievements: [
            { name: "Champions League", count: 1 },
            { name: "Bundesliga", count: 1 },
            { name: "Ligue 1", count: 1 },
            { name: "FIFA Club World Cup", count: 1 }
        ],
        career: [
            { team: "Mainz 05", period: "2009-2014", role: "Manager" },
            { team: "Borussia Dortmund", period: "2015-2017", role: "Manager" },
            { team: "Paris Saint-Germain", period: "2018-2020", role: "Manager" },
            { team: "Chelsea", period: "2021-2022", role: "Manager" },
            { team: "Bayern Munich", period: "2023-Present", role: "Manager" }
        ],
        coachingStyle: "High pressing, positional play, tactical flexibility",
        notablePlayers: [
            "Neymar",
            "Kylian Mbappé",
            "Marco Reus",
            "Mason Mount",
            "Harry Kane"
        ]
    },
    4: {
        name: "Luis Enrique",
        image: "images/coaches/luis-enrique.jpg",
        nationality: "Spain",
        dateOfBirth: "1970-05-08",
        currentTeam: "Paris Saint-Germain",
        teamLogo: "images/teams/psg.png",
        description: "Luis Enrique Martínez García is a Spanish professional football manager and former player who is the current manager of Paris Saint-Germain. He is known for his attacking style of play and has managed both Barcelona and the Spanish national team.",
        stats: {
            matchesManaged: 350,
            wins: 220,
            draws: 80,
            losses: 50,
            winPercentage: "62.9%"
        },
        achievements: [
            { name: "Champions League", count: 1 },
            { name: "La Liga", count: 2 },
            { name: "Copa del Rey", count: 3 },
            { name: "FIFA Club World Cup", count: 1 }
        ],
        career: [
            { team: "Barcelona B", period: "2008-2011", role: "Manager" },
            { team: "Roma", period: "2011-2012", role: "Manager" },
            { team: "Celta Vigo", period: "2013-2014", role: "Manager" },
            { team: "Barcelona", period: "2014-2017", role: "Manager" },
            { team: "Spain", period: "2018-2019", role: "Manager" },
            { team: "Paris Saint-Germain", period: "2023-Present", role: "Manager" }
        ],
        coachingStyle: "Attacking, possession-based, high pressing",
        notablePlayers: [
            "Lionel Messi",
            "Neymar",
            "Luis Suárez",
            "Andrés Iniesta",
            "Kylian Mbappé"
        ]
    },
    5: {
        name: "Stefano Pioli",
        image: "images/coaches/pioli.jpg",
        nationality: "Italy",
        dateOfBirth: "1965-10-20",
        currentTeam: "AC Milan",
        teamLogo: "images/teams/ac-milan.png",
        description: "Stefano Pioli is an Italian professional football manager and former player who is the current manager of AC Milan. He has managed several Italian clubs and is known for his tactical acumen and ability to develop young players.",
        stats: {
            matchesManaged: 600,
            wins: 250,
            draws: 200,
            losses: 150,
            winPercentage: "41.7%"
        },
        achievements: [
            { name: "Serie A", count: 1 },
            { name: "Supercoppa Italiana", count: 1 }
        ],
        career: [
            { team: "Salernitana", period: "2003-2004", role: "Manager" },
            { team: "Modena", period: "2004-2006", role: "Manager" },
            { team: "Parma", period: "2006-2007", role: "Manager" },
            { team: "Bologna", period: "2008-2009", role: "Manager" },
            { team: "Lazio", period: "2014-2016", role: "Manager" },
            { team: "Inter Milan", period: "2016-2017", role: "Manager" },
            { team: "Fiorentina", period: "2017-2019", role: "Manager" },
            { team: "AC Milan", period: "2019-Present", role: "Manager" }
        ],
        coachingStyle: "High pressing, counter-attacking, youth development",
        notablePlayers: [
            "Zlatan Ibrahimović",
            "Rafael Leão",
            "Theo Hernández",
            "Mike Maignan",
            "Sandro Tonali"
        ]
    },
    6: {
        name: "Xavi Hernández",
        image: "images/coaches/xavi.jpg",
        nationality: "Spain",
        dateOfBirth: "1980-01-25",
        currentTeam: "FC Barcelona",
        teamLogo: "images/teams/barcelona.png",
        description: "Xavi Hernández is a Spanish professional football manager and former player who is the current manager of FC Barcelona. As a player, he was one of the greatest midfielders of all time, and he is now implementing his football philosophy as a manager.",
        stats: {
            matchesManaged: 150,
            wins: 90,
            draws: 35,
            losses: 25,
            winPercentage: "60%"
        },
        achievements: [
            { name: "La Liga", count: 1 },
            { name: "Supercopa de España", count: 1 }
        ],
        career: [
            { team: "Al-Sadd", period: "2019-2021", role: "Manager" },
            { team: "FC Barcelona", period: "2021-Present", role: "Manager" }
        ],
        coachingStyle: "Possession-based, positional play, tiki-taka",
        notablePlayers: [
            "Pedri",
            "Gavi",
            "Frenkie de Jong",
            "Robert Lewandowski",
            "Ronald Araújo"
        ]
    }
};

// Function to load coach data
function loadCoachData() {
    const urlParams = new URLSearchParams(window.location.search);
    const coachId = urlParams.get('id');
    
    if (coachId && coaches[coachId]) {
        const coach = coaches[coachId];
        
        // Update coach information
        document.getElementById('coach-name').textContent = coach.name;
        document.getElementById('coach-image').src = coach.image;
        document.getElementById('coach-image').alt = coach.name;
        document.getElementById('coach-nationality').textContent = coach.nationality;
        document.getElementById('coach-dob').textContent = new Date(coach.dateOfBirth).toLocaleDateString();
        document.getElementById('current-team').textContent = coach.currentTeam;
        document.getElementById('team-logo').src = coach.teamLogo;
        document.getElementById('team-logo').alt = coach.currentTeam;
        document.getElementById('coach-description').textContent = coach.description;
        
        // Update stats
        document.getElementById('matches-managed').textContent = coach.stats.matchesManaged;
        document.getElementById('wins').textContent = coach.stats.wins;
        document.getElementById('draws').textContent = coach.stats.draws;
        document.getElementById('losses').textContent = coach.stats.losses;
        document.getElementById('win-percentage').textContent = coach.stats.winPercentage;
        
        // Update achievements
        const achievementsGrid = document.getElementById('achievements-grid');
        achievementsGrid.innerHTML = coach.achievements.map(achievement => `
            <div class="achievement-card">
                <i class="fas fa-trophy achievement-icon"></i>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-count">${achievement.count}</div>
            </div>
        `).join('');
        
        // Update career
        const careerList = document.getElementById('career-list');
        careerList.innerHTML = coach.career.map(job => `
            <div class="career-item">
                <div class="career-team">${job.team}</div>
                <div class="career-period">${job.period}</div>
                <div class="career-role">${job.role}</div>
            </div>
        `).join('');
        
        // Update coaching style
        document.getElementById('coaching-style').textContent = coach.coachingStyle;
        
        // Update notable players
        const playersList = document.getElementById('notable-players');
        playersList.innerHTML = coach.notablePlayers.map(player => `
            <div class="player-item">${player}</div>
        `).join('');
        
        // Update page title
        document.title = `${coach.name} - Coach Details | FootStats`;
    } else {
        // Redirect to coaches page if coach ID is invalid
        window.location.href = 'coaches.html';
    }
}

// Load coach data when the page loads
document.addEventListener('DOMContentLoaded', loadCoachData);