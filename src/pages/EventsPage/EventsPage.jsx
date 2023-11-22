import React from "react";
import { Heading } from "@chakra-ui/react";
import { useAppContext } from "../../context/DbContext";

//style
import "./EventsPage.css";

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
          <li key={event.id}> {event.title} </li>
        ))}
      </ul>
    </div>
  );
};
