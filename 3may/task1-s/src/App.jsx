import { useState,useReducer } from 'react'
import './App.css'

function App() {

  function reducer(state,action){
    switch (action.type) {
      case "AddTitle":
        return{...state,title:action.title}

      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, {title:""})


  return (
    <>
    <input onChange={(e)=>dispatch({type:"AddTitle",title:e.target.value})}/>
    <input onChange={(e)=>dispatch({type:"AddTitle",title:e.target.value})}/>
    <input onChange={(e)=>dispatch({type:"AddTitle",title:e.target.value})}/>
    {state.title.map((elem)=>console.log(elem.title))}
    {console.log(state.title)}

    </>
  )
}

export default App
