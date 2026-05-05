import { useState } from 'react'
import Fruit from './Fruit'

function App() {
  const [fruits, setFruits] = useState([
    'Platano', 'Mandarina', 'Naranja', 'Pera', 'Manzana', 'Durazno', 'Uva', 'Piña', 'Sandía', 'Mango',
  ]);

  return (
    <div>
      <h1>Lista de Frutas</h1>
      {fruits.map((fruit, index) => (
        <Fruit key={index} name={fruit} />
      ))}
    </div>
  )
}

export default App