import { useEffect, useState } from "react";

const ZarimanComponent = ({ refresh, CyclesVisible }) => {
  const [ZarimanCycle, setZarimanCycle] = useState([]);

  function state(state: string) {
    if (state === "grineer") {
      return "src/assets/grineer.svg";
    }
    return "src/assets/corpus.svg";
  }

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/zarimanCycle").then((res) => {
      return res.json().then((data) => {
        setZarimanCycle(data);
      });
    });
  }, [refresh]);

  return (
    <>
      {CyclesVisible && (
        <div className="SubComponents" id="ZarimanSection">
          <h2 className="SubComponentTitle">Zariman</h2>
          <div className="ZarimanCycle">
            <h3>Faction: {ZarimanCycle.state}</h3>
            <h3>{ZarimanCycle.timeLeft}</h3>
            <img src={state(ZarimanCycle.state)} height={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default ZarimanComponent;
