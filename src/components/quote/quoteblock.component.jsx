import React from "react";
import "./quoteblock.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/button.component";
const QuoteBlock = ({ handleClick, text, author, colors }) => {
  return (
    <div className="container">
      <div className="quote">
        <FontAwesomeIcon icon={faQuoteLeft} />
        &nbsp;&nbsp;&nbsp;{text}
      </div>
      <div className="author">
        - {author}
        <div className="button">
          <Button onClick={handleClick} colors={colors}>
            New quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
