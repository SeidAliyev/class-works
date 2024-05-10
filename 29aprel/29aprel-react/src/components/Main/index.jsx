import React, { useState } from 'react'
import { useEffect,useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from 'react-redux'
import { adding, deleting } from '../../APPRedux/Features/counter'



const Main = () => {

  const [mydata, setmydata] = useState("")

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  console.log(count);


    
  return (
    <div className="container">
    <div className="addTask">
      <form onSubmit={(e)=>e.preventDefault()}>
        <input id="input" type="text" placeholder="Add your task"  onChange={(e)=>setmydata(e.target.value)}/>
        <button id="add" className="btn" type='submit' onClick={()=>dispatch(adding(mydata))}>Add Task </button>
      </form>
    </div>
    <div className="taskList">
      <ul>
      {count.map((elem)=>{
        console.log(elem);
        return(
            <li key={uuidv4()}>
          <span>{elem}</span>
          <button id="delete" className="btn" onClick={()=>dispatch(deleting(mydata))}>Delete Task</button>
          <button className="btn">Edit</button>
        </li> 
        )
        }
      )}
        
      </ul>
    </div>
  </div>
  )
}

export default Main