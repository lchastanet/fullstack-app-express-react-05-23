import { Link, useNavigate } from "react-router-dom"
import ToggleThemeButton from "./ToggleThemeButton"
import { useCurrentUserContext } from "../contexts/CurrentUserContext"

function Header() {
  const { user, setUser } = useCurrentUserContext()

  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.clear()
    setUser(null)
    navigate("/")
  }

  return (
    <header>
      <nav className="flex flex-row justify-around shadow bg-white dark:bg-slate-800 dark:text-white">
        <ToggleThemeButton />
        <Link to="/" className="p-4 font-bold text-xl">
          PostMeh_
        </Link>
        <ul className="flex flex-row p-4 gap-4">
          <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300">
            <Link to="/">Accueil</Link>
          </li>
          {user ? (
            <>
              <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300">
                <Link to="/create-post">Créer un post</Link>
              </li>
              <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300">
                <button onClick={handleClick}>Déconnexion</button>
              </li>
            </>
          ) : (
            <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300">
              <Link to="/sign-in">Se connecter</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
