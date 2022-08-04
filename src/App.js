import { useState } from "react";

import "./App.css";

import { gamesData } from "./Data/data.js";
import { testData } from "./Data/testdata.js";

import { calculateStats } from "./calculateStats.js";
import SelectStats from "./Components/SelectStats/SelectStats";
import GeneralStats from "./Components/GeneralStats/GeneralStats.jsx";
import KDAStats from "./Components/KDAStats/KDAStats";
import RecordsStats from "./Components/RecordsStats/RecordsStats";
import MVPStats from "./Components/MVPStats/MVPStats";
import TimeStats from "./Components/TimeStats/TimeStats";

function App() {
  const [value, setvalue] = useState("");
  const [showStats, setshowStats] = useState({
    showAnyStats: true,
    showGeneral: false,
    showKDA: false,
    showRecords: false,
    showMVP: false,
    showTime: false,
  });
  const [stats, setstats] = useState({
    victories: 0,
    defeats: 0,
    remakes: 0,
    games: 0,
    winratio: 0,
    kills: 0,
    deaths: 0,
    assists: 0,
    mostKills: 0,
    mostDeaths: 0,
    mostAssists: 0,
    highKDA: 0,
    KDA: 0,
    deathlessGames: 0,
    deathlessGamesPercent: 0,
    MVP: 0,
    MVPPercent: 0,
    ACE: 0,
    ACEPercent: 0,
    MVPOrACE: 0,
    MVPOrACEPercent: 0,
    creepScore: 0,
    CSPerMinute: 0,
    gameTime: "",
    shortestGame: "",
    longestGame: "",
  });

  const {
    victories,
    defeats,
    remakes,
    games,
    winratio,
    kills,
    deaths,
    assists,
    mostKills,
    mostDeaths,
    mostAssists,
    highKDA,
    KDA,
    deathlessGames,
    deathlessGamesPercent,
    MVP,
    MVPPercent,
    ACE,
    ACEPercent,
    MVPOrACE,
    MVPOrACEPercent,
    creepScore,
    CSPerMinute,
    gameTime,
    shortestGame,
    longestGame,
  } = stats;

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateStats(value, stats, setstats);
    setshowStats({ ...showStats, showAnyStats: true, showGeneral: true });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <label htmlFor="data">Paste your games:</label>
        <textarea value={value} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      {showStats.showAnyStats && <SelectStats props={[showStats, setshowStats]} />}
      {showStats.showAnyStats && (
        <main>
          {showStats.showGeneral && (
            <GeneralStats
              props={{ victories, defeats, remakes, games, winratio, creepScore, CSPerMinute }}
            />
          )}
          {showStats.showKDA && (
            <KDAStats
              props={{ kills, deaths, assists, KDA, deathlessGames, deathlessGamesPercent }}
            />
          )}
          {showStats.showRecords && (
            <RecordsStats props={{ mostKills, mostDeaths, mostAssists, highKDA }} />
          )}
          {showStats.showMVP && (
            <MVPStats props={{ MVP, MVPPercent, ACE, ACEPercent, MVPOrACE, MVPOrACEPercent }} />
          )}
          {showStats.showTime && <TimeStats props={{ gameTime, shortestGame, longestGame }} />}
        </main>
      )}
    </div>
  );
}

export default App;
