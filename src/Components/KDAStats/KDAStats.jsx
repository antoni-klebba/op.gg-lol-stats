import "./KDAStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const KDAStats = ({ props }) => {
  const { kills, deaths, assists, KDA, deathlessGames, deathlessGamesPercent, whichGames } = props;
  return (
    <div className="stats-container">
      <StatsTitle whichGames={whichGames} />
      <ul>
        <li>
          Total KDA: <span>{KDA}</span>
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
  );
};

export default KDAStats;
