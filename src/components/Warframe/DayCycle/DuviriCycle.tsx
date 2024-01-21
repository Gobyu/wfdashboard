import { useEffect, useState } from "react";

const DuviriComponent = ({ refresh, CyclesVisible }) => {
  const [DuviriCycle, setDuviriCycle] = useState([]);
  useEffect(() => {
    fetch("https://api.warframestat.us/pc/duviriCycle").then((res) => {
      return res.json().then((data) => {
        setDuviriCycle(data);
      });
    });
  }, [refresh]);

  return (
    <>
      {CyclesVisible && (
        <div className="SubComponents" id="DuviriSection">
          <h2 className="SubComponentTitle">Duviri</h2>
          <div className="DuviriCycle">
            <h3>Spiral: {DuviriCycle.state}</h3>
            <h3>{DuviriCycle.timeLeft}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default DuviriComponent;
