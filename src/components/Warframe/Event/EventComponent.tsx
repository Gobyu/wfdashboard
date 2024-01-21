import { useEffect, useState } from "react";

const EventComponent = ({ refresh, EventsVisible }) => {
  const [warframeEvents, setWarframeEvents] = useState([]);
  useEffect(() => {
    fetch("https://api.warframestat.us/pc/events").then((res) => {
      return res.json().then((data) => {
        let events = [];
        for (const event of data) {
          let expiryYear = new Date(event.expiry).getFullYear();
          let expiryMonth = new Date(event.expiry).getMonth() + 1;
          let expiryDate = new Date(event.expiry).getDate();
          let expiryHour = new Date(event.expiry).getHours();
          const eventsObj = {
            title: event.description,
            expiryYear: expiryYear,
            expiryMonth: expiryMonth,
            expiryDate: expiryDate,
            expiryHour: expiryHour,
          };
          events.push(eventsObj);
        }
        setWarframeEvents(events);
      });
    });
  }, [refresh && EventsVisible]);

  return (
    <>
      {EventsVisible && (
        <div className="Components" id="EventsSection">
          <h1 className="ComponentTitle">Events</h1>
          {warframeEvents.map((event) => (
            <div className="EventList">
              <h2 className="EventTitle">{event.title}</h2>
              <h3>
                Expiry: {event.expiryMonth}-{event.expiryDate}-
                {event.expiryYear} {event.expiryHour}:00
              </h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EventComponent;
