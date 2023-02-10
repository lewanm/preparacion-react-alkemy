//libraries
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//styles
import "../css/header.css";

//helpers
import isLoggedIn from "../helpers/isLoggedIn";
import logout from "../helpers/logout";

export default function Header() {
  const navigate = useNavigate();
  function logout() {
    //localStorage.clear()
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
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-title">
            <h2>AlkeFlix</h2>
          </div>
          <div className="navbar-pages">
            <Link to="/">Home</Link>
            <Link to="/listado">Listado</Link>
            {localStorage.getItem("token") ? (
              <span className="logout" onClick={() => logout()}>
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
          </div>
        </nav>
      </header>
    </>
  );
}
