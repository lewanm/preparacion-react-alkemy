//libraries
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

//helpers
import logginSuccess from "../helpers/logginSuccess";
import errorModal from "../helpers/errorModal";

//styles
import "../css/login.css";

const STORED_USER = "challenge@alkemy.org";
const STORED_PASSWORD = "react";
const WAITING_TIME = 3;

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "" || password === "") {
      errorModal("complete todos los campos para continuar");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      errorModal("El email no es valido");
      return;
    }
    if (email !== STORED_USER || password !== STORED_PASSWORD) {
      errorModal("Las credenciales son invalidas");
      return;
    }

    axios
      .post("https://challenge-react.alkemy.org", {
        email,
        password,
      })
      .then((res) => {
        logginSuccess("Loggin success!", WAITING_TIME);
        //errorModal("Mentira, no es error, si te logueaste jiji");
        const token = res.data.token;
        localStorage.setItem("token", token);
        setTimeout(() => {
          navigate("/listado");
        }, WAITING_TIME * 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let token = localStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/listado" />}
      <div className="login-container">
        <h2>Formulario de login</h2>
        <form className="login" onSubmit={handleSubmit}>
          <label>
            <span>Correo electronico:</span>
            <input type="text" name="email" />
          </label>
          <label>
            <span>Contraseña:</span>
            <input type="password" name="password" />
          </label>
          <button className="login-button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}
