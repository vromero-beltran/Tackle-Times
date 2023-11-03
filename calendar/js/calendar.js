const fs = require('fs');

const rawGameData = fs.readFileSync('../calendar.json');
const gamesData = JSON.parse(rawGameData);


gamesData.forEach(game => {
    const homeTeamName = game.home.name;
    const awayTeamName = game.away.name;
    const gameDate = game.scheduled;
    const stadiumName = game.venue.name;


    console.log(`Home Team: ${homeTeamName}`);
    console.log(`Away Team: ${awayTeamName}`);
    console.log(`Game Date: ${gameDate}`);
    console.log(`Stadium Name: ${stadiumName}`);
});


