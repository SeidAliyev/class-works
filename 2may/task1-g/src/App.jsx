import './App.css'
import Admin from './pages/Admin'
import Edit from './pages/Edit'
import Post from './pages/Post'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import { useReducer,useEffect } from 'react'
import { BASE_URL } from './services/api'
import { getAllData,deleteById } from "./services/requests";

function App() {

  function reducer(state,action) {
    switch (action.type) {
      case "SetProducts":
        return{
          ...state,
          products: action.products
        }
    
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer,{
    products:[]
  })

  useEffect(() => {

    getAllData().then((data)=> {
        dispatch({
          type:"SetProducts",
          products: data
        })
      })
  }, [])
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Admin state={state} dispatch = {dispatch}/>} />
          <Route path="post" element={<Post state={state} dispatch = {dispatch} />} />
          <Route path="edit" element={<Edit />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
