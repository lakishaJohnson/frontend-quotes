import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../details.css";
import { FaPrint } from "react-icons/fa";
import { TwitterShareButton, TwitterIcon } from "react-share";

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

  const tweetContent = `${quote.quote} - ${quote.author}`; 

  return (
    <>
      <article className="Quote-Details">
        <div className="card-container">
          <button className="print-button" onClick={handlePrint}>
            <FaPrint />
          </button>
          <button className="Share">
            <TwitterShareButton
              title={tweetContent}
              url="http://www.twitter.com"
            >
              <TwitterIcon size={32} />
            </TwitterShareButton>
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
                <div className="button">Back&nbsp;</div>
              </Link>
            </div>
            <div>
              {" "}
              <Link to={`/quotes/${quote.id}/edit`}>
                <div className="button">Edit&nbsp;</div>
              </Link>
            </div>
            <div>
              {" "}
              <div className="button" onClick={deleteQuote}>
                Delete&nbsp;
              </div>
            </div>
          </div>
          <div className="comment-div">
            <div className="comments-section">
              <h2>Comments</h2>
              <textarea
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
              />
              <div className="button" onClick={addComment}>
                Add Comment&nbsp;
              </div>
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
    </>
  );
}

export default QuoteDetails;
