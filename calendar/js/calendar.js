
fetch('http://api.sportradar.us/nfl/official/trial/v7/en/games/current_season/schedule.json?api_key=qzzcby3fq9nxwz25zkfx6dj6')
    .then(response => {
        if(!response.ok) {
            throw new Error('network error');
        }
        return response.json();
    })
    .then(data => {
        const games = data.weeks[0].games; 
        games.forEach(game => {
          const homeTeamName = game.home.name;
          const awayTeamName = game.away.name;
          const scheduledDate = game.scheduled;
          const stadiumName = game.venue.name;
    
          
          console.log(`Home Team: ${homeTeamName}`);
          console.log(`Away Team: ${awayTeamName}`);
          console.log(`Scheduled Date: ${scheduledDate}`);
          console.log(`Stadium Name: ${stadiumName}`);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
