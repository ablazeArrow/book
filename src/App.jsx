import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { SearchView } from "./features/search/SearchView";
import HomeView from "./features/home/HomeView";
import BookView from "./features/book/BookView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/book" element={<BookView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
