import React from "react";
import { Link } from "react-router-dom";
import ShelPickerView from "../shelf/ShelPickerView";
import "../../styles.css";

function BookView({ book }) {
  const author =
    book.authors !== undefined
      ? book.authors.map((author, index) => <p key={index}>{author}</p>)
      : "Unknowen";

  return (
    <li className="wrapper">
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${
                book.imageLinks !== undefined
                  ? book.imageLinks.thumbnail
                  : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              })`,
            }}
          ></div>
          <ShelPickerView book={book} pick={book.shelf} />
        </div>

        <div className="book-details">
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{author}</div>
          <div className="book-stat">
            <p>
              <i className="fa-solid fa-star"> </i>
              {` ${
                book.averageRating !== undefined ? book.averageRating : "0"
              }`}
            </p>
            <p>
              <i className="fa-solid fa-clock"> </i>
              {` ${book.publishedDate}`}
            </p>

            <p>
              <i className="fa-solid fa-file"> </i>
              {` ${book.pageCount}`}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BookView;
// categories
// description
// pageCount
// title
// subtitle
// publishedDate
// ratingsCount
// averageRating
