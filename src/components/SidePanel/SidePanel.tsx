const SidePanel = ({
  refreshCheck,
  FissureVisibleCheck,
  NewsVisibleCheck,
  EventsVisibleCheck,
  CyclesVisibleCheck,
}) => {
  return (
    <div className="SidePanel">
      <h2 className="SidePanelContent">
        <a href="#NewsSection">News</a>
        <br />
        <a href="#EventsSection">Events</a>
        <br />
        <a href="#FissuresSection">Fissures</a>
        <br />
        <a href="#CyclesSection">Cycles</a>
        <p />
        <a href="#">↑Back to Top↑</a>
        <p />
        <button className="RefreshButton" onClick={refreshCheck}>
          <img src="/src/assets/refresh-button.png" height={50} />
        </button>
        <p />
        <p> Fissures </p>
        <label className="switch">
          <input
            type="checkbox"
            id="FissureVisible"
            value="FissureVisible"
            onClick={FissureVisibleCheck}
          />
          <span className="slider round"></span>
        </label>
        <p> News </p>
        <label className="switch">
          <input
            type="checkbox"
            id="NewsVisible"
            value="NewsVisible"
            onClick={NewsVisibleCheck}
          />
          <span className="slider round"></span>
        </label>
        <p> Events </p>
        <label className="switch">
          <input
            type="checkbox"
            id="EventsVisible"
            value="EventsVisible"
            onClick={EventsVisibleCheck}
          />
          <span className="slider round"></span>
        </label>
        <p> Cycles </p>
        <label className="switch">
          <input
            type="checkbox"
            id="CyclesVisible"
            value="CyclesVisible"
            onClick={CyclesVisibleCheck}
          />
          <span className="slider round"></span>
        </label>
      </h2>
    </div>
  );
};

export default SidePanel;
