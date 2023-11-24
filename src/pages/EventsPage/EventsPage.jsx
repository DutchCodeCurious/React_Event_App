import React from "react";
import { Heading } from "@chakra-ui/react";
import { useAppContext } from "../../context/DbContext";

//style
import "./EventsPage.css";
import { Link } from "react-router-dom";

export const EventsPage = () => {
  const { events, loading } = useAppContext();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Heading>List of events</Heading>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {" "}
            <Link
              className="event_link"
              to={`/event/` + event.id.toString()}
              key={event.id}
            >
              {" "}
              {event.title}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
