import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { deleteById } from "../../services/requests";
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';



const Users = ({ state, dispatch }) => {
  
  const navigate = useNavigate()
  function editUsr(id){
    // getDataById("/products/",id).then((prd)=>console.log(prd))
    navigate(`/editusr/${id}`)
  }

  return (
    <table className="min-w-full border-collapse block md:table">
    <thead className="block md:table-header-group">
    <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
        <td className= " full bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell" colSpan="100%">
          {/* sort start */}
        <input
  type="search"
  className=" px-4 py-1 text-gray-800 rounded-full focus:outline-none"
  placeholder="search"
  x-model="search"
  onChange={(e)=>{
    dispatch({type:"SearchUsr",searchValues:e.target.value})
  }}
/>
            <button onClick={()=>{
    dispatch({type:"A-Zusr"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">A-Z</button>
            <button onClick={()=>{
    dispatch({type:"Z-Ausr"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">Z-A</button>
   <button onClick={()=>{
    dispatch({type:"Admins"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">Admins</button>
          {/* sort  */}
        </td>
    </tr>
      <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
        <th className= "bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
        User Name
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Name
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Surname
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Gender
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Password
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Mail
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Is Admin
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Basket
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Favorited
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Actions
        </th>
        <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Created at
        </th>
      </tr>
    </thead>
    <tbody className="block md:table-row-group">
        {state.filteredUsr.map((elem)=>{
          // console.log(elem);
            return(
                <tr key={uuidv4()} className='border border-grey-500 md:border-none block md:table-row bg-gray-300'>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.userName}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.name}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.surname}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.gender}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.password}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.email}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.isAdmin==true ?"true" :"false"}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.basket}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.favorites}
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Actions
              </span>
              <button onClick={()=>editUsr(elem.id)} className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
        Edit
      </button>
              <button
                className="my-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                onClick={() => {
                  deleteById("/users/",elem.id);
                  let newArr = state.user.filter(
                    (item) => item.id !== elem.id
                  );
                  dispatch({
                    type: "SetUser",
                    user: newArr,
                  });
                }}
              >
                Delete
              </button>
            <Link to={`/user/${elem.id}`} className='my-1 mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded'> Detail </Link>
            </td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span className="inline-block w-1/3 md:hidden font-bold">
              </span>
              {elem.createdAt}
            </td>
          </tr>
            )
        })}
          
    </tbody>
  </table>
);
};

export default Users