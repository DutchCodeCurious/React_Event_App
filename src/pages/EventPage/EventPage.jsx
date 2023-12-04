import { useState } from "react";
// import { Heading } from "@chakra-ui/react";
import { useAppContext } from "../../context/DbContext";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { AlterButton } from "../../components/AlterButton/AlterButton";
import { Outlet, useNavigate } from "react-router-dom";

//style
import "./EventPage.css";
import { useParams } from "react-router-dom";
import { EventDetails } from "./EventDetails";
import { HStack } from "@chakra-ui/react";
import { AlterForm } from "./AlterForm/AlterForm";

export const EventPage = () => {
  const { events, loading } = useAppContext();
  const { id } = useParams();
  const [alter, setAlter] = useState(true);
  const navigate = useNavigate();

  const event = events.find((event) => event.id == id);
  console.log(event);

  if (loading) {
    return <div>Loading...</div>;
  }

  const DeleteEvent = () => {
    console.log("delete : " + event.id);
  };

  const AlterEvent = () => {
    console.log("alter : " + event.id);
    navigate(`alter`);
    setAlter(false);
  };

  console.log(event.id);
  return (
    <div>
      <h1>EventPage</h1>
      {alter && (
        <>
          <EventDetails event={event} />
          <DeleteButton clickFN={DeleteEvent} />
          <AlterButton clickFN={() => AlterEvent()} />
        </>
      )}{" "}
      {!alter && <AlterForm id={event.id} />}
    </div>
  );
};
