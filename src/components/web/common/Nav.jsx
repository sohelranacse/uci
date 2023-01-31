import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const NavLink = ({ to, label, type }) => {
  const location = useLocation();

  if (type === "desktop") {
    return (
      <Link
        className={
          location.pathname === to
            ? "nav-link text-[#EE3129] ease-linear duration-300"
            : "nav-link text-[#034EA2] hover:text-[#EE3129] ease-linear duration-300"
        }
        to={to}
      >
        {label}
      </Link>
    );
  } else if (type === "top") {
    return (
      <Link
        className={
          location.pathname === to
            ? "nav-link text-[#034EA2] ease-linear duration-300"
            : "nav-link text-[#EE3129] hover:text-[#034EA2] ease-linear duration-300"
        }
        to={to}
      >
        {label}
      </Link>
    );
  } else {
    return (
      <Link
        className={
          location.pathname === to ? "text-[#EE3129] text-2xl" : "text-2xl"
        }
        to={to}
      >
        {label}
      </Link>
    );
  }
};

function Nav() {
  const [nav, setNav] = useState(false);
  const [seachActive, setseachActive] = useState(false);

  const handleNav = () => {
    if (nav) document.querySelector("html").style.overflow = "";
    else document.querySelector("html").style.overflow = "hidden";

    // console.log(nav);
    setNav(!nav);
    // console.log(nav);
  };

  const handleSearch = () => {
    setseachActive(true);
  };

  return (
    <header className="headerbg px-2 border-b border-solid border-[#034EA2]">
      <nav className="container mx-auto">
        <div className="flex flex-wrap justify-between py-[17px]">
          <Link
            className="nav-link md:h-[60px] w-[70px] md:w-[158px] inline-block"
            to="/"
          >
            <img src="logo.png" alt="logo" />
          </Link>

          <div className="hidden md:block uppercase font-[700] text-[13px]">
            <ul className="flex justify-end gap-6">
              <li>
                <NavLink to="/career" label="Career" type="top" />
              </li>
              <li>
                <NavLink to="/gallery" label="Gallery" type="top" />
              </li>
              <li>
                {seachActive ? (
                  <form className="inline-flex h-[25px]">
                    <input
                      type="text"
                      placeholder="keywords"
                      className="h-full w-full pl-2"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white bg-[#EE3129] font-[600] text-sm h-full px-4"
                    >
                      <FaSearch />
                    </button>
                  </form>
                ) : (
                  <button
                    type="button"
                    className="uppercase text-center font-[400] text-[10px] text-[#EE3129] rounded-sm py-1 px-6 border border-[#EE3129] hover:text-[#fff] hover:border-[#034EA2] hover:bg-[#034EA2] ease-linear duration-300"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                )}
              </li>
            </ul>

            <ul className="flex justify-between gap-6 text-[#034EA2] mt-4">
              <li>
                <NavLink to="/" label="Home" type="desktop" />
              </li>
              <li>
                <NavLink to="/about" label="About" type="desktop" />
              </li>
              <li>
                <NavLink to="/group" label="Active Group" type="desktop" />
              </li>
              <li>
                <NavLink to="/project" label="Project" type="desktop" />
              </li>
              <li>
                <NavLink
                  to="/social"
                  label="Social Activities"
                  type="desktop"
                />
              </li>
              <li>
                <NavLink to="/contact" label="Contact" type="desktop" />
              </li>
            </ul>
          </div>

          {/* mobile nav */}
          <div
            onClick={handleNav}
            className="block sm:hidden z-10 cursor-pointer"
          >
            {nav ? (
              <AiOutlineClose size={25} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} className="text-[#034EA2]" />
            )}
          </div>

          <div
            className={
              nav
                ? "sm:hidden fixed top-0 left-0 right-0 bottom-0 z-[2] w-full h-screen bg-[#034EA2] text-center ease-in duration-300 uppercase"
                : "sm:hidden fixed top-0 left-[-100%] right-0 bottom-0 z-[2] w-full h-screen bg-[#034EA2] text-center ease-in duration-300 uppercase"
            }
          >
            <div className="flex justify-center py-16">
              <ul className="font-[700]">
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/" label="Home" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/about" label="About" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/group" label="Group" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/project" label="Project" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/news" label="News & Media" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink
                    to="/social"
                    label="Social Activities"
                    type="mobile"
                  />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/contact" label="Contact" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/career" label="Career" type="mobile" />
                </li>
                <li
                  className="hover:text-[#EE3129] py-2 text-slate-50"
                  onClick={handleNav}
                >
                  <NavLink to="/gallery" label="Gallery" type="mobile" />
                </li>
              </ul>
            </div>

            {/* search */}
            <form className="h-10 inline-flex w-full px-4">
              <input
                type="text"
                placeholder="keywords"
                className="h-full w-full pl-2"
                required
              />
              <button
                type="submit"
                className="text-white bg-[#EE3129] font-[600] text-[20px] leading-[29px] h-full px-4"
              >
                <FaSearch />
              </button>
            </form>
          </div>
          {/* mobile nav end */}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
