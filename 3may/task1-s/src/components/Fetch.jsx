import React from 'react'

const Fetch = () => {

const said = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => {
        console.error(err,'somthing went wrong');
      });
}
  return (
    <button onClick={()=>said()}>Fetch Requests</button>
  )
}

export default Fetch