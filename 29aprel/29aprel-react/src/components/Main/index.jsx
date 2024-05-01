import React from 'react'
import { useEffect,useReducer,useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";



const Main = () => {

  function reducer(state,action) {
    switch (action.value) {
      case "setData":
         return { ...state, data: action.data };
      case "setBasket":
         return { ...state, basket: action.basket };
      case "inputValue":
        return { ...state, value: action.value }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer,{data:[],category:[],newValue:[]})

    // const [data, setdata] = useState([])
    // const [category, setCategory] = useState([])

    
    useEffect(() => {
    }, [])
    
    const myInput = useRef();
    
  return (
    <div className="container">
    <div className="addTask">
      <form >
        <input id="input" type="text" placeholder="Add your task" ref={myInput}/>
        <button id="add" className="btn" type='submit' onClick={()=>{
        dispatch({
          type:"inputValue",
          newValue:myInput
        })
        }}>Add Task </button>
      </form>
    </div>
    <div className="taskList">
      <ul>
      {state.data.map((elem)=>{
        return(
            <li key={uuidv4()}>
          <span>{elem.name}</span>
          <button id="delete" className="btn" onClick={()=>{
        let mydata = data.filter(item=>item.id != elem.id)

        setdata(mydata)
    }}>Delete Task</button>
    <button className="btn" onClick={()=>{
        let newVersion = prompt('new Name',elem.name)
        let newName = data.map((item)=>{
            if(item.id == elem.id){
                item.name=newVersion
            }
            return item
        })
        setdata(newName)
    }}>Edit</button>
        </li> 
        )}
      )}
        
      </ul>
    </div>
  </div>
  )
}

export default Main