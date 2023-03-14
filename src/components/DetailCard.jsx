//styles
import "../css/detailcard.css";

export default function DetailCard({ movieDetail }) {
  const {
    original_title,
    title,
    poster_path,
    overview,
    genres,
    release_date,
    vote_average,
    homepage,
  } = movieDetail;
  return (
    <div className="detail-card-container">
      <a href={homepage}>
        <div className="title-container">
          <h2>{title}</h2>
          <h3>({original_title})</h3>
        </div>
      </a>

      <div className="image-detail-container">
        <img
          className="detail-img"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
        <div className="detail-container">
          <p>Overview: </p>
          <p className="">{overview}</p>
          <p>Fecha de salida: {release_date}</p>
          <p>Rating: {vote_average}</p>
          <ul>
            Generos
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
