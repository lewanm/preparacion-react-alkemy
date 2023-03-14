import { useEffect, useState } from "react";
import axios from "axios";

//components
import Card from "./Card";

//styles
import "../css/listado.css";

export default function Resultados() {
  const [movies, setMovies] = useState([]);
  const apiKey = "2f8dad5c5e53ddd1a9371700f28b07db";
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${keyword}`;

    axios
      .get(endpoint)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((e) => console.log(e));
  }, [keyword]);
  return (
    <>
      {!movies.length ? (
        <h1> No se encontro la pelicula "{keyword}"</h1>
      ) : (
        <>
          {" "}
          <h1>Busqueda: {keyword}</h1>
          <div className="movie-list-container">
            {movies.map((movie) => (
              <Card movieData={movie} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
