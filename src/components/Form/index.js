import { useState } from 'react'
import './styles.css'

const CAREER_LIST = ['Ingeniería', 'Arquitectura', 'Abogacía', 'Astronomía']

export default function Form({ setPeople }) {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [carrera, setCarrera] = useState('')
  const [hobbie, setHobbie] = useState('')

  const formHandler = event => {
    event.preventDefault()

    const newPerson = {nombre, edad, carrera, hobbie}

    setPeople(prevState => [...prevState, newPerson])
    cleanFormHandler()
  }

  const cleanFormHandler = () => {
    setNombre('')
    setEdad('')
    setCarrera('')
    setHobbie('')
  }

  return (
    <section className="form-container">
      <h2>Formulario</h2>
      <form onSubmit={formHandler}>
        <input
          type='text'
          placeholder='Nombre'
          required
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          type='number'
          placeholder='Edad'
          required
          value={edad}
          onChange={e => setEdad(e.target.value)}
        />
        <select
          required
          value={carrera ? carrera : 'DEFAULT'}
          onChange={e => setCarrera(e.target.value)}
        >
          <option value='DEFAULT' disabled hidden>
            Carrera
          </option>
          {CAREER_LIST.map(career => {
            return (
              <option value={career} key={career}>
                {career}
              </option>
            )
          })}
        </select>
        <input
          type='text'
          placeholder='Hobbie'
          required
          value={hobbie}
          onChange={e => setHobbie(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}
