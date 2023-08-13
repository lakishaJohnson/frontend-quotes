import { React, useState } from "react";
import QuoteDetails from "../Components/QuoteDetails";

function Show() {
  const [quoteCategory, setQuoteCategory] = useState("");

  return (
    <div className="Show">
      <div>
        <h2
          className="category"
          style={{
            fontFamily: "Fantasy",
            fontSize: "36px",
          }}
        >
          {quoteCategory}
        </h2>
      </div>
      <QuoteDetails onCategoryChange={setQuoteCategory} />
    </div>
  );
}

export default Show;
