import "../css/card.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
//TODO, IMPLEMENTAR CON JS CAMBIO DE CLASES PARA PODER HACER UN AVISTA COMO LA DE NETFLIX
//HABRIA QUE CREAR LA CARD CON TODA LA INFORMACION OCULTA Y DESPUES MOSTRARLA CON EL HOVER

export default function Card({ movieData }) {
  const {
    title,
    id,
    popularity,
    release_date,
    vote_average,
    poster_path,
    overview,
  } = movieData;

  const navigate = useNavigate();
  const ref = useRef(null);

  function prueba(frase, cantidad) {
    if (frase === "") return "Overview not found";
    const fraseDividida = frase.split(" ");
    const fraseCortada = [];
    let fraseFinal = "";
    for (let i = 0; i < cantidad; i++) {
      fraseCortada[i] = fraseDividida[i];
    }
    fraseFinal = fraseCortada.join(" ");
    return fraseFinal;
  }

  const changeUrl = () => {
    navigate(`/detalle?movieID=${id}`);
  };

  //TODO dejar mas lindo esto que es horrible y repite codigo
  //Y VER SI SE PUEDE HACER DE OTRA FORMA CON LOS HOOKS
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("mouseenter", () => {
      const container = element.querySelector(":nth-child(2)");
      container.classList.remove("hidden");
      const children = Array.from(container.children);
      children.forEach((child) => child.classList.remove("hidden"));
    });
    element.addEventListener("mouseout", () => {
      const container = element.querySelector(":nth-child(2)");
      container.classList.add("hidden");
      const children = Array.from(container.children);
      children.forEach((child) => child.classList.add("hidden"));
    });
  }, []);
  return (
    <div className="card-container">
      <div onClick={changeUrl} ref={ref} className="card">
        {poster_path ? (
          <img
            className="card-img"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        ) : (
          <img className="card-img" src="/placeholderMovie.jpg" alt={title} />
        )}

        <div className="data-container hidden">
          <button
            onClick={console.log("le diske a like")}
            className="like-button"
          >
            🧡
          </button>
          <p className="title hidden">{title}</p>
          {/* <p>{`${overview.substring(0, 60)}...`}</p> */}
          <p className="overview hidden">{`${prueba(overview, 25)} ...`}</p>
        </div>
      </div>
    </div>
  );
}
