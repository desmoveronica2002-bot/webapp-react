
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
     <div className="container-fluid bg-light">
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
            <p className="lead">{film?.abstract}</p>
          </div>

          </div>

          </div>
     </div>

     <div  className="container mt-5">
      <h3>Submit and Reviews</h3>
        <form>

          <div className="mb-3">
            <label htmlFor="reviewerName" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="reviewerName" placeholder="Enter your name"/>
          </div>


          <div className="mb-3">
            <label htmlFor="review" className="form-label">Your Vote</label>
            <select className="form-select" id="reviewVote">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 </option>
            </select>
          </div>


          <div className="mb-3">
            <label htmlFor="reviewText" className="form-label">Your Review</label>
            <textarea className="form-control" id="reviewText" rows="3" placeholder="Write your review here..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
    </div>
     
  

    </>
  )
}
