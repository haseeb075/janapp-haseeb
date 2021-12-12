import React, {useState , useEffect} from 'react'

export default function WindowEffect() {
    const [windowsize, setWindowsize] = useState(window.innerWidth)
    return (
        <div>
        {windowsize}            
        </div>
    )
}
