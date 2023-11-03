

fetch('http://api.sportradar.us/nfl/official/trial/v7/en/games/current_season/schedule.json?api_key=qzzcby3fq9nxwz25zkfx6dj6')
    .then(response => {
        if(!response.ok) {
            throw new Error('network error');
        }
        return response.json();
    })
    .then(data => {
        // grabs favorite team from local storage
        const favoriteTeam = localStorage.getItem('selectedImageId');
    
        if (favoriteTeam) {
          const gamesData = data.weeks; 
    
         // goes through each week of gamesData
          for (const week of gamesData) {
            // checks if week property has games property
            if (week && week.games && Array.isArray(week.games)) {
                // goes through each game
              for (const game of week.games) {
                const homeTeamName = game.home.name;
                const awayTeamName = game.away.name;
                const scheduledDate = game.scheduled;
                const stadiumName = game.venue.name;
                // checks if the game includes favoriteTeam
                if (homeTeamName === favoriteTeam || awayTeamName === favoriteTeam) {
                  console.log(`Home Team: ${homeTeamName}`);
                  console.log(`Away Team: ${awayTeamName}`);
                  console.log(`Scheduled Date: ${scheduledDate}`);
                  console.log(`Stadium Name: ${stadiumName}`);
                }
              }
            }
          }
        } else {
          console.log('Favorite team not found in local storage.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
