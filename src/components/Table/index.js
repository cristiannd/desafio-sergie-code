import './styles.css'

export default function Table({ people }) {
  return (
    <section className="table-container">
      <h2>Lista de personas</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => {
            const { nombre, edad, carrera, hobbie } = person

            return (
              <tr key={index}>
                <td>{nombre}</td>
                <td>{edad}</td>
                <td>{carrera}</td>
                <td>{hobbie}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}
