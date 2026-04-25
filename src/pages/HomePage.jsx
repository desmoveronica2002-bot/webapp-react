import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import { useLoader } from "../context/LoaderContext";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const { showLoader, hideLoader } = useLoader();

  const api_url =
    import.meta.env.VITE_API_SERVER_ADDRESS + "/api/films";

  useEffect(() => {
    showLoader();

    fetch(api_url)
      .then(res => res.json())
      .then(data => setFilms(data))
      .finally(() => hideLoader());
  }, []);

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">
            Community films reviews
          </h1>
          <p className="col-md-8 fs-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi mollitia neque 
            nemo iure ratione, adipisci est? Nihil, reiciendis. Quae nostrum,
            suscipit eveniet aut quidem ratione inventore dolore atque maxime quibusdam.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <h2 className="text-muted">Films</h2>
          <div className="row">
            {films.map(film => (
              <FilmCard key={film.id} film={film} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}