import { useState, useEffect } from "react"

export default function HomePage() {


  const {films, setFilms} = useState([])

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
            <div className="col">
              <img src="https://placeholder.com/300x400" alt="Film poster" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Film Title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.</p>
                <a href="#" className="btn btn-primary">Read reviews</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}