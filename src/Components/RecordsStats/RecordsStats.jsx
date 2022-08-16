import "./RecordsStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const RecordsStats = ({ props }) => {
  const { mostKills, mostDeaths, mostAssists, highKDA, whichGames } = props;

  const statsSection = "Records stats";

  return (
    <div className="stats-box">
      <div className="stats-container">
        <StatsTitle props={{ whichGames, statsSection }} />
        <ul>
          <li>
            Most kills in a single game: <span>{mostKills}</span>
          </li>
          <li>
            Most deahts in a single game: <span>{mostDeaths}</span>
          </li>
          <li>
            Most assists in a single game: <span>{mostAssists}</span>
          </li>
          <li>
            Highest KDA: <span>{highKDA}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecordsStats;
