import React, { useState } from "react";
import "./styles.css";

const booksData = {
  Fiction: [
    { name: "Harry Potter Series", ratings: "5/5" },
    { name: "The Chronicles of Narnia", ratings: "4.5/5" }
  ],
  Productivity: [
    { name: "The Atomic Habits", ratings: "4.7/5" },
    { name: "Deep work", ratings: "4.5/5" }
  ],
  Programming: [{ name: "The Grokking Algorithm", ratings: "4.5/5" }],
  Javascript: [
    { name: "Eloquent JavaScript", ratings: "4/5" },
    { name: "You Don't Know JS", ratings: "3.5/5" }
  ]
};

export default function App() {
  const [books, setBooks] = useState("Fiction");
  function clickHandler(genre) {
    setBooks(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation 📚</h1>
      <small>Here are some my favorite books! Hope You will like!</small>

      <div>
        {Object.keys(booksData).map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#bfdbfe",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div>
        <ul>
          {booksData[books].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                textAlign: "left"
              }}
            >
              <div style={{ fontSize: "bolder" }}>{book.name}</div>
              <div style={{ fontSize: "smaller" }}>{book.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
