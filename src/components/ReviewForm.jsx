import { useState } from "react";

export default function ReviewForm({ filmId }) {

  const backendServerAddress = import.meta.env.VITE_API_SERVER_ADDRESS;

  const [name, setName] = useState("");
  const [vote, setVote] = useState(1);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

     fetch(`${backendServerAddress}/api/reviews`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         movie_id: filmId,
         name,
         vote,
         text
        })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // reset form
      setName("");
      setVote("");
      setText("");
    });
  };

  return (
    <div className="container mt-5">
      <h3>Submit a Review</h3>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Your Vote</label>
          <select
            className="form-select"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Your Review</label>
          <textarea
            className="form-control"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>

      </form>
    </div>
  );
}