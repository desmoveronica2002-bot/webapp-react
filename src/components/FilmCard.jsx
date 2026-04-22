import { Link } from "react-router-dom";

export default function FilmCard({ film }) {

return (
  <div className="col">
    <div className="card">
      {film.image && (<img src={film.image} className="card-img-top" alt="Film Cover"/>)}
      <div className="card-body">
        <h5 className="card-title">{film.title}</h5>
        <div className="card-text">genre: {film.genre}</div>
        {/*<p className="card-text">Rating: {film.rating}/5</p>}*/}
        <Link to={`/films/${film.id}`} className="btn btn-primary">Read Review</Link>
      </div>
    </div>
  </div>
)

}
