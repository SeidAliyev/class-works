import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData,addFav, setFav } from "./Redux/Features/counterSlice";
import axios from "axios";

function Favorites() {
  const counts = useSelector((state) => state.counter.posts);
  const dispatch = useDispatch();


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(setData(res.data)));
  }, [dispatch]);

  return (
    <ul>
     {
        counts && counts.map((count)=>(
            <li key={count.id}>{count.title}<button onClick={()=>dispatch(setFav(count))}>addFav</button></li>
        ))
     }
    </ul>
  );
}

export default Favorites;
