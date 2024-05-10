import React from 'react'

const Input = () => {
  return (
    <><input type="text" onChange={(e) => setdata(e.target.value)} /><br /></>
  )
}

export default Input