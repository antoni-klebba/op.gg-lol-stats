import "./SelectStats.scss";

const SelectStats = ({ props }) => {
  const [showStats, setshowStats] = props;

  const handleStatsChange = (statToChange) => {
    setshowStats({
      showAnyStats: true,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
      [statToChange]: true,
    });
  };
  return (
    <div className="select-stats">
      <button
        className={showStats.showGeneral ? "active-stats" : undefined}
        onClick={() => handleStatsChange("showGeneral")}>
        General stats
      </button>
      <button
        className={showStats.showKDA ? "active-stats" : undefined}
        onClick={() => handleStatsChange("showKDA")}>
        KDA stats
      </button>
      <button
        className={showStats.showRecords ? "active-stats" : undefined}
        onClick={() => handleStatsChange("showRecords")}>
        Records stats
      </button>
      <button
        className={showStats.showMVP ? "active-stats" : undefined}
        onClick={() => handleStatsChange("showMVP")}>
        MVP stats
      </button>
      <button
        className={showStats.showTime ? "active-stats" : undefined}
        onClick={() => handleStatsChange("showTime")}>
        Time stats
      </button>
    </div>
  );
};

export default SelectStats;
