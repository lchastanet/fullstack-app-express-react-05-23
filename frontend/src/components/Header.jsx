import { NavLink } from "react-router-dom"

import styles from "../styles/Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/create-post">Create</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
