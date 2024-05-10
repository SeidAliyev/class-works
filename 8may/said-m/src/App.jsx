import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,decrement3, increment3, incrementByAmount,decrementByAmount } from './counterSlice/Store/store'
import Count from './Components/Count'
import IncDec from './Components/IncDec'
import IncDecthree from './Components/IncDecthree'

export function App() {

  const [data, setdata] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <div>
         <Count/>
         <IncDec/>
        <br />
        <IncDecthree/>
        
        <br />
        <input type="text" onChange={(e)=>setdata(e.target.value)}/> <br />
        <button onClick={()=>dispatch(incrementByAmount(data*1))}>+</button>
        <button onClick={()=>dispatch(decrementByAmount(data*1))}>-</button>
      </div>
    </div>
  )
}

export default App