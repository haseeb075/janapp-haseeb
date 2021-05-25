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
    }
    return (
        <div className="">

            {
                items.map((item) => (
                    <div key={item.itemid}>

                        <h1>{item.data.name}</h1>
                    </div>
                ))
            }

        </div>
    );
}

export default About;