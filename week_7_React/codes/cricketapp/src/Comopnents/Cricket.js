import React from "react";

const ListOfPlayers = () => {
  const players = [
    { name: "Player1", score: 90 },
    { name: "Player2", score: 65 },
    { name: "Player3", score: 55 },
    { name: "Player4", score: 80 },
    { name: "Player5", score: 45 },
    { name: "Player6", score: 75 },
    { name: "Player7", score: 60 },
    { name: "Player8", score: 85 },
    { name: "Player9", score: 50 },
    { name: "Player10", score: 95 },
    { name: "Player11", score: 40 },
  ];

  const playersBelow70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - <span>{player.score}</span>
          </li>
        ))}
      </ul>

      <h2>List of Players having Scores Below 70</h2>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            {player.name} - <span>{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndianPlayers = () => {
  const T20Players = ["First Player", "Second Player", "Third Player"];
  const RanjiTrophyPlayers = ["Fourth Player", "Fifth Player", "Sixth Player"];

  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const oddPlayers = IndianPlayers.filter((_, index) => index % 2 === 1);
  const evenPlayers = IndianPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Indian Team</h2>
      <h3>Odd Players</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Players</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>List of Indian Players Merged:</h3>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const flag = false;

  return (
    <div style={{ padding: "20px" }}>
      {flag ? (
        <ListOfPlayers />
      ) : (
        <IndianPlayers />
      )}
    </div>
  );
};

export default App;
