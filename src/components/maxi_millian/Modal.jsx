import React from 'react'

export default function Modal() {
    return (
        <div className="modal">
            <h4>Are you sure ?</h4>
            <button className="btn btn--alt">Cancel</button>
            <button className="btn">Confirm</button>
        </div>
    )
}
