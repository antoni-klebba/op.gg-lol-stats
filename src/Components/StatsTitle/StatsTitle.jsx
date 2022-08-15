import "./StatsTitle.scss";

const StatsTitle = ({ whichGames }) => {
  if (whichGames === "all-games") return <h3 className="stats-title">All games stats</h3>;
  if (whichGames === "victories") return <h3 className="stats-title">Victories stats</h3>;
  if (whichGames === "defeats") return <h3 className="stats-title">Defeats stats</h3>;
};

export default StatsTitle;
