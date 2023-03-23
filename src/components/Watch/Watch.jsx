import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    // console.log();
    return (
        <div style={{border: '2px solid yellow', margin:'10px'}}>
            <h1>This is client smart watch</h1>
            <p>Steps: {steps}</p>
            <button onClick={(()=> {const count= steps+1; setSteps(count)})}>Run</button>
            <button onClick={(()=> {const count= steps-1; setSteps(count)})}>Lose</button>
            <Dial steps = {steps}></Dial>
        </div>
    );
};

export default Watch;