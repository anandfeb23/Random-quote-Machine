import React, { useState } from "react";
import quotes from "./quotes.json";
import "./QuoteMachine.css";

const QuoteMachine = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const { quote, author } = quotes[quoteIndex];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
  };

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" — ${author}`
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">
        <p>{quote}</p>
      </div>
      <div id="author" className="quote-author">
        <p>{author}</p>
      </div>
      <button
        id="new-quote"
        className="new-quote-button"
        onClick={getRandomQuote}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        className="tweet-quote-link"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote}" — ${author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteMachine;
