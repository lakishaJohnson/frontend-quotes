import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../quotes.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const API = process.env.REACT_APP_API_URL;
console.log(API);

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const queryParams = useQuery();
  const orderParam = queryParams.get("order");
  const booleanParam = queryParams.get("is_favorite");

  useEffect(() => {
    axios
      .get(`${API}/quotes`, {
        params: {
          order: orderParam,
          is_favorite: booleanParam,
        },
      })
      .then((response) => setQuotes(response.data))
      .catch((error) => console.warn("catch", error));
  }, [orderParam, booleanParam]);

  const toggleFavorite = (id) => {
    const updatedQuotes = quotes.map((quote) => {
      if (quote.id === id) {
        return { ...quote, is_favorite: !quote.is_favorite };
      }
      return quote;
    });
    setQuotes(updatedQuotes);
  };

  return (
    <div className="Quotes">
      <div className="QuoteContainer">
        {quotes.map((quote) => (
          <div key={quote.id} className="QuoteCard">
            <div
              className="FavoriteIcon"
              onClick={() => toggleFavorite(quote.id)}
            >
              {quote.is_favorite ? <span>⭐️</span> : <span>☆</span>}
            </div>
            <div className="QuoteContent">
              <p className="Author">
                {quote.author}
              </p>
              <p className="QuoteText">
                {" "}
                <Link to={`/quotes/${quote.id}`} className="QuoteLink">
                  "{quote.quote}"
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;
