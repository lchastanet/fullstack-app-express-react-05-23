import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-center shadow p-4">
      &copy; <Link to="/">Wilders</Link>
    </footer>
  );
}

export default Footer;
