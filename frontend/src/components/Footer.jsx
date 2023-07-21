import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";

function Footer() {
  return (
    <footer className="bg-white text-center shadow p-4">
      <ToggleThemeButton /> &nbsp; &copy; <Link to="/">Wilders</Link>
    </footer>
  );
}

export default Footer;
