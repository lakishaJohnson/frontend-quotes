import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";

const API = process.env.REACT_APP_API_URL;

function QuoteNew() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const addQuote = (newQuote) => {
    axios
      .post(`${API}/quotes`, newQuote)
      .then(() => navigate("/quotes"))
      .catch((e) => {
        setErrorMessage(e.message || "An error occurred.");
        setShowModal(true);
      });
  };

  const [quote, setQuote] = useState({
    author: "",
    quote: "",
    category: "",
    source: "",
    year_quoted: "",
    language: "",
    is_favorite: false,
  });

  const handleCheckboxChange = () => {
    setQuote({ ...quote, is_favorite: !quote.is_favorite });
  };

  const handleTextChange = (event) => {
    setQuote({ ...quote, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!quote.quote) {
      setErrorMessage("Quote is required.");
      setShowModal(true);
      return;
    }

    if (!quote.category) {
      setErrorMessage("Category is required.");
      setShowModal(true);
      return;
    }

    if (!quote.language) {
      setErrorMessage("Language is required.");
      setShowModal(true);
      return;
    }
    addQuote(quote);
  };

  return (
    <>
      <article className="Quote-Details">
        <div className="card-container">
          <div className="home-link">
            <Link className="home-btn" to="/">
              <div className="home-home">Home &nbsp;&nbsp;&nbsp;| </div>{" "}
            </Link>
            &nbsp;&nbsp;
            <Link className="home-btn" to="/quotes">
              <div className="home-new">Index &nbsp;&nbsp;</div>
            </Link>
          </div>
          <div className="card">
            <div className="">
              <form onSubmit={handleSubmit}>
                <label htmlFor="author">Author:</label>
                <input
                  id="author"
                  value={quote.author}
                  type="text"
                  onChange={handleTextChange}
                  placeholder=" author"
                />
                <label htmlFor="quote">Quote:</label>
                <input
                  id="quote"
                  type="text"
                  value={quote.quote}
                  placeholder=" quote"
                  onChange={handleTextChange}
                />
                <label htmlFor="category">Category:</label>
                <input
                  id="category"
                  type="text"
                  name="category"
                  value={quote.category}
                  placeholder=" educational, inspirational..."
                  onChange={handleTextChange}
                />
                <label htmlFor="source">Source:</label>
                <input
                  id="source"
                  type="text"
                  name="source"
                  value={quote.source}
                  placeholder=" source"
                  onChange={handleTextChange}
                />
                <label htmlFor="year_quoted">Year:</label>
                <input
                  id="year_quoted"
                  type="number"
                  name="year_quoted"
                  value={quote.year_quoted}
                  placeholder=" date"
                  onChange={handleTextChange}
                />
                <label htmlFor="language">Language:</label>
                <input
                  id="language"
                  type="text"
                  name="language"
                  value={quote.language}
                  placeholder=" language"
                  onChange={handleTextChange}
                />
                <label htmlFor="is_favorite">Favorite:</label>
                <input
                  id="is_favorite"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={quote.is_favorite}
                />

                <br />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </article>
      <ErrorModal
        show={showModal}
        setShowModal={setShowModal}
        errorMessage={errorMessage}
      />
    </>
  );
}

export default QuoteNew;
