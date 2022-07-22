import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../BooksAPI";
import { fetchBooks } from "../home/homeSlice";

import "../../icons/arrow-drop-down.svg";
import "../../styles.css";

function ShelPickerView({ book, pick }) {
  const [shelf, setShelf] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (shelf) {
      update(book, shelf).then((data) => console.log(data));
      dispatch(fetchBooks());
    }
  }, [shelf]);

  return (
    <div>
      <div className="book-shelf-changer">
        <select
          onChange={(e) => setShelf(e.target.value)}
          defaultValue={book.shelf}
        >
          <option value="none" disabled>
            {(pick && "Move To...") || "Add To..."}
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          {pick && <option value="none">None</option>}
        </select>
      </div>
    </div>
  );
}

export default ShelPickerView;
