import React from "react";
import { v4 as uuidv4 } from "uuid";
import { deleteById } from "../../services/requests";
import { useRef } from "react";

const Admin = ({ state, dispatch }) => {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Image
          </th>
          <th className= "bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
          <input
  type="search"
  className=" px-4 py-1 text-gray-800 rounded-full focus:outline-none"
  placeholder="search"
  x-model="search"
  onChange={(e)=>{
    dispatch({type:"SearchProd",searchValue:e.target.value})
  }}
/>
            <button onClick={(e)=>{
    dispatch({type:"A-Z"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">A-Z</button>
            <button className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">Z-A</button>
            <button onClick={(e)=>{
    dispatch({type:"low-high"})
  }} className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">Low-High</button>
            <button className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">High-Low</button>
            <button className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">in small quantities</button>
            <button className="middle none center rounded-lg bg-pink-500 py-3 px-3 m-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true">in large quantities</button>
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Price
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Category
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
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
          Edit
        </button> */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  onClick={() => {
                    deleteById(elem.id);
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
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Admin;
