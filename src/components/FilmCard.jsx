import { Link } from "react-router-dom";

export default function FilmCard({ film }) {

  const backendServerAddress = import.meta.env.VITE_API_SERVER_ADDRESS;

  return (
    <div className="col d-flex">
      <div className="card h-100 w-100">

        {film.image && (
          <img
            src={`${backendServerAddress}/img/${film.image}`}
            className="card-img-top"
            alt="Film Cover"
          />
        )}

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{film.title}</h5>
          <div className="card-text">genre: {film.genre}</div>

          <div className="mt-auto">
            <Link to={`/films/${film.id}`} className="btn btn-primary">
              Read Review
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}