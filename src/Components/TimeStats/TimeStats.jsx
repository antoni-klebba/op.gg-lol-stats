import "./TimeStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const TimeStats = ({ props }) => {
  const { gameTime, shortestGame, longestGame, whichGames } = props;
  return (
    <div className="stats-container">
      <StatsTitle whichGames={whichGames} />
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
  );
};

export default TimeStats;
