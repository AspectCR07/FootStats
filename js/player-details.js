document.addEventListener('DOMContentLoaded', function() {
    // Get player ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get('id');
    
    if (playerId) {
        // In a real application, you would fetch player data from a server
        // For demo purposes, we'll simulate loading player data
        loadPlayerDetails(playerId);
    } else {
        // No player ID provided, redirect to players list
        window.location.href = 'players.html';
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
    
    // Career history timeline interaction
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
    
    function loadPlayerDetails(id) {
        // Simulate loading data with a delay
        showNotification('Loading player details...', 'info');
        
        // In a real application, you would fetch data from a server
        // For demo purposes, we'll simulate a successful data load
        setTimeout(() => {
            // Update page title with player name
            const playerName = getPlayerName(id);
            document.title = `${playerName} - FootStats`;
            
            // Update player header
            const playerHeader = document.querySelector('.player-header h1');
            if (playerHeader) {
                playerHeader.textContent = playerName;
            }
            
            showNotification('Player details loaded successfully', 'success');
        }, 1000);
    }
    
    function getPlayerName(id) {
        // Mock player data - in a real app, this would come from a database
        const players = {
            '1': 'Lionel Messi',
            '2': 'Cristiano Ronaldo',
            '3': 'Kylian Mbappé',
            '4': 'Erling Haaland',
            '5': 'Kevin De Bruyne',
            '6': 'Vinícius Júnior'
        };
        
        return players[id] || 'Unknown Player';
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
    if (!document.querySelector('#player-details-styles')) {
        const style = document.createElement('style');
        style.id = 'player-details-styles';
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

// Player data
const players = {
    1: {
        name: "Lionel Messi",
        image: "images/player1.jpg",
        rating: 93,
        position: "Forward",
        team: "Inter Miami CF",
        goals: 35,
        assists: 14,
        matches: 42,
        minutesPlayed: 3780,
        goalsPerGame: 0.83,
        assistsPerGame: 0.33,
        shotsOnTarget: 120,
        shotAccuracy: "78%",
        conversionRate: "29%",
        passAccuracy: "85%",
        keyPasses: 89,
        crossAccuracy: "72%",
        tackles: 12,
        interceptions: 8,
        clearances: 5,
        bio: "Widely regarded as one of the greatest players of all time, Lionel Messi has won a record seven Ballon d'Or awards and a record six European Golden Shoes. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 35 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues."
    },
    2: {
        name: "Cristiano Ronaldo",
        image: "images/player2.jpg",
        rating: 91,
        position: "Forward",
        team: "Al Nassr FC",
        goals: 28,
        assists: 7,
        matches: 39,
        minutesPlayed: 3510,
        goalsPerGame: 0.72,
        assistsPerGame: 0.18,
        shotsOnTarget: 95,
        shotAccuracy: "75%",
        conversionRate: "29%",
        passAccuracy: "82%",
        keyPasses: 45,
        crossAccuracy: "68%",
        tackles: 8,
        interceptions: 6,
        clearances: 4,
        bio: "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward and captains both Saudi Pro League club Al Nassr and the Portugal national team. He is considered one of the greatest players of all time and has won five Ballon d'Or awards, a record three UEFA Best Player in Europe, and four European Golden Shoes."
    },
    3: {
        name: "Erling Haaland",
        image: "images/player3.jpg",
        rating: 90,
        position: "Forward",
        team: "Manchester City",
        goals: 42,
        assists: 8,
        matches: 45,
        minutesPlayed: 4050,
        goalsPerGame: 0.93,
        assistsPerGame: 0.18,
        shotsOnTarget: 110,
        shotAccuracy: "76%",
        conversionRate: "38%",
        passAccuracy: "78%",
        keyPasses: 32,
        crossAccuracy: "65%",
        tackles: 10,
        interceptions: 7,
        clearances: 6,
        bio: "Erling Haaland is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Known for his speed, strength, and finishing ability, he is considered one of the best strikers in the world."
    },
    4: {
        name: "Kylian Mbappé",
        image: "images/player4.jpg",
        rating: 89,
        position: "Forward",
        team: "Real Madrid",
        goals: 31,
        assists: 12,
        matches: 40,
        minutesPlayed: 3600,
        goalsPerGame: 0.78,
        assistsPerGame: 0.30,
        shotsOnTarget: 98,
        shotAccuracy: "77%",
        conversionRate: "32%",
        passAccuracy: "83%",
        keyPasses: 65,
        crossAccuracy: "70%",
        tackles: 15,
        interceptions: 9,
        clearances: 7,
        bio: "Kylian Mbappé is a French professional footballer who plays as a forward for La Liga club Real Madrid and the France national team. Known for his exceptional speed, dribbling, and finishing, he is considered one of the best players in the world."
    },
    5: {
        name: "Kevin De Bruyne",
        image: "images/player5.jpg",
        rating: 88,
        position: "Midfielder",
        team: "Manchester City",
        goals: 12,
        assists: 24,
        matches: 38,
        minutesPlayed: 3420,
        goalsPerGame: 0.32,
        assistsPerGame: 0.63,
        shotsOnTarget: 45,
        shotAccuracy: "72%",
        conversionRate: "27%",
        passAccuracy: "88%",
        keyPasses: 120,
        crossAccuracy: "82%",
        tackles: 35,
        interceptions: 28,
        clearances: 15,
        bio: "Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder for Premier League club Manchester City and the Belgium national team. Known for his exceptional passing, vision, and technical ability, he is considered one of the best midfielders in the world."
    },
    6: {
        name: "Virgil van Dijk",
        image: "images/player6.jpg",
        rating: 87,
        position: "Defender",
        team: "Liverpool",
        goals: 5,
        assists: 2,
        matches: 41,
        minutesPlayed: 3690,
        goalsPerGame: 0.12,
        assistsPerGame: 0.05,
        shotsOnTarget: 12,
        shotAccuracy: "65%",
        conversionRate: "42%",
        passAccuracy: "89%",
        keyPasses: 15,
        crossAccuracy: "75%",
        tackles: 45,
        interceptions: 38,
        clearances: 120,
        bio: "Virgil van Dijk is a Dutch professional footballer who plays as a centre-back for Premier League club Liverpool and the Netherlands national team. Known for his strength, leadership, and defensive abilities, he is considered one of the best defenders in the world."
    }
};

// Function to load player data
function loadPlayerData() {
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get('id');
    
    if (playerId && players[playerId]) {
        const player = players[playerId];
        
        // Update player information
        document.getElementById('player-name').textContent = player.name;
        document.getElementById('player-image').src = player.image;
        document.getElementById('player-image').alt = player.name;
        document.getElementById('player-rating').textContent = player.rating;
        document.getElementById('player-position').textContent = player.position;
        document.getElementById('player-team').textContent = player.team;
        document.getElementById('goals').textContent = player.goals;
        document.getElementById('assists').textContent = player.assists;
        document.getElementById('matches').textContent = player.matches;
        
        // Update detailed statistics
        document.getElementById('minutes-played').textContent = player.minutesPlayed;
        document.getElementById('goals-per-game').textContent = player.goalsPerGame;
        document.getElementById('assists-per-game').textContent = player.assistsPerGame;
        document.getElementById('shots-on-target').textContent = player.shotsOnTarget;
        document.getElementById('shot-accuracy').textContent = player.shotAccuracy;
        document.getElementById('conversion-rate').textContent = player.conversionRate;
        document.getElementById('pass-accuracy').textContent = player.passAccuracy;
        document.getElementById('key-passes').textContent = player.keyPasses;
        document.getElementById('cross-accuracy').textContent = player.crossAccuracy;
        document.getElementById('tackles').textContent = player.tackles;
        document.getElementById('interceptions').textContent = player.interceptions;
        document.getElementById('clearances').textContent = player.clearances;
        
        // Update biography
        document.getElementById('player-bio').textContent = player.bio;
        
        // Update page title
        document.title = `${player.name} - Player Details | FootStats`;
    } else {
        // Redirect to players page if player ID is invalid
        window.location.href = 'players.html';
    }
}

// Load player data when the page loads
document.addEventListener('DOMContentLoaded', loadPlayerData);