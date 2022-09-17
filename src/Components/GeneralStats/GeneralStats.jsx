import "./GeneralStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const GeneralStats = ({ props }) => {
  const { victories, defeats, remakes, games, winratio, creepScore, CSPerMinute, whichGames } =
    props;
  const statsSection = "General stats";
  return (
    <div className="stats-box">
      <div className="stats-container">
        <StatsTitle props={{ whichGames, statsSection }} />
        <ul>
          <li>
            Total games: <span>{games}</span>
          </li>
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
    </div>
  );
};

export default GeneralStats;
