import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../BooksAPI";

const initialState = {
  loading: false,
  books: [],
  error: "",
};

export const fetchBooks = createAsyncThunk("home/fetchBooks", async () => {
  const response = await getAll();
  if (Array.isArray(response)) return response;
  else throw new Error("Nothing to show, try another search");
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload;
      state.error = "";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default homeSlice.reducer;
