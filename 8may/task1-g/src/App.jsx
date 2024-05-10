import './App.css'
import Admin from './pages/Admin'
import EditProduct from './pages/Edit'
import Post from './pages/Post'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import { useReducer,useEffect } from 'react'
import { getAllData } from "./services/requests";
import Users from './pages/Users'
import EditUser from './pages/EditUser'
import Login from './pages/Login'
import Register from './pages/Register'
import reducer from './reducers/reducer'
import UserDetail from './pages/usersdetail'
import ProductDetail from './pages/ProductDetail'
import { useParams } from 'react-router-dom'



function App() {
  const { id } = useParams()


  const [state, dispatch] = useReducer(reducer,{
    products:[],
    filteredProd:[],
    user:[],
    categories:[]
  })

  let isLogin=false

  useEffect(() => {

    isLogin=JSON.parse(localStorage.getItem("loginUser")) || false

    getAllData("/products/").then((data)=> {
        dispatch({
          type:"SetProducts",
          products: data
        })
      })
 
    getAllData("/users/").then((users)=> {
      dispatch({
        type:"SetUser",
        user: users
      })
    })
  }, [])
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Admin state={state} dispatch = {dispatch} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register state={state} dispatch = {dispatch}/>} />
          <Route path="post" element={<Post state={state} dispatch = {dispatch}/>} />
          <Route path="/edit/:id" element={<EditProduct state={state} dispatch = {dispatch}/>}  />
          <Route path="/editusr/:id" element={<EditUser state={state} dispatch = {dispatch}/>}  />
          <Route path="user" element={<Users state={state} dispatch={dispatch} />} />
          <Route path={`/user/:id`} element={<UserDetail state={state} dispatch={dispatch}/>} />
          <Route path={`/:id`} element={<ProductDetail state={state} dispatch={dispatch}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
