import { useEffect, useState } from "react";

const VallisComponent = ({ refresh, CyclesVisible }) => {
  const [VallisCycle, setVallisCycle] = useState([]);

  function isWarm(isWarm: boolean) {
    if (isWarm) {
      return "src/assets/warm.png";
    }
    return "src/assets/cold.png";
  }

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/vallisCycle").then((res) => {
      return res.json().then((data) => {
        setVallisCycle(data);
      });
    });
  }, [refresh]);

  return (
    <>
      {CyclesVisible && (
        <div className="SubComponents" id="VallisSection">
          <h2 className="SubComponentTitle">Orb Vallis</h2>
          <div className="VallisCycle">
            <h3>Temp: {VallisCycle.state}</h3>
            <h3>{VallisCycle.timeLeft}</h3>
            <img src={isWarm(VallisCycle.isWarm)} height={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default VallisComponent;
