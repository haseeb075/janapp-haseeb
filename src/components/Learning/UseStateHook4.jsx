import React, { useState } from 'react';

function UseStateHook4(props) {
//useState Hook with Arrays
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems()
    }
    return (
        <div>
            <button type='button' onClick={addItem}></button>
            <ul>
                {items.map(item => <li key={item.id}>
                    {item.value}
                    </li>)}
            </ul>
        </div>
    );
}

export default UseStateHook4;