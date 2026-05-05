import { useState } from 'react'

const Fruit = ({ name }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={() => setChecked(!checked)} 
      />
      <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
        {name}
      </span>
    </div>
  )
}

export default Fruit