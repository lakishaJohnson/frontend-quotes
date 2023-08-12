import { React, useState } from "react";
import QuoteDetails from "../components/QuoteDetails";

function Show() {
  const [quoteCategory, setQuoteCategory] = useState("");

  return (
    <div className="Show">
      <div>
        <h2 className="category">{quoteCategory}</h2>
      </div>
      <QuoteDetails onCategoryChange={setQuoteCategory} />
    </div>
  );
}


export default Show;
