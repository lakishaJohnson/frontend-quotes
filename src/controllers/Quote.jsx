import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Quote() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}`)
      .then((res) => setQuote(res.data))
      .catch((e) => console.warn("catch", e));
  }, []);

  return (
    <>
      <div className="home-link">
        <Link className="home-btn" to="/">
          <div className="home-home">Home &nbsp;&nbsp;&nbsp;| </div>{" "}
        </Link>
        &nbsp;&nbsp;
        <Link className="home-btn" to="/quotes">
          <div className="home-index">Index &nbsp;&nbsp;&nbsp;| </div>
        </Link>
        &nbsp;&nbsp;
        <Link className="home-btn" to="/quotes/new">
          <div className="home-new">New &nbsp;&nbsp;</div>
        </Link>
      </div>
      <div className="quote-container">
        <p className="quote">{quote.quote}</p>
        <p>- {quote.author}</p>
      </div>
    </>
  );
}

export default Quote;
