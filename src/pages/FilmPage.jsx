import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

export default function FilmPage() {

  const [film, setFilm] = useState(null);
  const { filmId } = useParams();

  const backendServerAddress = import.meta.env.VITE_API_SERVER_ADDRESS;

  const fetchFilm = () => {
    fetch(`${backendServerAddress}/api/films/${filmId}`)
      .then(response => response.json())
      .then(data => setFilm(data));
  };

  useEffect(() => {
    fetchFilm();
  }, [filmId]);


  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row align-items-md-stretch">

          <div className="col-md-6">
            <div className="h-100 p-5 text-white">
              <img src={`${backendServerAddress}/img/${film?.image}`}alt={film?.title} className="img-fluid"/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="h-100 p-5">
              <h2>{film?.title}</h2>
              <div className="card-text">release year: {film?.release_year}</div>
              <div className="card-text">director: {film?.director}</div>
              <p className="lead">{film?.abstract}</p>
            </div>
          </div>

        </div>
      </div>

      <ReviewForm filmId={filmId}onReviewAdded={fetchFilm}/>

      <div className="container mt-5">
        <h3>Reviews</h3>

        <div className="list-group">
          {film?.reviews?.map(review => (
            <div key={review.id} className="list-group-item">
              <h5>{review.name} - {review.vote}/5</h5>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}