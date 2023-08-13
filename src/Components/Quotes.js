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
  const booleanParam = queryParams.get("is_favorite");
  const [sortOrder, setSortOrder] = useState(orderParam || "asc");

  const handleSortOrderChange = () => {
    // Toggle the sorting order
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    // Update the URL with the new sorting order
    queryParams.set("order", newSortOrder);
    const newSearch = queryParams.toString();
    window.history.replaceState(null, "", `?${newSearch}`);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "") {
      // If the user selects the "Category" option, show all quotes
      setQuotes([]); // Clear the quotes
      return;
    }
  
    // Filter the quotes based on the selected category
    const filteredQuotes = quotes.filter((quote) => quote.category === selectedCategory);
    setQuotes(filteredQuotes);
  };

  useEffect(() => {
    const apiUrl = `${API}/quotes`;
    const params = {
      is_favorite: booleanParam,
      order: sortOrder,
    };

    axios
      .get(apiUrl, {
        params: params,
      })
      .then((response) => setQuotes(response.data))
      .catch((error) => console.warn("catch", error));
  }, [booleanParam, sortOrder]);

  const toggleFavorite = (id) => {
    const updatedQuotes = quotes.map((quote) =>
      quote.id === id ? { ...quote, is_favorite: !quote.is_favorite } : quote
    );
    setQuotes(updatedQuotes);
  };

  return (
    <div>
      <div className="home-link">
                <Link className="home-btn" to='/'><div className="home-home">Home &nbsp;&nbsp;&nbsp;| </div> </Link>&nbsp;&nbsp;
                <Link className="home-btn" to='/quotes/new'><div className="home-new">New &nbsp;&nbsp;</div></Link>
            </div> 
      <div className="index-select-btn">
        <div className="sort-btn" onClick={handleSortOrderChange}>
        {sortOrder === "asc" ? "Sort Des" : "Sort Asc"}
      </div>
      <select onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="LOVE">Love</option>
        <option value="DEATH">Death</option>
        <option value="LIFE">Life</option>
        <option value="FUNNY">Funny</option>
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

