import { Button } from "@chakra-ui/react";

export const AlterButton = ({ clickFN }) => {
  return (
    <>
      <Button onClick={clickFN}>Alter Details</Button>
    </>
  );
};
