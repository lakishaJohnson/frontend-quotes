import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function QuoteEdit() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [quote, setQoute] = useState({
        author:"",
        quote:"",
        category:"",
        source:"",
        year_quoted:"",
        language:"",
        is_favorite:false,
    })

    const addQuote = (updatedQuote) => {
        axios
        .put(`${API}/quotes/${id}`, updatedQuote)
        .then(() => {
            navigate(`/quotes/${id}`)
        })
        .catch((e) => console.warn("catch", e))
    };

    const handleCheckboxChange = () => {
        setQoute({...quote, is_favorite: !quote.is_favorite})
    }

    const handleTextChange = (event) => {
        setQoute({...quote, [event.target.id] : event.target.value})
    }

    useEffect(() => {
        axios
        .get(`${API}/quotes/${id}`)
        .then((res) => setQoute(res.data))
        .catch((e) => navigate('/not-found'))
    },[id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        addQuote(quote, id);
    }

    return (
        <>
        <article className="Quote-Details">
          <div className="card-container">
            <div className="home-link">
                <Link className="home-btn" to='/'><div className="home-home">Home &nbsp;&nbsp;&nbsp;| </div> </Link>&nbsp;&nbsp;
                <Link className="home-btn" to='/quotes'><div className="home-new">Index &nbsp;&nbsp; |</div></Link>&nbsp;&nbsp;
                <Link className="home-btn" to='/quotes/new'><div className="home-new">New &nbsp;&nbsp;</div></Link>
            </div>
          <div className="card">
    <div className="New-edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          value={quote.author}
          type="text"
          onChange={handleTextChange}
          placeholder="author"
          required
        />
        <label htmlFor="quote">Quote:</label>
        <input
          id="quote"
          type="text"
          required
          value={quote.quote}
          placeholder="quote"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={quote.category}
          placeholder="educational, inspirational ..."
          onChange={handleTextChange}
          required
        />
        <label htmlFor="source">Source:</label>
        <input
          id="source"
          type="text"
          name="source"
          value={quote.source}
          placeholder="..."
          onChange={handleTextChange}
          required
        />
        <label htmlFor="year_quoted">Year:</label>
        <input
          id="year_quoted"
          type="text"
          name="year_quoted"
          value={quote.year_quoted}
          placeholder="date"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="language">Language:</label>
        <input
          id="language"
          type="text"
          name="language"
          value={quote.language}
          placeholder="language"
          onChange={handleTextChange}
          required
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
    </>
  
    );
}

export default QuoteEdit;