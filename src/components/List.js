import React from 'react';
import './style.css'

import { useSelector, useDispatch } from 'react-redux'


const List = () => {

    // this function change the sizing of the value that's showed in list
    function changeTxt(val) {
        console.log(val)
        if(val <= 9999999){
            return {
                'fontSize': '40px',
                'color': 'black',
                'display': 'inline-block',
            }
        }
        else {
            return {
                'fontSize': '30px',
                'color': 'black',
                'justifyContent': 'center',
                'justifySelf': 'center',
                'alignContent': 'center'
            }
        }
    }

    const dispatch = useDispatch();

    const list = useSelector(store => store.list);

    // function to delete element stored in the state.list
    // event.stopPropagation is used to cancel the div onClick and only run the delet function
    function delet(event, dex) {
        if(event.stopPropagation) event.stopPropagation();
        console.log(dex)
        return {
            type: 'DELET',
            index: dex
        }
    }

    function replace(dex, id) {
        return {
            type: 'REPLACE',
            index: dex,
            id: id
        }
    }

    // map of the list
    return (
        <div>
                {list.map((value, index) => {
                    return (
                        <div className="list" key={index}
                        onClick={() => dispatch(replace(value, index))}>
                            <h1 style={changeTxt(value)}>{value}</h1>
                            <button onClick={(event) => dispatch(delet(event, index))} className="btn btn-danger">DELETE</button>
                        </div>
                    )
                })}
        </div>
    )
}

export default List;