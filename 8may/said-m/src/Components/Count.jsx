import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Count = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <p>{count}</p>
  )
}

export default Count