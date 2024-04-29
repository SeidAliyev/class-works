import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";



const Main = () => {

    const [data, setdata] = useState([])
    const [category, setCategory] = useState([])


    // useEffect(()=>{
    //     axios("https://northwind.vercel.app/api/categories").then(res=>{
    //         console.log(res.data);
    //         setdata(res.data)
    //     })
    // },[]);

    const getAll = async () => {
        let response = await axios.get("https://northwind.vercel.app/api/categories")
        setdata(response.data)
    }

    const addCategories = async (e) => {
       await e.preventDefault();

        let newCat = {
            name: category,
        };

        let res = await axios.post("https://northwind.vercel.app/api/categories/",newCat)

        setCategory([...category,res.data])
    }

    useEffect(() => {
      getAll()
    }, [])
    
    
  return (
    <div className="container">
    <div className="addTask">
      <form onSubmit={(e) =>addCategories(e)}>
        <input id="input" type="text" placeholder="Add your task" value={category} onChange={(e)=> setCategory(e.target.value)}/>
        <button id="add" className="btn" type='submit'>Add Task</button>
      </form>
    </div>
    <div className="taskList">
      <ul>
      {data.map((elem)=>{
        return(
            <li key={uuidv4()}>
          <span>{elem.name}</span>
          <button id="delete" className="btn" onClick={()=>{
        let mydata = data.filter(item=>item.id != elem.id)

        setdata(mydata)
        axios.delete(`https://northwind.vercel.app/api/categories/${elem.id}`)
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
        axios.patch(`https://northwind.vercel.app/api/categories/${elem.id}`,{name:newVersion})
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