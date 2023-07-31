import { Link } from "react-router-dom"
import ToggleThemeButton from "./ToggleThemeButton"

function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-around shadow bg-white dark:bg-slate-800 dark:text-white">
        <ToggleThemeButton />
        <Link to="/" className="p-4 font-bold text-xl">
          PostMeh_
        </Link>
        <ul className="flex flex-row p-4 gap-4">
          <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300 flex flex-col justify-center">
            <Link to="/">Accueil</Link>
          </li>
          <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300 flex flex-col justify-center">
            <Link to="/create-post">Créer un post</Link>
          </li>
          <li>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="http://picsum.photos/200/300"
                alt="user photo"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
