import React from "react";
import { Button, ButtonGroup, Box, Container } from "@chakra-ui/react";

export default function Todos(props) {

function handleDelete(){
  console.log("Clicked !!!");
}

  return (
    <div>
      <Container>
      {/* <h1>My todos</h1> */}
        <Box bg="tomato" w="100%" p={4} m={4} color="white">
          <h2>{props.text}</h2>
          <div className="actions">
            <Button colorScheme="blue" onClick={handleDelete}>Delete</Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}
