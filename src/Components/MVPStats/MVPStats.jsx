import "./MVPStats.scss";

const MVPStats = ({ props }) => {
  const { MVP, MVPPercent, ACE, ACEPercent, MVPOrACE, MVPOrACEPercent } = props;
  return (
    <div className="mvp-stats">
      <h2>MVP stats:</h2>
      <ul>
        <li>
          Number of games with MVP:{" "}
          <span>
            {MVP}
            <sup> 1&#41;</sup>
          </span>
        </li>
        <li>
          Percent of games with MVP: <span>{MVPPercent} %</span>
        </li>
        <li>
          Number of games with ACE:{" "}
          <span>
            {ACE}
            <sup> 2&#41;</sup>
          </span>
        </li>
        <li>
          Percent of games with ACE: <span>{ACEPercent} %</span>
        </li>
        <li>
          Number of games with MVP or ACE: <span>{MVPOrACE}</span>
        </li>
        <li>
          Percent of games with MVP or ACE: <span>{MVPOrACEPercent} %</span>
        </li>
      </ul>

      <p>
        <sup>1&#41;</sup> MVP – Most Valuable Player in winning team
      </p>
      <p>
        <sup>2&#41;</sup> ACE – Most Valuable Player in losing team
      </p>
    </div>
  );
};

export default MVPStats;
