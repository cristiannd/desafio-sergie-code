import { useState } from 'react'
import Table from './components/Table'
import Form from './components/Form'
import './app.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const DATA = [
  {
    nombre: 'Pedro',
    edad: 20,
    carrera: 'Ingeniería',
    hobbie: 'Futbol',
  },
  {
    nombre: 'Rodrigo',
    edad: 22,
    carrera: 'Arquitectura',
    hobbie: 'Bajo eléctrico',
  },
  {
    nombre: 'Romina',
    edad: 21,
    carrera: 'Abogacía',
    hobbie: 'Acrobacia',
  },
  {
    nombre: 'Ana',
    edad: 23,
    carrera: 'Contadora',
    hobbie: 'Astronomía',
  },
]

function App() {
  const [people, setPeople] = useState(DATA)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Form setPeople={setPeople} />} />
        <Route path='/people' element={<Table people={people} />} />
      </Routes>
    </div>
  )
}

export default App
