import React from "react";
import Event from "./Event";
import { EventsConsumer } from "../context/EventContext";

const ListEvents = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventsConsumer>
        {value => {
          return value.events.map(event => <Event event={event} />);
        }}
      </EventsConsumer>
    </div>
  );
};

export default ListEvents;
