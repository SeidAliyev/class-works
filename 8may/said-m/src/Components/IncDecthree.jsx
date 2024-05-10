import React from 'react'
import { decrement, increment,decrement3, increment3, incrementByAmount,decrementByAmount } from '../counterSlice/Store/store'
import { useSelector, useDispatch } from 'react-redux'

function IncDecthree() {
  const dispatch = useDispatch()

  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment3())}
      >
        Increment 3
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement3())}
      >
        Decrement 3
      </button>
    </>
  )
}

export default IncDecthree