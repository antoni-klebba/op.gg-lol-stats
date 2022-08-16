import "./StatsTitle.scss";

const StatsTitle = ({ props }) => {
  const { whichGames, statsSection } = props;
  if (whichGames === "all-games")
    return <h3 className="stats-title">{statsSection} – All games</h3>;
  if (whichGames === "victories")
    return <h3 className="stats-title">{statsSection} – Victories</h3>;
  if (whichGames === "defeats") return <h3 className="stats-title">{statsSection} – Defeats</h3>;
};

export default StatsTitle;
