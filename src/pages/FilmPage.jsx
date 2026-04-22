
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FilmPage() {

    const [film, setFilm] = useState(null);
    const { filmId } = useParams();

    const backendServerAddress = import.meta.env.VITE_API_SERVER_ADDRESS;

    useEffect(() => {
        fetch(`${backendServerAddress}/api/films/${filmId}`)
            .then(response => response.json())
            .then(data => setFilm(data))
    }, [filmId]);





  return (
    <>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white">
            <img src={film?.image} alt={film?.title} className="img-fluid" />


          </div>

        </div>

        <div className="col-md-6">
          <div className="h-100 p-5">
            <h2>{film?.title}</h2>
            <div className="card-text">release year: {film?.release_year}</div>
            <div className="card-text">director: {film?.director}</div>
            <div className="card-text">created at: {film.created_at}</div>
            <div className="card-text">updated at: {film.updated_at}</div>
            <p className="lead">{film?.abstract}</p>
          </div>

          </div>
        </div>

  

    </>
  )
}
