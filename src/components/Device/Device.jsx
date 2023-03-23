import React from 'react';
import ClientDetails from '../client-Details/ClientDetails';

const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Welcome to here: {props.name}</h1>
            {/* <h1></h1> */}
            <ClientDetails Client= {props.count}></ClientDetails>
        </div>
    );
};

export default Device;