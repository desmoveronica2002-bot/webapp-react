
import { useParams } from "react-router-dom";

export default function FilmPage() {

    const { filmId } = useParams();



  return (
    <div>
      <h1>Film Page: {filmId}</h1>

    </div>
  )
}
