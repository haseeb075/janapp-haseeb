import React from 'react';
import NewParent from "../components/NewParent";

function Parent(props) {

    const counters =[
        {id: 1, value: 4 }, 
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
]
    return (
        <div>
{counters.map((counter)=> (<NewParent key={counter.id} value={counter.value} selected={true}/>))}
            
        </div>
    );
}

export default Parent;