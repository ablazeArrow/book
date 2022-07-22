import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookView from "../book/BookView";
import { fetchBooks } from "../home/homeSlice";
import "../../styles.css";

function ShelfView({ shelf, ownShelf }) {
  const books = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const loading = books.loading && <h2>Loading...</h2>;
  const errorMsg =
    !books.loading && books.error ? <h2>Error: {books.error} </h2> : null;
  const book =
    !books.loading && books.books.length ? (
      <ul className="queried-book-list">
        {books.books.map(
          (book) =>
            book.shelf === shelf && <BookView book={book} key={book.id} move />
        )}
      </ul>
    ) : null;

  return (
    <div>
      <h2 className="header">{ownShelf}</h2>
      <div>{loading || errorMsg || book}</div>
    </div>
  );
}

export default ShelfView;
