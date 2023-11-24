import { Button } from "@chakra-ui/react";

export const DeleteButton = ({ clickFN }) => {
  return (
    <>
      <Button onClick={clickFN}>Delete</Button>
    </>
  );
};
