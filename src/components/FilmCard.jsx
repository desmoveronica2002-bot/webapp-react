export default function FilmCard({ film }) {

return (
  <div className="col">
    <div className="card">
      {film.image && (<img src={film.image} className="card-img-top" alt="Film Cover"/>)}
      <div className="card-body">
        <h5 className="card-title">{film.title}</h5>
        <div className="card-text">director: {film.director}</div>
        <div className="card-text">genre: {film.genrer}</div>
        <div className="card-text">release year: {film.release_year}</div>
        <div className="card-text">abstract: {film.abstract}</div>
        <div className="card-text">created at: {film.created_at}</div>
        <div className="card-text">updated at: {film.updated_at}</div>
        {/*<p className="card-text">Rating: {film.rating}/5</p>}*/}
        <a href="#" className="btn btn-primary">Read Review</a>
      </div>
    </div>
  </div>
)

}
