import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../details.css";
import { FaPrint } from "react-icons/fa";

function QuoteDetails({ onCategoryChange }) {
  const [quote, setQuote] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const API = process.env.REACT_APP_API_URL;
  let { id } = useParams();
  let navigate = useNavigate();

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    axios
      .get(`${API}/quotes/${id}`)
      .then((response) => {
        console.log(response.data);
        setQuote(response.data);
        onCategoryChange(response.data.category);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id, API, onCategoryChange]);

  const deleteQuote = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this quote?"
    );
    if (confirmed) {
      axios
        .delete(`${API}/quotes/${id}`)
        .then(
          () => {
            navigate(`/quotes`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    }
  };

  return (
    <article className="Quote-Details">
      <div className="card-container">
        <button className="print-button" onClick={handlePrint}>
          <FaPrint />
        </button>
        <div className="card">
          <p>
            {quote.is_favorite ? (
              <span role="img" aria-label="favorite">
                ⭐️
              </span>
            ) : (
              "Not a favorite 😡"
            )}
          </p>
          <p
            style={{
              fontFamily: "Great Vibes",
              fontSize: "36px",
              color: "black",
            }}
          >
            "{quote.quote}"
          </p>
          <p>Author: {quote.author}</p>
          <p>Source of quote: {quote.source}</p>
          <p>Original language: {quote.language}</p>
          <p>Year quoted: {quote.year_quoted}</p>
        </div>
        <div className="buttons">
          <div>
            {" "}
            <Link to={`/quotes`}>
              <button className="button">Back</button>
            </Link>
          </div>
          <div>
            {" "}
            <a href={`/quotes/${quote.id}/edit`}>
              <button className="button">Edit</button>
            </a>
          </div>
          <div>
            {" "}
            <button className="button" onClick={deleteQuote}>
              Delete
            </button>
          </div>
        </div>
        <div className="comment-div">
          <div className="comments-section">
            <h2>Comments</h2>
            <textarea
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
            />
            <button className="button" onClick={addComment}>
              Add Comment
            </button>
          </div>
          <div className="comments-list">
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default QuoteDetails;
