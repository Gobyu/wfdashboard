import { useState, useEffect } from "react";

const FissureComponent = ({ refresh, FissureVisible }) => {
  const [warframeFissures, setWarframeFissures] = useState([]);

  function StarChartCheck(isStorm: boolean, isHard: boolean) {
    if (isStorm) {
      return "Railjack";
    } else if (isHard) {
      return "Steel Path";
    }
    return "Star Chart";
  }

  useEffect(() => {
    fetch("https://api.warframestat.us/pc/fissures").then((res) => {
      return res.json().then((data) => {
        let fissures = [];
        for (const fissure of data) {
          const fissureObj = {
            node: fissure.node,
            timeLeft: fissure.eta,
            enemy: fissure.enemy,
            missionType: fissure.missionType,
            tier: fissure.tier,
            SP: fissure.isHard,
            RJ: fissure.isStorm,
          };
          fissures.push(fissureObj);
        }
        setWarframeFissures(fissures);
      });
    });
  }, [refresh && FissureVisible]);

  return (
    <>
      {FissureVisible && (
        <div className="Components" id="FissuresSection">
          {<h1 className="ComponentTitle">Fissures</h1>}
          {warframeFissures.map((fissure) => (
            <div className="FissureList">
              <h2 className={StarChartCheck(fissure.RJ, fissure.SP)}>
                [{StarChartCheck(fissure.RJ, fissure.SP)}]
              </h2>
              <h2 className="FissureNode">
                {fissure.node} ({fissure.tier} {fissure.missionType})
              </h2>
              <h3>Expiry: {fissure.timeLeft}</h3>
              <h3>Faction: {fissure.enemy}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FissureComponent;
