import { Link } from "react-router-dom";

export default function FilmCard({ film }) {

  const backendServerAddress = import.meta.env.VITE_API_SERVER_ADDRESS;

  return (
    <div className="col">
      <div className="card">

        {film.image && (
          <img
            src={`${backendServerAddress}/img/${film.image}`}
            className="card-img-top"
            alt="Film Cover"
          />
        )}

        <div className="card-body">
          <h5 className="card-title">{film.title}</h5>
          <div className="card-text">genre: {film.genre}</div>

          <Link to={`/films/${film.id}`} className="btn btn-primary">
            Read Review
          </Link>

        </div>
      </div>
    </div>
  );
}