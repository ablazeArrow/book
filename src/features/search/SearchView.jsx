import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookView from "../book/BookView";
import { fetchQueriedBooks } from "./searchSlice";
import "../../styles.css";

export const SearchView = () => {
  const [query, setQuery] = useState("");

  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQueriedBooks(query));
  }, [query]);

  const loading = search.loading && <h2>Loading...</h2>;
  const errorMsg =
    !search.loading && search.error ? (
      <h2 className="error">Error: {search.error} </h2>
    ) : null;
  const book =
    !search.loading && search.books.length ? (
      <ul className="queried-book-list">
        {search.books.map((book) => (
          <BookView book={book} key={book.id} />
        ))}
      </ul>
    ) : null;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link to="/">
        <div className="go-home-link"></div>
      </Link>

      {loading || errorMsg || book}
    </div>
  );
};
