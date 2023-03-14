import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import DetalleCard from "./DetailCard";

export default function Detalle() {
  const [movieDetail, setMovieDetail] = useState(null);
  const [idError, setIdError] = useState(false);

  let token = localStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");
  useEffect(() => {
    let endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_KEY}&language=es-ES`;

    axios
      .get(endpoint)
      .then((movie) => {
        setMovieDetail(movie.data);
      })
      .catch((e) => {
        setIdError(true);
      });
  }, [movieID]);
  return (
    <>
      {!token && <Navigate to="/listado" />}
      {idError && <h1>Error: el id {movieID} no existe.</h1>}
      {!movieDetail && !idError && <h1>CARGANDO WACHIN</h1>}
      {movieDetail && !idError && <DetalleCard movieDetail={movieDetail} />}
    </>
  );
}
