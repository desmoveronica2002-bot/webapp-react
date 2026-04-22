export default function ReviewForm() {
    
  return (
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
  )

}