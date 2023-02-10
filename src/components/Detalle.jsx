import { Navigate } from "react-router-dom";

export default function Detalle(detalle) {
  const { a } = detalle;
  let token = localStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/listado" />}
      <h1>aaa{a}</h1>
    </>
  );
}
