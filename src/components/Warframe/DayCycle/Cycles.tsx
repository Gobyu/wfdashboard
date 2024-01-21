import CambionComponent from "./CambionCycle";
import CetusComponent from "./CetusCycle";
import DuviriComponent from "./DuviriCycle";
import EarthComponent from "./EarthCycle";
import VallisComponent from "./VallisCycle.tsx";
import ZarimanComponent from "./ZarimanCycle";

const Cycles = ({ refresh, CyclesVisible }) => {
  return (
    <div className="Components">
      {CyclesVisible && <h1 className="ComponentTitle">Cycles</h1>}
      <div id="CyclesSection">
        <CambionComponent refresh={refresh} CyclesVisible={CyclesVisible} />
        <CetusComponent refresh={refresh} CyclesVisible={CyclesVisible} />
        <DuviriComponent refresh={refresh} CyclesVisible={CyclesVisible} />
        <EarthComponent refresh={refresh} CyclesVisible={CyclesVisible} />
        <VallisComponent refresh={refresh} CyclesVisible={CyclesVisible} />
        <ZarimanComponent refresh={refresh} CyclesVisible={CyclesVisible} />
      </div>
    </div>
  );
};

export default Cycles;
