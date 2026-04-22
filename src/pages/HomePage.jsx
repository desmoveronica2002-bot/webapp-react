import { useState, useEffect } from "react"
import FilmCard from "../components/FilmCard"

export default function HomePage() {


  const [films, setFilms] = useState([])

  useEffect(() => {
     const api_url = import.meta.env.VITE_API_SERVER_ADDRESS + "/api/films";
      fetch(api_url)
      .then(res => res.json())
      .then(data => setFilms(data))
  }, [])



  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
         <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Community films reviews</h1>
            <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate vel 
            nisi labore in iusto cupiditate a consequatur quisquam placeat ex, modi itaque optio,
            similique ut nemo debitis ratione rem.
            </p>
          </div>
      </div>


      <section>
        <div className="container">
          <h2 className="text-muted">Films</h2>
          <div className="row">
            {films?.map(film => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        </div>
      </section>
    </>

  )
}