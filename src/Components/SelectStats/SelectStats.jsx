import "./SelectStats.scss";

const SelectStats = ({ props }) => {
  const [showStats, setshowStats] = props;

  const handleStatsChange = (statToChange) => {
    setshowStats({
      ...showStats,
      showGeneral: false,
      showKDA: false,
      showRecords: false,
      showMVP: false,
      showTime: false,
      [statToChange]: true,
    });
  };
  return (
    <div>
      <button onClick={() => handleStatsChange("showGeneral")}>General stats</button>
      <button onClick={() => handleStatsChange("showKDA")}>KDA stats</button>
      <button onClick={() => handleStatsChange("showRecords")}>Records stats</button>
      <button onClick={() => handleStatsChange("showMVP")}>MVP stats</button>
      <button onClick={() => handleStatsChange("showTime")}>Time stats</button>
    </div>
  );
};

export default SelectStats;
