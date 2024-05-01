import { useReducer } from "react";
import React from 'react'

const IncDec = () => {

    function reducer(state,action) {
        switch (action.type) {
            case "upValue":
                return{...state,count:++action.count}
            case "downValue":
                if (state.count>0) {
                    return{...state,count:--action.count}
                }else{
                    return{count:0}
                }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer,{value:0,count:0})
  return (
    <>
    <button onClick={()=>dispatch({type:"downValue",count:state.count})}>-</button>
    <span>{state.count}</span>
    <button onClick={()=>dispatch({type:"upValue",count:state.count})}>+</button>
    </>
  )
}

export default IncDec