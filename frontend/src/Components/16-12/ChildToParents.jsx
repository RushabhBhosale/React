import React, { useState } from 'react'

function ChildComponent({ ChangeValue }) {
  return (
    <input onChange={ChangeValue} />
  )
}

const ChildToParents = () => {

  const [value, setValue] = useState('');
  function ChangeValue(e) {
    setValue(e.target.value)
  }


  return (
    <div>
      <h1>Typed value: {value}</h1>
      <ChildComponent ChangeValue={ChangeValue} />
    </div>
  )
}

export default ChildToParents