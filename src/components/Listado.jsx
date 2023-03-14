//libreries
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//styles
import "../css/listado.css";

//components
import Card from "./Card";

export default function Listado() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=es-ES&page=1`;
    axios.get(endpoint).then((res) => {
      const data = res.data.results;
      setMovies(data);
    });
  }, [setMovies]);
  let token = localStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="movie-list-container">
        {movies.map((movie) => (
          <Card movieData={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
