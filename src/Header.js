import React, { useState } from 'react'

const Header = (props) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <input id="todo-input" value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => props.onAdd(value)}>Add todo</button>
    </div>
  )
}

export default Header
