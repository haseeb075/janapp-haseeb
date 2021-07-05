import React, { useState } from 'react';

function UseStateHook(props) {

const [count, setCount] = useState(0)

    return (
        <div>
            <button type='button' onClick={()=> setCount(count+1)}>add {count}</button>
        </div>
    );
}

export default UseStateHook;