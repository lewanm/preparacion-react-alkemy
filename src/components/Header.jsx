//libraries
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//styles
import "../css/header.css";

//components
import Search from "./Search";

//helpers
import isLoggedIn from "../helpers/isLoggedIn";

export default function Header() {
  const [menuActivation, setMenuActivation] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActivation(!menuActivation);
  };

  const closeMenu = () => {
    if (menuActivation) setMenuActivation(false);
  };

  function logout() {
    Swal.fire({
      title: "¿Seguro que quiere salir?",
      showDenyButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  }

  let token = localStorage.getItem("token");
  useEffect(() => closeMenu);
  return (
    <>
      <header className="header">
        <p className="header-title">AlkeFlix</p>

        <button onClick={toggleMenu} className="header-button">
          <svg
            className="header-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z"
              fill="#000000"
            />
          </svg>
        </button>

        {token && <Search></Search>}

        <nav className={`header-nav ${menuActivation ? "isActive" : ""}`}>
          <ul className="header-ul">
            <li className="header-li">
              <Link to="/">Home</Link>
            </li>
            <li className="header-li">
              <Link to="/listado">Listado</Link>
            </li>
            <li className="header-li">
              {token ? (
                <span className="logout" onClick={logout}>
                  Log out
                </span>
              ) : (
                <span
                  className="logout"
                  onClick={() => console.log("todavia no implementado")}
                >
                  Sign in
                </span>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
