import React, { useRef } from 'react'
import { useReducer } from "react";

const Main = () => {

    function reducer(state,action) {
        switch (action.type) {
            case 'setValue':
                return{...state, count: state.count -action.newValue}
                case 'getValue':
                return{...state, count: state.count +action.newValue}
            default:
                break;
        }
    }

    const [state,dispatch] = useReducer(reducer,{count:0,newValue:""})


    const decInput = useRef()

  return (
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>{
        console.log(decInput.current.value*1);
        dispatch({
            type:"setValue",
            newValue:decInput.current.value*1
        })
    }}>-</button>
    <input type="text" ref={decInput}/>
    <button onClick={()=>{
        console.log(decInput.current.value*1);
        dispatch({
            type:"getValue",
            newValue:decInput.current.value*1
        })
    }}>+</button>
    </>
  )
}

export default Main