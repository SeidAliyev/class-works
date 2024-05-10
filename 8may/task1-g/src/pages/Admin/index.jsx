import React from "react";
import { v4 as uuidv4 } from "uuid";
import { deleteById,getAllData,getDataById } from "../../services/requests";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


const Admin = ({ state, dispatch }) => {

  const navigate = useNavigate()

  function editPrd(id){
    // getDataById("/products/",id).then((prd)=>console.log(prd))
    navigate(`/edit/${id}`)
  }

  function categories(){
    let cats=[]
    let mycat=state.products
    for (let i = 0; i < mycat.length; i++) {
      if (!cats.includes(mycat[i].category)) {
        cats.push(mycat[i].category)
        // console.log(mycat[i].category);
      }
    } 
    return cats
  }
  let categoryProd = categories()

let adminCount = [...state.user].filter((elem)=>elem.isAdmin==true).length

  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
      <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500  block md:table-cell" colSpan="100%">
            <input
  type="search"
  className=" px-4 py-1 text-gray-800 rounded-full focus:outline-none"
  placeholder="search"
  x-model="search"
  onChange={(e)=>
    dispatch({type:"SearchProd",searchValue:e.target.value})}
/>
            <button onClick={()=>{
    dispatch({type:"A-Z"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">A-Z</button>
            <button onClick={()=>{
    dispatch({type:"Z-A"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">Z-A</button>
            <button onClick={()=>{
    dispatch({type:"low-high"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">Low-High</button>
            <button onClick={()=>{
    dispatch({type:"high-low"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">High-Low</button>
            <button onClick={()=>{
    dispatch({type:"lowGuanti"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">in small quantities</button>
            <button onClick={()=>{
    dispatch({type:"highGuanti"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">in large quantities</button>
  <div className="items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
    <div className="min-w-0">
      <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
        
        Products count : {state.products.length}  /  Users count : {state.user.length} / Admins count : {adminCount}
      </h2>
    </div>
  </div>

          </th>
      </tr>
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Image
          </th>
          <th className= "bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          Title
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Price
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            <select onChange={(e)=>dispatch({type:"CategoryProd",filtValue:e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="Categories" id="">
            <option defaultChecked value="">Categories</option>
            {categoryProd.map((item)=>
              <option key={uuidv4()}  value={item}>{item}</option>
            )}
              
              </select>
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Rate
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Count
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {state.filteredProd.map((elem) => {
          let colors = "";
          if (elem.rating.count < 100) {
            colors = "bg-red-300";
          } else if (elem.rating.count < 200) {
            colors = "bg-yellow-300";
          }else{
            colors = "bg-gray-300"
          }

          return (
            <tr
              key={uuidv4()}
              className={`border border-grey-500 md:border-none block md:table-row ${colors}`}
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                </span>
                <img className="w-20 h-20" src={elem.image}  alt="" />
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                </span>
                {elem.title}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                </span>
                {elem.price}$
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                </span>
                {elem.category}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                </span>
                {elem.rating.rate}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                </span>
                {elem.rating.count}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">
                  Actions
                </span>
                <button onClick={(e)=>editPrd(elem.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mx-2 border border-blue-500 rounded">
          Edit
        </button>
                <button
                  className="my-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  onClick={() => {
                    deleteById("/products/",elem.id);
                    let newArr = state.products.filter(
                      (item) => item.id !== elem.id
                    );
                    dispatch({
                      type: "SetProducts",
                      products: newArr,
                    });
                  }}
                >
                  Delete
                </button>
                <Link to={`/${elem.id}`} className='my-1 mx-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded'> Detail </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Admin;
