import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid purple', margin: '20px'}}>
            <h3>Your steps count</h3>
            <p>Your steps count: {props.steps}</p>
        </div>
    );
};

export default Dial;