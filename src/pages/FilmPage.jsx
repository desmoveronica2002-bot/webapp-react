
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


          </div>

        </div>

        <div className="col-md-6">
          <div className="h-100 p-5">
          <h2>uuuuuuu</h2>
          <p>uuuuuuu</p>
          <button className="btn btn" type="button">Button</button>
          </div>

          </div>
        </div>

  

    </>
  )
}
