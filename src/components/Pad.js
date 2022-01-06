import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalculatorButton } from './Button';

import { useSelector, useDispatch } from 'react-redux';

const Pad = () => {

    const dispatch = useDispatch();

    const number = useSelector(store => store.value);
    console.log(typeof(number),number.length);

    if(number.length >= 8) {
        return (
            <div className=" container pad">
                <CalculatorButton customClickEvent={() => dispatch({ type: 'SUM' })} name={'+'} />
                <CalculatorButton name={'7'} />
                <CalculatorButton name={'8'} />
                <CalculatorButton name={'9'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'REST' })} name={'-'} />
                <CalculatorButton name={'4'} />
                <CalculatorButton name={'5'} />
                <CalculatorButton name={'6'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'MULT' })} name={'x'} />
                <CalculatorButton name={'1'} />
                <CalculatorButton name={'2'} />
                <CalculatorButton name={'3'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'DIV' })} name={'/'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'DOT' })} name={'.'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'zero' })} name={'0'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'AC' })} name={'AC'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'DEL' })} name={'DEL'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'EQUAL' })} name={'='} />
            </div>
        )
    } else {
        return (
            <div className=" container pad">
                <CalculatorButton customClickEvent={() => dispatch({ type: 'SUM' })} name={'+'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'seven' })} name={'7'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'eight' })} name={'8'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'nine' })} name={'9'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'REST' })} name={'-'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'four' })} name={'4'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'five' })} name={'5'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'six' })} name={'6'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'MULT' })} name={'x'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'one' })} name={'1'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'two' })} name={'2'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'three' })} name={'3'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'DIV' })} name={'/'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'DOT' })} name={'.'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'zero' })} name={'0'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'AC' })} name={'AC'} />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'DEL' })} name={'DEL'} />
                <CalculatorButton />
                <CalculatorButton />
                <CalculatorButton customClickEvent={() => dispatch({ type: 'EQUAL' })} name={'='} />
            </div>
        )
    }
}

export default Pad;