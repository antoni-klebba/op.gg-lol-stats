import "./MVPStats.scss";
import StatsTitle from "../StatsTitle/StatsTitle";

const MVPStats = ({ props }) => {
  const { MVP, MVPPercent, ACE, ACEPercent, MVPOrACE, MVPOrACEPercent, whichGames } = props;

  const statsSection = "MVP stats";

  return (
    <div className="stats-box">
      <div className="stats-container">
        <StatsTitle props={{ whichGames, statsSection }} />
        <ul>
          {!(whichGames === "defeats") && (
            <li>
              Number of games with MVP:{" "}
              <span>
                {MVP}
                <sup> 1&#41;</sup>
              </span>
            </li>
          )}
          {!(whichGames === "defeats") && (
            <li>
              Percent of games with MVP: <span>{MVPPercent} %</span>
            </li>
          )}
          {!(whichGames === "victories") && (
            <li>
              Number of games with ACE:{" "}
              <span>
                {ACE}
                <sup> 2&#41;</sup>
              </span>
            </li>
          )}
          {!(whichGames === "victories") && (
            <li>
              Percent of games with ACE: <span>{ACEPercent} %</span>
            </li>
          )}
          {whichGames === "all-games" && (
            <li>
              Number of games with MVP or ACE: <span>{MVPOrACE}</span>
            </li>
          )}
          {whichGames === "all-games" && (
            <li>
              Percent of games with MVP or ACE: <span>{MVPOrACEPercent} %</span>
            </li>
          )}
        </ul>

        <p className="mvp-adno">
          <sup>1&#41;</sup> MVP – Most Valuable Player in winning team
        </p>
        <p className="mvp-adno">
          <sup>2&#41;</sup> ACE – Most Valuable Player in losing team
        </p>
      </div>
    </div>
  );
};

export default MVPStats;
