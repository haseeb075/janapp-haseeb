import React, {useState, useEffect} from 'react';

function About() {

// use Effect to render that function
  useEffect(() => {
     fetchItems();
 }, [])

 const [items , setItems] = useState([]);


//  function to fetch api
    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.com/v1/playlists');
        const items = await data.json()
        
        console.log(items);
        setItems(items.data.name)
         
           Object.values(items.data).map((item) => {
             console.log("item>>>>>>>>>>>>",item);
           });
         
    }
    return (
      <div>
        {/* {Object.keys(items).map(item => {console.log(item)}) } */}
      </div>
    );
}

export default About;