import "./TimeStats.scss";

const TimeStats = ({ props }) => {
  const { gameTime, shortestGame, longestGame } = props;
  return (
    <div className="stats-container">
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
