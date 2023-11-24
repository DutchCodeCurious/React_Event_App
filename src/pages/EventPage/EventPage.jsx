import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { useAppContext } from "../../context/DbContext";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";

//style
import "./EventPage.css";
import { useParams } from "react-router-dom";
import { EventDetails } from "./EventDetails";

export const EventPage = ({ params }) => {
  const { events, loading } = useAppContext();
  const { id } = useParams();

  const event = events.find((event) => event.id == id);
  console.log(event);

  if (loading) {
    return <div>Loading...</div>;
  }

  const DeleteEvent = () => {
    console.log("delete : " + event.id);
  };
  return (
    <div>
      <h1>EventPage</h1>
      <EventDetails event={event} />
      <DeleteButton clickFN={DeleteEvent} />
    </div>
  );
};
