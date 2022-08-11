import "./KDAStats.scss";

const KDAStats = ({ props }) => {
  const { kills, deaths, assists, KDA, deathlessGames, deathlessGamesPercent } = props;
  return (
    <div className="stats-container">
      <ul>
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
          Average KDA: <span>{KDA}</span>
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
