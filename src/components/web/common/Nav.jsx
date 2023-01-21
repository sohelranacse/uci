import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="headerbg h-[80px]">
      <nav className="container mx-auto">
        <Link className="nav-link" to="/">
          {/* <img src="../." alt="logo" /> */}
          UCI
        </Link>

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
          <li>
            <Link className="nav-link" to="/about">
              Active Group
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              Project
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
