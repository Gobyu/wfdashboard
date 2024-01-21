import Cycles from "./DayCycle/Cycles";
import EventComponent from "./Event/EventComponent";
import FissureComponent from "./Fissure/FissureComponent";
import NewsComponent from "./News/News";

const WarframeComponent = ({
  refresh,
  FissureVisible,
  NewsVisible,
  EventsVisible,
  CyclesVisible,
}) => {
  return (
    <div className="WarframeComponent">
      <div className="NewsMain">
        <NewsComponent refresh={refresh} NewsVisible={NewsVisible} />
      </div>
      <div className="EventsMain">
        <EventComponent refresh={refresh} EventsVisible={EventsVisible} />
      </div>
      <div className="FissuresMain">
        <FissureComponent refresh={refresh} FissureVisible={FissureVisible} />
      </div>
      <div className="CyclesMain">
        <Cycles refresh={refresh} CyclesVisible={CyclesVisible} />
      </div>
    </div>
  );
};

export default WarframeComponent;
