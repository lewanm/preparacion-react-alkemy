//Libraries
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import Header from "./components/Header";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
import Error404 from "./components/Error404";

//Styles
import "./css/app.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultado" element={<Resultados />} />
        <Route path="/404" element={<Error404 />} />
        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

//TODO, AGREGAR LOADER
