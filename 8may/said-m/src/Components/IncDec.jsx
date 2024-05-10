import React from 'react'
import { decrement, increment,decrement3, increment3, incrementByAmount,decrementByAmount } from '../counterSlice/Store/store'
import { useSelector, useDispatch } from 'react-redux'


const IncDec = () => {
  const dispatch = useDispatch()
  return (
    <>
    <button
    aria-label="Increment value"
    onClick={() => dispatch(increment())}
  >
    Increment
  </button>
 
  <button
    aria-label="Decrement value"
    onClick={() => dispatch(decrement())}
  >
    Decrement 
  </button>
  </>
  )
}

export default IncDec