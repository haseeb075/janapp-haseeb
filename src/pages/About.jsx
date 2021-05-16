import React from 'react';

function About() {

 React.useEffect(() => {
     fetchItems();
 }, [])

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.com/v1/playlists');
        const items = await data.json()
        
        console.log(items);
    }
    return (
        <div className="">
            this is about page
        </div>
    );
}

export default About;