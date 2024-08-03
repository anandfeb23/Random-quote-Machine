import React, { useState } from "react";
import quotes from "./quotes.json";
import "./QuoteMachine.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const QuoteMachine = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [buttonColor, setButtonColor] = useState("#000000");
  const [textColor, setTextColor] = useState("#000000");

  const { quote, author } = quotes[quoteIndex];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);
    setButtonColor(getRandomColor());
    setTextColor(getRandomColor());
    document.body.style.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const textStyle = {
    color: textColor,
    fontSize: "18px",
  };

  return (
    <div
      id="quote-box"
      className="quote-box"
      style={{
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
      }}
    >
      <div id="text" className="quote-text" style={textStyle}>
        <p>{quote}</p>
      </div>
      <div id="author" className="quote-author" style={textStyle}>
        <p>{author}</p>
      </div>
      <button
        id="new-quote"
        className="new-quote-button"
        onClick={getRandomQuote}
        style={buttonStyle}
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
        style={{ color: textColor }}
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteMachine;
