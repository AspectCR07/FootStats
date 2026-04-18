// Function to fetch and display players
async function fetchPlayers() {
    try {
        const response = await fetch('http://localhost:3000/api/players');
        const players = await response.json();
        
        const playersContainer = document.querySelector('.players-grid');
        if (playersContainer) {
            playersContainer.innerHTML = players.map(player => `
                <div class="player-card">
                    <div class="player-image">
                        <img src="${player.image || 'images/default-player.jpg'}" alt="${player.name}">
                    </div>
                    <div class="player-info">
                        <h3>${player.name}</h3>
                        <p class="position">${player.position}</p>
                        <p class="team">Team: ${player.team_id}</p>
                        <p class="nationality">${player.nationality}</p>
                        <a href="player-details.html?id=${player.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}

// Function to fetch and display teams
async function fetchTeams() {
    try {
        const response = await fetch('http://localhost:3000/api/teams');
        const teams = await response.json();
        
        const teamsContainer = document.querySelector('.teams-grid');
        if (teamsContainer) {
            teamsContainer.innerHTML = teams.map(team => `
                <div class="team-card">
                    <div class="team-image">
                        <img src="${team.logo || 'images/default-team.jpg'}" alt="${team.name}">
                    </div>
                    <div class="team-info">
                        <h3>${team.name}</h3>
                        <p class="stadium">${team.stadium}</p>
                        <p class="founded">Founded: ${team.founded_year}</p>
                        <a href="team-details.html?id=${team.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

// Function to fetch and display coaches
async function fetchCoaches() {
    try {
        const response = await fetch('http://localhost:3000/api/coaches');
        const coaches = await response.json();
        
        const coachesContainer = document.querySelector('.coaches-grid');
        if (coachesContainer) {
            coachesContainer.innerHTML = coaches.map(coach => `
                <div class="coach-card">
                    <div class="coach-image">
                        <img src="${coach.image || 'images/default-coach.jpg'}" alt="${coach.name}">
                    </div>
                    <div class="coach-info">
                        <h3>${coach.name}</h3>
                        <p class="team">Team: ${coach.team_id}</p>
                        <p class="experience">Experience: ${coach.experience_years} years</p>
                        <p class="nationality">${coach.nationality}</p>
                        <a href="coach-details.html?id=${coach.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching coaches:', error);
    }
}

// Function to fetch and display leagues
async function fetchLeagues() {
    try {
        const response = await fetch('http://localhost:3000/api/leagues');
        const leagues = await response.json();
        
        const leaguesContainer = document.querySelector('.leagues-grid');
        if (leaguesContainer) {
            leaguesContainer.innerHTML = leagues.map(league => `
                <div class="league-card">
                    <div class="league-image">
                        <img src="${league.logo || 'images/default-league.jpg'}" alt="${league.name}">
                    </div>
                    <div class="league-info">
                        <h3>${league.name}</h3>
                        <p class="country">${league.country}</p>
                        <p class="founded">Founded: ${league.founded_year}</p>
                        <a href="league-details.html?id=${league.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching leagues:', error);
    }
}

// Call appropriate function based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch (currentPage) {
        case 'players.html':
            fetchPlayers();
            break;
        case 'teams.html':
            fetchTeams();
            break;
        case 'coaches.html':
            fetchCoaches();
            break;
        case 'leagues.html':
            fetchLeagues();
            break;
    }
}); 