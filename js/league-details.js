document.addEventListener('DOMContentLoaded', function() {
    // Get league ID from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const leagueId = urlParams.get('id');
    
    if (leagueId) {
        // In a real application, you would fetch league data from a server
        // For demo purposes, we'll simulate loading league data
        loadLeagueDetails(leagueId);
    } else {
        // No league ID provided, redirect to leagues list
        window.location.href = 'leagues.html';
    }
    
    // Season selector
    const seasonSelector = document.getElementById('season-selector');
    if (seasonSelector) {
        seasonSelector.addEventListener('change', function() {
            const selectedSeason = this.value;
            showNotification(`Loading data for ${selectedSeason} season...`, 'info');
            
            // In a real application, you would fetch data for the selected season
            // and update the UI
            setTimeout(() => {
                showNotification(`Data for ${selectedSeason} season loaded successfully`, 'success');
            }, 1000);
        });
    }
    
    // Standings/Stats tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
                
                // Show the selected tab content
                const targetTab = this.getAttribute('data-tab');
                document.getElementById(targetTab).style.display = 'block';
            });
        });
    }
    
    function loadLeagueDetails(id) {
        // Simulate loading data with a delay
        showNotification('Loading league details...', 'info');
        
        // In a real application, you would fetch data from a server
        // For demo purposes, we'll simulate a successful data load
        setTimeout(() => {
            // Update page title with league name
            const leagueName = getLeagueName(id);
            document.title = `${leagueName} - FootStats`;
            
            // Update league header
            const leagueHeader = document.querySelector('.league-header h1');
            if (leagueHeader) {
                leagueHeader.textContent = leagueName;
            }
            
            showNotification('League details loaded successfully', 'success');
        }, 1000);
    }
    
    function getLeagueName(id) {
        // Mock league data - in a real app, this would come from a database
        const leagues = {
            '1': 'Premier League',
            '2': 'La Liga',
            '3': 'Bundesliga',
            '4': 'Serie A',
            '5': 'Ligue 1',
            '6': 'UEFA Champions League'
        };
        
        return leagues[id] || 'Unknown League';
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
    if (!document.querySelector('#league-details-styles')) {
        const style = document.createElement('style');
        style.id = 'league-details-styles';
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

// League data (mock data for demonstration)
const leagues = {
    1: {
        name: "Premier League",
        logo: "images/leagues/premier-league.png",
        country: "England",
        founded: "1992",
        level: "Top Division",
        description: "The Premier League is the top level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL).",
        stats: {
            totalTeams: 20,
            totalMatches: 380,
            totalGoals: 1084,
            avgGoals: 2.85
        },
        teams: [
            {
                name: "Manchester City",
                logo: "images/teams/manchester-city.png",
                position: 1,
                points: 89,
                played: 38,
                won: 28,
                drawn: 5,
                lost: 5
            },
            {
                name: "Arsenal",
                logo: "images/teams/arsenal.png",
                position: 2,
                points: 84,
                played: 38,
                won: 26,
                drawn: 6,
                lost: 6
            },
            {
                name: "Manchester United",
                logo: "images/teams/manchester-united.png",
                position: 3,
                points: 75,
                played: 38,
                won: 23,
                drawn: 6,
                lost: 9
            },
            {
                name: "Newcastle United",
                logo: "images/teams/newcastle.png",
                position: 4,
                points: 71,
                played: 38,
                won: 19,
                drawn: 14,
                lost: 5
            }
        ],
        topScorers: [
            {
                name: "Erling Haaland",
                image: "images/players/haaland.jpg",
                team: "Manchester City",
                goals: 36,
                assists: 8
            },
            {
                name: "Harry Kane",
                image: "images/players/kane.jpg",
                team: "Tottenham Hotspur",
                goals: 30,
                assists: 3
            },
            {
                name: "Ivan Toney",
                image: "images/players/toney.jpg",
                team: "Brentford",
                goals: 20,
                assists: 4
            }
        ],
        upcomingMatches: [
            {
                date: "2023-08-12",
                time: "15:00",
                homeTeam: "Manchester City",
                homeLogo: "images/teams/manchester-city.png",
                awayTeam: "Burnley",
                awayLogo: "images/teams/burnley.png",
                venue: "Etihad Stadium"
            },
            {
                date: "2023-08-12",
                time: "17:30",
                homeTeam: "Arsenal",
                homeLogo: "images/teams/arsenal.png",
                awayTeam: "Nottingham Forest",
                awayLogo: "images/teams/nottingham.png",
                venue: "Emirates Stadium"
            },
            {
                date: "2023-08-13",
                time: "16:30",
                homeTeam: "Chelsea",
                homeLogo: "images/teams/chelsea.png",
                awayTeam: "Liverpool",
                awayLogo: "images/teams/liverpool.png",
                venue: "Stamford Bridge"
            }
        ]
    },
    2: {
        name: "La Liga",
        logo: "images/leagues/la-liga.png",
        country: "Spain",
        founded: "1929",
        level: "Top Division",
        description: "La Liga, officially known as the Primera División, is the men's top professional football division of the Spanish football league system. It is contested by 20 teams.",
        stats: {
            totalTeams: 20,
            totalMatches: 380,
            totalGoals: 1012,
            avgGoals: 2.66
        },
        teams: [
            {
                name: "Barcelona",
                logo: "images/teams/barcelona.png",
                position: 1,
                points: 88,
                played: 38,
                won: 28,
                drawn: 4,
                lost: 6
            },
            {
                name: "Real Madrid",
                logo: "images/teams/real-madrid.png",
                position: 2,
                points: 78,
                played: 38,
                won: 24,
                drawn: 6,
                lost: 8
            },
            {
                name: "Atlético Madrid",
                logo: "images/teams/atletico.png",
                position: 3,
                points: 77,
                played: 38,
                won: 23,
                drawn: 8,
                lost: 7
            },
            {
                name: "Real Sociedad",
                logo: "images/teams/real-sociedad.png",
                position: 4,
                points: 71,
                played: 38,
                won: 21,
                drawn: 8,
                lost: 9
            }
        ],
        topScorers: [
            {
                name: "Robert Lewandowski",
                image: "images/players/lewandowski.jpg",
                team: "Barcelona",
                goals: 23,
                assists: 7
            },
            {
                name: "Karim Benzema",
                image: "images/players/benzema.jpg",
                team: "Real Madrid",
                goals: 19,
                assists: 3
            },
            {
                name: "Joselu",
                image: "images/players/joselu.jpg",
                team: "Espanyol",
                goals: 16,
                assists: 2
            }
        ],
        upcomingMatches: [
            {
                date: "2023-08-13",
                time: "21:00",
                homeTeam: "Barcelona",
                homeLogo: "images/teams/barcelona.png",
                awayTeam: "Getafe",
                awayLogo: "images/teams/getafe.png",
                venue: "Camp Nou"
            },
            {
                date: "2023-08-14",
                time: "21:00",
                homeTeam: "Real Madrid",
                homeLogo: "images/teams/real-madrid.png",
                awayTeam: "Athletic Bilbao",
                awayLogo: "images/teams/athletic.png",
                venue: "Santiago Bernabéu"
            },
            {
                date: "2023-08-15",
                time: "19:30",
                homeTeam: "Atlético Madrid",
                homeLogo: "images/teams/atletico.png",
                awayTeam: "Granada",
                awayLogo: "images/teams/granada.png",
                venue: "Wanda Metropolitano"
            }
        ]
    },
    3: {
        name: "Bundesliga",
        logo: "images/leagues/bundesliga.png",
        country: "Germany",
        founded: "1963",
        level: "Top Division",
        description: "The Bundesliga is the top tier of the German football league system. It is contested by 18 teams and operates on a system of promotion and relegation with the 2. Bundesliga.",
        stats: {
            totalTeams: 18,
            totalMatches: 306,
            totalGoals: 954,
            avgGoals: 3.12
        },
        teams: [
            {
                name: "Bayern Munich",
                logo: "images/teams/bayern-munich.png",
                position: 1,
                points: 71,
                played: 34,
                won: 21,
                drawn: 8,
                lost: 5
            },
            {
                name: "Borussia Dortmund",
                logo: "images/teams/dortmund.png",
                position: 2,
                points: 71,
                played: 34,
                won: 22,
                drawn: 5,
                lost: 7
            },
            {
                name: "RB Leipzig",
                logo: "images/teams/leipzig.png",
                position: 3,
                points: 66,
                played: 34,
                won: 20,
                drawn: 6,
                lost: 8
            },
            {
                name: "Union Berlin",
                logo: "images/teams/union-berlin.png",
                position: 4,
                points: 62,
                played: 34,
                won: 18,
                drawn: 8,
                lost: 8
            }
        ],
        topScorers: [
            {
                name: "Christopher Nkunku",
                image: "images/players/nkunku.jpg",
                team: "RB Leipzig",
                goals: 16,
                assists: 4
            },
            {
                name: "Niclas Füllkrug",
                image: "images/players/fullkrug.jpg",
                team: "Werder Bremen",
                goals: 16,
                assists: 5
            },
            {
                name: "Randal Kolo Muani",
                image: "images/players/kolo-muani.jpg",
                team: "Eintracht Frankfurt",
                goals: 15,
                assists: 11
            }
        ],
        upcomingMatches: [
            {
                date: "2023-08-18",
                time: "20:30",
                homeTeam: "Bayern Munich",
                homeLogo: "images/teams/bayern-munich.png",
                awayTeam: "Werder Bremen",
                awayLogo: "images/teams/werder-bremen.png",
                venue: "Allianz Arena"
            },
            {
                date: "2023-08-19",
                time: "15:30",
                homeTeam: "Borussia Dortmund",
                homeLogo: "images/teams/dortmund.png",
                awayTeam: "FC Köln",
                awayLogo: "images/teams/koln.png",
                venue: "Signal Iduna Park"
            },
            {
                date: "2023-08-19",
                time: "18:30",
                homeTeam: "RB Leipzig",
                homeLogo: "images/teams/leipzig.png",
                awayTeam: "Bayer Leverkusen",
                awayLogo: "images/teams/leverkusen.png",
                venue: "Red Bull Arena"
            }
        ]
    },
    4: {
        name: "Serie A",
        logo: "images/leagues/serie-a.png",
        country: "Italy",
        founded: "1929",
        level: "Top Division",
        description: "Serie A is the top professional football league in Italy. It is contested by 20 teams and operates on a system of promotion and relegation with Serie B.",
        stats: {
            totalTeams: 20,
            totalMatches: 380,
            totalGoals: 974,
            avgGoals: 2.56
        },
        teams: [
            {
                name: "Napoli",
                logo: "images/teams/napoli.png",
                position: 1,
                points: 90,
                played: 38,
                won: 28,
                drawn: 6,
                lost: 4
            },
            {
                name: "Lazio",
                logo: "images/teams/lazio.png",
                position: 2,
                points: 74,
                played: 38,
                won: 22,
                drawn: 8,
                lost: 8
            },
            {
                name: "Inter Milan",
                logo: "images/teams/inter.png",
                position: 3,
                points: 72,
                played: 38,
                won: 23,
                drawn: 3,
                lost: 12
            },
            {
                name: "AC Milan",
                logo: "images/teams/ac-milan.png",
                position: 4,
                points: 70,
                played: 38,
                won: 20,
                drawn: 10,
                lost: 8
            }
        ],
        topScorers: [
            {
                name: "Victor Osimhen",
                image: "images/players/osimhen.jpg",
                team: "Napoli",
                goals: 26,
                assists: 4
            },
            {
                name: "Lautaro Martínez",
                image: "images/players/martinez.jpg",
                team: "Inter Milan",
                goals: 21,
                assists: 6
            },
            {
                name: "Rafael Leão",
                image: "images/players/leao.jpg",
                team: "AC Milan",
                goals: 15,
                assists: 8
            }
        ],
        upcomingMatches: [
            {
                date: "2023-08-19",
                time: "18:30",
                homeTeam: "Napoli",
                homeLogo: "images/teams/napoli.png",
                awayTeam: "Fiorentina",
                awayLogo: "images/teams/fiorentina.png",
                venue: "Diego Armando Maradona Stadium"
            },
            {
                date: "2023-08-20",
                time: "20:45",
                homeTeam: "Inter Milan",
                homeLogo: "images/teams/inter.png",
                awayTeam: "Monza",
                awayLogo: "images/teams/monza.png",
                venue: "San Siro"
            },
            {
                date: "2023-08-21",
                time: "20:45",
                homeTeam: "AC Milan",
                homeLogo: "images/teams/ac-milan.png",
                awayTeam: "Bologna",
                awayLogo: "images/teams/bologna.png",
                venue: "San Siro"
            }
        ]
    },
    5: {
        name: "Ligue 1",
        logo: "images/leagues/ligue-1.png",
        country: "France",
        founded: "1932",
        level: "Top Division",
        description: "Ligue 1 is the top professional football division of the French football league system. It is contested by 18 clubs and operates on a system of promotion and relegation with Ligue 2.",
        stats: {
            totalTeams: 18,
            totalMatches: 306,
            totalGoals: 845,
            avgGoals: 2.76
        },
        teams: [
            {
                name: "Paris Saint-Germain",
                logo: "images/teams/psg.png",
                position: 1,
                points: 85,
                played: 38,
                won: 27,
                drawn: 4,
                lost: 7
            },
            {
                name: "Lens",
                logo: "images/teams/lens.png",
                position: 2,
                points: 84,
                played: 38,
                won: 25,
                drawn: 9,
                lost: 4
            },
            {
                name: "Marseille",
                logo: "images/teams/marseille.png",
                position: 3,
                points: 73,
                played: 38,
                won: 22,
                drawn: 7,
                lost: 9
            },
            {
                name: "Rennes",
                logo: "images/teams/rennes.png",
                position: 4,
                points: 68,
                played: 38,
                won: 21,
                drawn: 5,
                lost: 12
            }
        ],
        topScorers: [
            {
                name: "Kylian Mbappé",
                image: "images/players/mbappe.jpg",
                team: "Paris Saint-Germain",
                goals: 29,
                assists: 5
            },
            {
                name: "Alexandre Lacazette",
                image: "images/players/lacazette.jpg",
                team: "Lyon",
                goals: 27,
                assists: 5
            },
            {
                name: "Jonathan David",
                image: "images/players/david.jpg",
                team: "Lille",
                goals: 24,
                assists: 4
            }
        ],
        upcomingMatches: [
            {
                date: "2023-08-12",
                time: "20:45",
                homeTeam: "Paris Saint-Germain",
                homeLogo: "images/teams/psg.png",
                awayTeam: "Lorient",
                awayLogo: "images/teams/lorient.png",
                venue: "Parc des Princes"
            },
            {
                date: "2023-08-13",
                time: "15:00",
                homeTeam: "Lens",
                homeLogo: "images/teams/lens.png",
                awayTeam: "Brest",
                awayLogo: "images/teams/brest.png",
                venue: "Stade Bollaert-Delelis"
            },
            {
                date: "2023-08-13",
                time: "17:00",
                homeTeam: "Marseille",
                homeLogo: "images/teams/marseille.png",
                awayTeam: "Reims",
                awayLogo: "images/teams/reims.png",
                venue: "Stade Vélodrome"
            }
        ]
    },
    6: {
        name: "UEFA Champions League",
        logo: "images/leagues/champions-league.png",
        country: "Europe",
        founded: "1955",
        level: "Continental",
        description: "The UEFA Champions League is an annual club football competition organized by the Union of European Football Associations and contested by top-division European clubs.",
        stats: {
            totalTeams: 32,
            totalMatches: 125,
            totalGoals: 372,
            avgGoals: 2.98
        },
        teams: [
            {
                name: "Manchester City",
                logo: "images/teams/manchester-city.png",
                position: 1,
                points: 28,
                played: 13,
                won: 8,
                drawn: 4,
                lost: 1
            },
            {
                name: "Real Madrid",
                logo: "images/teams/real-madrid.png",
                position: 2,
                points: 26,
                played: 13,
                won: 8,
                drawn: 2,
                lost: 3
            },
            {
                name: "Inter Milan",
                logo: "images/teams/inter.png",
                position: 3,
                points: 25,
                played: 13,
                won: 7,
                drawn: 4,
                lost: 2
            },
            {
                name: "AC Milan",
                logo: "images/teams/ac-milan.png",
                position: 4,
                points: 24,
                played: 12,
                won: 7,
                drawn: 3,
                lost: 2
            }
        ],
        topScorers: [
            {
                name: "Erling Haaland",
                image: "images/players/haaland.jpg",
                team: "Manchester City",
                goals: 12,
                assists: 1
            },
            {
                name: "Mohamed Salah",
                image: "images/players/salah.jpg",
                team: "Liverpool",
                goals: 8,
                assists: 2
            },
            {
                name: "Vinicius Junior",
                image: "images/players/vinicius.jpg",
                team: "Real Madrid",
                goals: 7,
                assists: 5
            }
        ],
        upcomingMatches: [
            {
                date: "2023-09-19",
                time: "20:00",
                homeTeam: "Bayern Munich",
                homeLogo: "images/teams/bayern-munich.png",
                awayTeam: "Manchester United",
                awayLogo: "images/teams/manchester-united.png",
                venue: "Allianz Arena"
            },
            {
                date: "2023-09-20",
                time: "20:00",
                homeTeam: "Real Madrid",
                homeLogo: "images/teams/real-madrid.png",
                awayTeam: "Union Berlin",
                awayLogo: "images/teams/union-berlin.png",
                venue: "Santiago Bernabéu"
            },
            {
                date: "2023-09-20",
                time: "20:00",
                homeTeam: "Inter Milan",
                homeLogo: "images/teams/inter.png",
                awayTeam: "Real Sociedad",
                awayLogo: "images/teams/real-sociedad.png",
                venue: "San Siro"
            }
        ]
    }
};

// Function to load league data
function loadLeagueData() {
    const urlParams = new URLSearchParams(window.location.search);
    const leagueId = urlParams.get('id');
    
    if (leagueId && leagues[leagueId]) {
        const league = leagues[leagueId];
        
        // Update league information
        document.getElementById('league-name').textContent = league.name;
        document.getElementById('league-logo').src = league.logo;
        document.getElementById('league-logo').alt = league.name;
        document.getElementById('league-country').textContent = league.country;
        document.getElementById('league-founded').textContent = `Founded: ${league.founded}`;
        document.getElementById('league-level').textContent = league.level;
        document.getElementById('league-description').textContent = league.description;
        
        // Update stats
        document.getElementById('total-teams').textContent = league.stats.totalTeams;
        document.getElementById('total-matches').textContent = league.stats.totalMatches;
        document.getElementById('total-goals').textContent = league.stats.totalGoals;
        document.getElementById('avg-goals').textContent = league.stats.avgGoals;
        
        // Update teams
        const teamsGrid = document.getElementById('teams-grid');
        teamsGrid.innerHTML = league.teams.map(team => `
            <div class="team-card">
                <div class="team-logo">
                    <img src="${team.logo}" alt="${team.name}">
                </div>
                <div class="team-name">${team.name}</div>
                <div class="team-stats">
                    <div>P: ${team.played}</div>
                    <div>W: ${team.won}</div>
                    <div>D: ${team.drawn}</div>
                    <div>L: ${team.lost}</div>
                </div>
            </div>
        `).join('');
        
        // Update top scorers
        const topScorers = document.getElementById('top-scorers');
        topScorers.innerHTML = league.topScorers.map(scorer => `
            <div class="scorer-card">
                <div class="scorer-image">
                    <img src="${scorer.image}" alt="${scorer.name}">
                </div>
                <div class="scorer-info">
                    <div class="scorer-name">${scorer.name}</div>
                    <div class="scorer-team">${scorer.team}</div>
                </div>
                <div class="scorer-goals">${scorer.goals} goals</div>
            </div>
        `).join('');
        
        // Update upcoming matches
        const upcomingMatches = document.getElementById('upcoming-matches');
        upcomingMatches.innerHTML = league.upcomingMatches.map(match => `
            <div class="match-card">
                <div class="match-teams">
                    <div class="match-team">
                        <div class="match-team-logo">
                            <img src="${match.homeLogo}" alt="${match.homeTeam}">
                        </div>
                        <div class="match-team-name">${match.homeTeam}</div>
                    </div>
                    <div class="match-vs">VS</div>
                    <div class="match-team">
                        <div class="match-team-logo">
                            <img src="${match.awayLogo}" alt="${match.awayTeam}">
                        </div>
                        <div class="match-team-name">${match.awayTeam}</div>
                    </div>
                </div>
                <div class="match-info">
                    <div>${new Date(match.date).toLocaleDateString()}</div>
                    <div>${match.time}</div>
                    <div>${match.venue}</div>
                </div>
            </div>
        `).join('');
        
        // Update page title
        document.title = `${league.name} - League Details | FootStats`;
    } else {
        // Redirect to leagues page if league ID is invalid
        window.location.href = 'leagues.html';
    }
}

// Load league data when the page loads
document.addEventListener('DOMContentLoaded', loadLeagueData);