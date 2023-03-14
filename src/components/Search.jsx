import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/search.css";

export default function Search() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword !== "") {
      e.currentTarget.keyword.value = "";

      navigate(`/resultado?keyword=${keyword}`);
      navigate(0); // tuve que hacer esto para recargar la pagina ya que si no, no actualizaba
    } else console.log("vacio wacheen");
  };

  return (
    <>
      <form className="search-form" onSubmit={handleClick}>
        <button className="search-button ">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
          </svg>
        </button>
        <label className="search-label">
          <input
            className="search-input"
            placeholder="Buscar pelicula"
            type="text"
            name="keyword"
          />
        </label>
      </form>
    </>
  );
}
