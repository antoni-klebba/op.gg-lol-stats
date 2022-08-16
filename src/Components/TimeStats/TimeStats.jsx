import "./TimeStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const TimeStats = ({ props }) => {
  const { gameTime, shortestGame, longestGame, whichGames } = props;

  const statsSection = "Time stats";

  return (
    <div className="stats-box">
      <div className="stats-container">
        <StatsTitle props={{ whichGames, statsSection }} />
        <ul>
          <li>
            Average game time: <span>{gameTime}</span>
          </li>
          <li>
            Shortest game: <span>{shortestGame}</span>
          </li>
          <li>
            Longest game: <span>{longestGame}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimeStats;
