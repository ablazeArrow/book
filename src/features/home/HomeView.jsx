import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";
import ShelfView from "../shelf/ShelfView";
import "../../icons/add.svg";

function HomeView() {
  return (
    <div>
      <h1 className="header">Shelves</h1>
      <ShelfView shelf="currentlyReading" ownShelf="Currently Reading" />
      <ShelfView shelf="wantToRead" ownShelf="Want To Read" />
      <ShelfView shelf="read" ownShelf="Read" />
      <Link to="/search">
        <svg
          className="add"
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </Link>
    </div>
  );
}

export default HomeView;
