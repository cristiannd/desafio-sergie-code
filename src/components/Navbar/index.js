import { Link, useLocation } from "react-router-dom"
import './styles.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav>
      <ul>
        <li className={pathname === "/" ? 'active' : ''}>
          <Link to="/" >Agregar una persona</Link>
        </li>
        <li className={pathname === "/people" ? 'active' : ''}>
          <Link to="people" >Lista de personas</Link>
        </li>
      </ul>
    </nav>
  )
}