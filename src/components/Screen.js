import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';

const Screen = () => {
    const ONE = 'ONE';

    const dispatch = useDispatch();

    const num = useSelector(store => store.value);

    const result = useSelector(store => store.lastValue);


    // function to increment the value showed in screen
    function increment() {
        return {
            type: 'increment'
        }
    }

    // function to decrement the value showed in screen
    function decrement() {
        return {
            type: 'decrement'
        }
    }

    return (
        <div className="container">
            <div className="screen">
                <h1 className="number">{num}</h1>
                <h6 className="number2">{result}</h6>
            </div>
            <button onClick={() => dispatch(increment())} className="btn btn-primary"
                style={{ 'margin-top': '5px' }}>INCREMENTAR</button>
            <button onClick={() => dispatch(decrement())} className="btn btn-danger"
                style={{ 'margin-top': '5px' }}>RESTAR</button>
        </div>
    )
}

export default Screen;