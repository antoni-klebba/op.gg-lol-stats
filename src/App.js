import { useState, useEffect } from "react";

import "./App.scss";

import { gamesData } from "./Data/data.js";
import { testData } from "./Data/testdata.js";

import { calculateStats } from "./calculateStats.js";

import Instruction from "./Components/Instruction/Instruction";
import SelectStats from "./Components/SelectStats/SelectStats";
import GeneralStats from "./Components/GeneralStats/GeneralStats.jsx";
import KDAStats from "./Components/KDAStats/KDAStats";
import RecordsStats from "./Components/RecordsStats/RecordsStats";
import MVPStats from "./Components/MVPStats/MVPStats";
import TimeStats from "./Components/TimeStats/TimeStats";
import ErrorMsg from "./Components/ErrorMsg/ErrorMsg";

// TODO - Redo validation

function App() {
  const convertToBoolean = (str) => {
    if (str === "true") return true;
    else if (str === "false") return false;
  };

  if (localStorage.getItem("instructionOnLoad") === null) {
    localStorage.setItem("instructionOnLoad", true);
  }

  const [value, setvalue] = useState("");
  const [showStats, setshowStats] = useState({
    showAnyStats: false,
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
  const [showInstruction, setShowInstruction] = useState(
    convertToBoolean(localStorage.getItem("instructionOnLoad"))
  );
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [instructionHighlight, setInstructionHighlight] = useState(false);
  const [wallpaper, setWallpaper] = useState(Math.floor(Math.random() * 5) + 1);
  const [whichGames, setWhichGames] = useState("all-games");

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

  useEffect(() => {
    if (showStats.showAnyStats) {
      calculateStats(
        value,
        setstats,
        setIsError,
        setErrorMsg,
        setshowStats,
        setInstructionHighlight,
        whichGames
      );
    }
  }, [whichGames]);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateStats(
      value,
      setstats,
      setIsError,
      setErrorMsg,
      setshowStats,
      setInstructionHighlight,
      whichGames
    );
  };

  const reset = () => {
    setvalue("");
    setshowStats({
      showAnyStats: false,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
    });
    setIsError(false);
    setErrorMsg("");
    setInstructionHighlight(false);
    setWhichGames("all-games");
  };

  const handleRadioChange = (e) => {
    if (e.target.value === whichGames) {
      setWhichGames("all-games");
    } else {
      setWhichGames(e.target.value);
    }
  };

  console.log(whichGames);

  return (
    <div className={`app random-background-${wallpaper}`}>
      <div id="show-instruction-container">
        <p>Show instruction</p>
        <button
          id={"show-instruction"}
          className={instructionHighlight ? "instruction-highlight" : undefined}
          onClick={() => {
            setShowInstruction(true);
            setInstructionHighlight(false);
          }}></button>
      </div>
      {showInstruction && <Instruction setShowInstruction={setShowInstruction} />}
      <div className="content">
        <h1>OP.GG Stats Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="data">Paste your games:</label>
          <textarea value={value} onChange={handleChange} spellCheck="false" resize="false" />

          <div className="radio-container">
            <div className="victories">
              <input
                type="radio"
                name="which-games"
                id="victories"
                value="victories"
                checked={whichGames === "victories"}
                onChange={(e) => handleRadioChange(e)}
                onClick={(e) => {
                  if (e.target.value === whichGames) {
                    setWhichGames("all-games");
                  }
                }}
              />
              <label htmlFor="victories">Victories</label>
            </div>
            <div className="defeats">
              <input
                type="radio"
                name="which-games"
                id="defeats"
                value="defeats"
                checked={whichGames === "defeats"}
                onChange={(e) => handleRadioChange(e)}
                onClick={(e) => {
                  if (e.target.value === whichGames) {
                    setWhichGames("all-games");
                  }
                }}
              />
              <label htmlFor="defeats">Defeats</label>
            </div>
          </div>
          <div className="form-buttons-container">
            <button type="button" onClick={reset}>
              Reset
            </button>
            <button type="submit">Calculate</button>
          </div>
        </form>
        {showStats.showAnyStats && <SelectStats props={[showStats, setshowStats]} />}
        {showStats.showAnyStats && (
          <main>
            {showStats.showGeneral && (
              <GeneralStats
                props={{
                  victories,
                  defeats,
                  remakes,
                  games,
                  winratio,
                  creepScore,
                  CSPerMinute,
                  whichGames,
                }}
              />
            )}
            {showStats.showKDA && (
              <KDAStats
                props={{
                  kills,
                  deaths,
                  assists,
                  KDA,
                  deathlessGames,
                  deathlessGamesPercent,
                  whichGames,
                }}
              />
            )}
            {showStats.showRecords && (
              <RecordsStats props={{ mostKills, mostDeaths, mostAssists, highKDA, whichGames }} />
            )}
            {showStats.showMVP && (
              <MVPStats
                props={{ MVP, MVPPercent, ACE, ACEPercent, MVPOrACE, MVPOrACEPercent, whichGames }}
              />
            )}
            {showStats.showTime && (
              <TimeStats props={{ gameTime, shortestGame, longestGame, whichGames }} />
            )}
          </main>
        )}
        {isError && <ErrorMsg errorMsg={errorMsg} />}
      </div>
    </div>
  );
}

export default App;
