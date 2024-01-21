import "./App.css";
import SidePanel from "./components/SidePanel/SidePanel";
import WarframeComponent from "./components/Warframe/WarframeComponent";
import { useState } from "react";

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const refreshCheck = () => {
    setRefresh(!refresh);
  };
  const [FissureVisible, setFissureVisible] = useState(false);
  const FissureVisibleCheck = () => {
    setFissureVisible(!FissureVisible);
  };
  const [NewsVisible, setNewsVisible] = useState(false);
  const NewsVisibleCheck = () => {
    setNewsVisible(!NewsVisible);
  };
  const [EventsVisible, setEventsVisible] = useState(false);
  const EventsVisibleCheck = () => {
    setEventsVisible(!EventsVisible);
  };
  const [CyclesVisible, setCyclesVisible] = useState(false);
  const CyclesVisibleCheck = () => {
    setCyclesVisible(!CyclesVisible);
  };

  return (
    <div className="App">
      <SidePanel
        refreshCheck={refreshCheck}
        FissureVisibleCheck={FissureVisibleCheck}
        NewsVisibleCheck={NewsVisibleCheck}
        EventsVisibleCheck={EventsVisibleCheck}
        CyclesVisibleCheck={CyclesVisibleCheck}
      />
      <WarframeComponent
        refresh={refresh}
        FissureVisible={FissureVisible}
        NewsVisible={NewsVisible}
        EventsVisible={EventsVisible}
        CyclesVisible={CyclesVisible}
      />
    </div>
  );
};

export default App;
