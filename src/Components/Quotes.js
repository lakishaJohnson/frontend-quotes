import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../quotes.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const API = process.env.REACT_APP_API_URL;

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const queryParams = useQuery();
  const orderParam = queryParams.get("order");
  const [sortOrder, setSortOrder] = useState(orderParam || "");
  const [category, setCategory] = useState(queryParams.get("category") || "");
  const [isFavorite] = useState(queryParams.get("is_favorite") || "");
  const location = useLocation();

  const updateUrl = (newParams) => {
    queryParams.forEach((value, key) => {
      queryParams.delete(key);
    });

    for (const [key, value] of Object.entries(newParams)) {
      if (value) {
        queryParams.set(key, value);
      }
    }

    const newSearch = queryParams.toString();
    const newUrl = newSearch ? `?${newSearch}` : "/quotes";
    window.history.replaceState(null, "", newUrl);
  };

  const handleSortOrder = (newSortOrder) => {
    setSortOrder(newSortOrder);
    queryParams.set("order", newSortOrder);
    updateUrl({ ...queryParams, order: newSortOrder });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    updateUrl({ ...queryParams, category: newCategory });
  };

  useEffect(() => {
    console.log("Quotes:", quotes);
    const params = {
      order: sortOrder,
      category: category !== "" ? category : undefined,
      is_favorite: isFavorite,
    };

    axios
      .get(`${API}/quotes`, { params })
      .then((response) => setQuotes(response.data))
      .catch((error) => {
        console.warn("catch", error);
      });// eslint-disable-next-line
  }, [sortOrder, category, isFavorite, location.search]);

  const toggleFavorite = (id) => {
    let toggledFavoriteValue;

    const updatedQuotes = quotes.map((quote) => {
      if (quote.id === id) {
        toggledFavoriteValue = !quote.is_favorite;
        return { ...quote, is_favorite: toggledFavoriteValue };
      }
      return quote;
    });
    setQuotes(updatedQuotes);

    axios
      .put(`${API}/quotes/${id}`, {
        is_favorite: toggledFavoriteValue,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.warn("Unable to update favorite status:", error);
      });
  };

  return (
    <div>
      <div className="home-link">

        <Link className="home-btn" to="/">
          <div className="home-home">Home &nbsp;&nbsp;&nbsp;| </div>{" "}
        </Link>
        &nbsp;&nbsp;
        <Link className="home-btn" to="/quotes/new">
          <div className="home-new">New &nbsp;&nbsp;</div>
        </Link>
      </div>
      <div className="index-background">
        <div className="background"></div>

      </div>
      <div>
        <select
          value={sortOrder}
          onChange={(e) => handleSortOrder(e.target.value)}
          style={{ padding: "15px", marginLeft: "10px", marginTop: "10px" }}
        >
          <option value="">All Quotes</option>
          <option value="asc">Sort Asc</option>
          <option value="desc">Sort Desc</option>
          <option value="is_favorite">Sort by Favorites</option>
        </select>
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: "15px", marginLeft: "10px", marginTop: "10px" }}
        >
          <option value="">All Categories</option>
          <option value="LOVE">Love</option>
          <option value="INSPIRATIONAL">Inspirational</option>
          <option value="DEATH">Death</option>
          <option value="FUNNY">Funny</option>
          <option value="LIFE">Life</option>
          <option value="HOPE">Hope</option>
          <option value="STRENGTH">Strength</option>
          <option value="FRIENDSHIP">Friendship</option>
          <option value="TRUST">Trust</option>
          <option value="DETERMINATION">Determination</option>
          <option value="RELIGION">Religion</option>
          <option value="MOTIVATION">Motivation</option>
          <option value="WISDOM">Wisdom</option>
          <option value="PROVERB">Proverb</option>
        </select>
      </div>

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
                <p className="Author">{quote.author}</p>
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
    </div>
  );
}

export default Quotes;
