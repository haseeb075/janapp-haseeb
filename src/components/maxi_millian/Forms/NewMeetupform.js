import React, {useRef} from 'react'
import { Input, Textarea, Container, Button } from '@chakra-ui/react'
// wrapper component

export default function NewMeetupform(props) {
    
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const entereredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value; 
        
        const meetupData = {
            title: entereredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        console.log(meetupData);
        props.onAddMeetup(meetupData);
    }

    
    return (
        <div>
        <Container>
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Meetup Title</label>    
            <Input placeholder='small size' size='sm' ref={titleInputRef}/>

            <label htmlFor="image">Meetup Image</label>    
            <Input placeholder='small size' size='sm' ref={imageInputRef}/>
            
            <label htmlFor="address">Address</label>    
            <Input placeholder='small size' size='sm' ref={addressInputRef}/>
            
            <label htmlFor="description">Description</label>    
            <Textarea placeholder='Here is a sample placeholder' row="5" ref={descriptionInputRef}/>

            <Button colorScheme='blue' type="button">Add Meeetup</Button>
            
        </form>    
        </Container>     
        </div>
    )
}
