import { useEffect, useState } from "react";

const CambionComponent = ({ refresh, CyclesVisible }) => {
  const [CambionCycle, setCambionCycle] = useState([]);

  function state(state: string) {
    if (state === "fass") {
      return "src/assets/fass.webp";
    }
    return "src/assets/vome.webp";
  }

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/cambionCycle").then((res) => {
      return res.json().then((data) => {
        setCambionCycle(data);
      });
    });
  }, [refresh]);

  return (
    <>
      {CyclesVisible && (
        <div className="SubComponents" id="CambionSection">
          <h2 className="SubComponentTitle">Cambion Drift</h2>
          <div className="CambionCycle">
            <h3>Cycle: {CambionCycle.state}</h3>
            <h3>{CambionCycle.timeLeft}</h3>
            <img src={state(CambionCycle.state)} height={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default CambionComponent;
