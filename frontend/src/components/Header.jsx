import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex flex-row justify-around shadow bg-white">
        <Link to="/" className="p-4 font-bold text-xl">
          PostMeh_
        </Link>
        <ul className="flex flex-row p-4 gap-4">
          <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300">
            <Link to="/">Accueil</Link>
          </li>
          <li className="hover:border-b-4 hover:border-slate-800 hover:font-bold transition-all duration-300">
            <Link to="/create-post">Créer un post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
