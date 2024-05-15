import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFav, setFav } from "./Redux/Features/counterSlice";

function AddFavorites() {
  const fav = useSelector((state) => state.counter.fav);
  const dispatch = useDispatch();
  console.log(fav);

  return (
    <ul>
      {fav &&
        fav.map((count) => {
          return (
            <li key={count.id}>
              <span>{count.title}</span>
              <button onClick={() => dispatch(setFav(count))}>
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default AddFavorites;
