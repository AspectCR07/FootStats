document.addEventListener('DOMContentLoaded', function() {
    // Find all "View Details" buttons for coaches
    const coachDetailButtons = document.querySelectorAll('a[href*="coach-details.html"]');
    
    // Add event listeners to coach detail buttons
    coachDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Get the coach ID from the href attribute
            const href = this.getAttribute('href');
            const coachId = href.split('id=')[1];
            
            // Navigate to the coach details page with the ID
            window.location.href = `coach-details.html?id=${coachId}`;
        });
    });
    
    // Find all "View Details" buttons for teams
    const teamDetailButtons = document.querySelectorAll('a[href*="team-details.html"]');
    
    // Add event listeners to team detail buttons
    teamDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Get the team ID from the href attribute
            const href = this.getAttribute('href');
            const teamId = href.split('id=')[1];
            
            // Navigate to the team details page with the ID
            window.location.href = `team-details.html?id=${teamId}`;
        });
    });
    
    // Find all "View Details" buttons for leagues
    const leagueDetailButtons = document.querySelectorAll('a[href*="league-details.html"]');
    
    // Add event listeners to league detail buttons
    leagueDetailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Get the league ID from the href attribute
            const href = this.getAttribute('href');
            const leagueId = href.split('id=')[1];
            
            // Navigate to the league details page with the ID
            window.location.href = `league-details.html?id=${leagueId}`;
        });
    });
});