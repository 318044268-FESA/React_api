import { useState } from 'react'
import './App.css'
import Fruit from './Fruit'

function App() {
  const [fruits, setFruits] = useState([
    'Plátano',
    'Uva', 
    'Manzana',
    'Pera',
    'Guayaba',
    'Kiwi',
    'Pepino',
    'Durazno',
    'Papaya',
    'Sandía',
    'Naranja',
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