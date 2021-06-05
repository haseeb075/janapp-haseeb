import React from 'react';
import BookTable from '../pages/BookTable'

function Tables(props) {
    return (
        <div>
            <BookTable type='tbltype' reservedfor='tblreserver'  />
        </div>
    );
}

export default Tables;