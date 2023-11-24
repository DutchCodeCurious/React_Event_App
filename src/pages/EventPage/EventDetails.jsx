import { Heading } from "@chakra-ui/react";

export const EventDetails = (event) => {
  const detail = event.event;

  return (
    <div>
      <Heading>{detail.title}</Heading>
      <p>{detail.description}</p>
      <img src={detail.image} alt={detail.title} />
      <p>{detail.location}</p>
    </div>
  );
};
