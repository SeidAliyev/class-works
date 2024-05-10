import React from 'react'
import { useParams } from 'react-router-dom';


const UserDetail = () => {
  const { id } = useParams()
console.log(id);
  
  return (
    <>

    <h1>{id}</h1>
    </>
  )
}

export default UserDetail