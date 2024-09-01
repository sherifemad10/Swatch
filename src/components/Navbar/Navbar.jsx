import "./Navbar.css";
import Logo from "../../../public/assets/Swatch.png";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ApiContext from "../Context/Context";

const Navbar = () => {
  const [scroll, setScoll] = useState("");
  const [menu, setMenu] = useState(false);
  const { changeTheme, theme } = useContext(ApiContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setScoll("scrolled");
      } else {
        setScoll("");
      }
    });

    return () => {};
  }, []);

  // mobile
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className={`Navbar contanier ${scroll}`}>
      <div className="Logo">
        <img src={Logo} alt="Swatch" />
      </div>

      {/* mobile */}
      <label className="hamburger">
        <input
          type="checkbox"
          onChange={() => {
            handleMenu();
          }}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="linee line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="linee" d="M7 16 27 16"></path>
        </svg>
      </label>

      {menu && (
        <nav className="mobile">
          <NavLink to="/">Home</NavLink>
          <NavLink to="Movies">Movies</NavLink>
          <NavLink to="TvSeries">Tv Series</NavLink>
          <NavLink to="WatchList">Watch List</NavLink>
        </nav>
      )}

      <nav className="computer">
        <NavLink to="/">Home</NavLink>
        <NavLink to="Movies">Movies</NavLink>
        <NavLink to="TvSeries">Tv Series</NavLink>
        <NavLink to="WatchList">Watch List</NavLink>
      </nav>

      <div className="theme">
        <FaMoon
          className="Moon"
          onClick={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        />
        <FaSun
          className="Sun"
          onClick={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
