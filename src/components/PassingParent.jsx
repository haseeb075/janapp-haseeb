import React from 'react';
import PassingChild from '../components/PassingChild'

function PassingParent(props) {
    return (
        <div>
            <h1>Passing Parent</h1>
            <PassingChild title='Passing Parent' />
        </div>
    );
}

export default PassingParent;