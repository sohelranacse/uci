import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul>
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
