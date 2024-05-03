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
          products: action.products,
          filteredProd: action.products
        }
        case "SearchProd":
          let arrs = state.products.filter((elem)=>{
            elem.title.includes(action.searchValue)
          })
          return{ ...state, filteredProd: arrs}
      case "A-Z":
        let arr = [...state.products].sort((a,b)=>{
          a.title.localeCompare(b.title)
          })
        return{...state, filteredProd: arr}
        case "low-high":
          let arrl = [...state.products].sort((a,b)=>{b.price-a.price})
          return{...state, filteredProd: arrl}
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer,{
    products:[],
    filteredProd:[]
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
          <Route index element={<Admin state={state} dispatch = {dispatch} />} />
          <Route path="post" element={<Post state={state} dispatch = {dispatch}/>} />
          <Route path="edit" element={<Edit />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
