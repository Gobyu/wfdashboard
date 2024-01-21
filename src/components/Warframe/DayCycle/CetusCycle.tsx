import { useEffect, useState } from "react";

const CetusComponent = ({ refresh, CyclesVisible }) => {
  const [CetusCycle, setCetusCycle] = useState([]);

  function isDay(isDay: boolean) {
    if (isDay) {
      return "src/assets/day.png";
    }
    return "src/assets/night.png";
  }

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/cetusCycle").then((res) => {
      return res.json().then((data) => {
        setCetusCycle(data);
      });
    });
  }, [refresh]);

  return (
    <>
      {CyclesVisible && (
        <div className="SubComponents" id="CetusSection">
          <h2 className="SubComponentTitle">Cetus</h2>
          <div className="CetusCycle">
            <h3>Time: {CetusCycle.state}</h3>
            <h3>{CetusCycle.timeLeft}</h3>
            <img src={isDay(CetusCycle.isDay)} height={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default CetusComponent;
