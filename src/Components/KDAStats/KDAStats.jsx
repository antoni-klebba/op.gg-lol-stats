import "./KDAStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const KDAStats = ({ props }) => {
  const {
    kills,
    deaths,
    assists,
    KDA,
    avgStats,
    deathlessGames,
    deathlessGamesPercent,
    whichGames,
  } = props;

  const statsSection = "KDA stats";

  return (
    <div className="stats-box">
      <div className="stats-container">
        <StatsTitle props={{ whichGames, statsSection }} />
        <ul>
          <li>
            Total KDA: <span>{KDA}</span>
          </li>
          <li>
            Average stats: <span>{avgStats}</span>
          </li>
          <li>
            Total kills: <span>{kills}</span>
          </li>
          <li>
            Total deaths: <span>{deaths}</span>
          </li>
          <li>
            Total assists: <span>{assists}</span>
          </li>
          <li>
            Number of deathless games: <span>{deathlessGames}</span>
          </li>
          <li>
            Percent of deathless games: <span>{deathlessGamesPercent} %</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KDAStats;
