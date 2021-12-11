import React, {useState} from "react";
import { Button, ButtonGroup, Box, Container } from "@chakra-ui/react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function Todos(props) {

 const [modalisOpen, setModalisOpen] = useState(false);


function handleDelete(){
  // console.log("Clicked !!!");
  setModalisOpen(true)
}

function CloseModalHandler(){
  setModalisOpen(false)
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
        {/* 1 way */}
        {/* {modalisOpen ? <Modal/> : null  } */}
        
        {/* 2 way */}
        {modalisOpen && <Modal onCancel={CloseModalHandler} onConfirm={CloseModalHandler} />}
        {modalisOpen && <Backdrop onCancel={CloseModalHandler}/>}
        {/* <Modal /> */} 
      {/* <Backdrop /> */}
      </Container>
    </div>
  );
}
