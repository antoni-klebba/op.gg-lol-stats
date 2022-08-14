import "./GeneralStats.scss";

const GeneralStats = ({ props }) => {
  const { victories, defeats, remakes, games, winratio, creepScore, CSPerMinute, whichGames } =
    props;
  return (
    <div className="stats-container">
      <ul>
        <li>
          Victories: <span>{victories}</span>
        </li>
        <li>
          Defeats: <span>{defeats}</span>
        </li>
        {whichGames === "all-games" && (
          <li>
            Remakes: <span>{remakes}</span>
          </li>
        )}
        <li>
          Total games: <span>{games}</span>
        </li>
        {whichGames === "all-games" && (
          <li>
            Win rate: <span>{winratio} %</span>
          </li>
        )}
        <li>
          Average CS per game: <span>{creepScore}</span>
        </li>
        <li>
          Average CS per minute: <span>{CSPerMinute}</span>
        </li>
      </ul>
    </div>
  );
};

export default GeneralStats;
