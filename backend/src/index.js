const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const port = 5000;
app.use(
  cors({
    origin: "*",
  })
);
app.post("/robin", (req, res, next) => {
  const result = req.body.value.split(",");
  const matchTeams = (teams) => {
    const teamCopy = Array.from(teams);
    if (teamCopy % 2 == 1) {
      teamCopy.push(null);
    }
    const pairs = [];
    while (teamCopy.length != 0) {
      const participant1 = teamCopy.shift();
      const participant2 = teamCopy.pop();
      if (participant1 && participant2) {
        pairs.push([participant1, participant2]);
      }
    }
    return pairs;
  };

  const rotateTeams = (array) => {
    const teamCopy = Array.from(array);
    const firstElement = teamCopy.shift();
    const lastElement = teamCopy.pop();
    return [firstElement, lastElement, ...teamCopy];
  };

  const generateTournament = (teams) => {
    const tournamentRounds = [];
    const rounds = Math.ceil(teams.length / 2);
    let teamCopy = Array.from(teams);
    for (let i = 0; i < rounds; i++) {
      tournamentRounds.push(matchTeams(teamCopy));
      teamCopy = rotateTeams(teamCopy);
    }
    return tournamentRounds;
  };
  const schedule = generateTournament(result);
  res.json(schedule);
});
app.listen(port, () => {
  console.log("server running on port " + port);
});
