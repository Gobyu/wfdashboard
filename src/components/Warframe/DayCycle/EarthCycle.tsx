import { useEffect, useState } from "react";

const EarthComponent = ({ refresh, CyclesVisible }) => {
  const [EarthCycle, setEarthCycle] = useState([]);

  function isDay(isDay: boolean) {
    if (isDay) {
      return "src/assets/day.png";
    }
    return "src/assets/night.png";
  }

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/earthCycle").then((res) => {
      return res.json().then((data) => {
        setEarthCycle(data);
      });
    });
  }, [refresh]);

  return (
    <>
      {CyclesVisible && (
        <div className="SubComponents" id="EarthSection">
          <h2 className="SubComponentTitle">Earth</h2>
          <div className="EarthCycle">
            <h3>Time: {EarthCycle.state}</h3>
            <h3>{EarthCycle.timeLeft}</h3>
            <img src={isDay(EarthCycle.isDay)} height={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default EarthComponent;
