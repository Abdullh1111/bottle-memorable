import React from 'react';
import './sunglass.css'
import Watch from '../watch/watch';
// import add from '../../utils/math';
import {add, multiply} from '../../utils/math'
const Sunglass = () => {
    const sum = add(3,4)
    const mult = multiply(3,4)
    console.log(sum, mult)
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;