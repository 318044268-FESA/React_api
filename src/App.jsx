import { useState } from 'react'
import Fruit from './Fruit'

function App() {
  const [fruits, setFruits] = useState([
    'Manzana',
    'Pera',
    'Platano',
    'Sandía',
    'Mango',
    'Durazno',
    'Naranja',
    'Kiwi',
    'Uva',
  ]);

  const addFruit = () => {
    const newFruit = prompt('Escribe una fruta:');
    if (newFruit && newFruit.trim() !== '') {
      setFruits([...fruits, newFruit.trim()]);
    }
  };

  return (
    <div>
      <h1>Lista de Frutas</h1>
      {fruits.map((fruit, index) => (
        <Fruit key={index} name={fruit} />
      ))}
      <button onClick={addFruit}>Agregar Fruta</button>
    </div>
  )
}

export default App