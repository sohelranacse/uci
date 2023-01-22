import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="headerbg px-2 border-b border-solid border-[#034EA2]">
      <nav className="container mx-auto">
        <div className="flex flex-wrap justify-between py-[17px]">
          <Link className="nav-link h-[60px] w-[158px] inline-block" to="/">
            <img src="logo.png" alt="logo" />
          </Link>

          <div className="uppercase font-[700] text-[13px]">
            <ul className="flex justify-end gap-6">
              <li>
                <Link className="nav-link text-[#EE3129]" to="/">
                  Career
                </Link>
              </li>
              <li>
                <Link className="nav-link text-[#EE3129]" to="/about">
                  Gallery
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="uppercase text-center font-[400] text-[9px] text-[#EE3129] rounded-sm py-1 px-6 border border-[#EE3129] hover:text-[#fff] hover:border-[#034EA2] hover:bg-[#034EA2] ease-linear duration-300"
                >
                  Search
                </button>
              </li>
            </ul>

            <ul className="flex justify-between gap-6 text-[#034EA2] mt-4">
              <li>
                <Link className="nav-link text-[#EE3129]" to="/">
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
              <li>
                <Link className="nav-link" to="/about">
                  Social Activities
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/about">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
