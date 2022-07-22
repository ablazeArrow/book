import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { search } from "../../BooksAPI";

const initialState = {
  loading: false,
  books: [],
  error: "",
};

export const fetchQueriedBooks = createAsyncThunk(
  "search/fetchQueriedBooks",
  async (query) => {
    if (!query) return [];
    const response = await search(query);
    if (
      Object.keys(response).includes("books") &&
      Array.isArray(response.books)
    )
      return response.books;
    else throw new Error("Nothing to show, try another search");
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQueriedBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQueriedBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = "";
    });
    builder.addCase(fetchQueriedBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
