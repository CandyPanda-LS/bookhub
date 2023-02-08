import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks } from '../actions/digitalbook.action';

const getBookByIdFunc = (bookList, bookId) => {
  const result = bookList.filter(function (el) {
    return el.id === bookId;
  });

  return result ? result[0] : null; // or undefined
};

const filterBooks = (bookList, searchWord) => {
  let newArray = bookList.filter(function (el) {
    return el.title.toLowerCase().includes(searchWord.toLowerCase());
  });
  return newArray;
};

const digitalBookSlice = createSlice({
  name: 'digitalbook',
  initialState: {
    books: [],
    book: null,
    status: 'success',
    filterBooks: [],
  },
  reducers: {
    getBookById: (state, action) => {
      state.book = getBookByIdFunc(state.books, action.payload);
    },
    filteringBooks: (state, action) => {
      console.log(filterBooks(state.books, action.payload));
      state.filterBooks = filterBooks(state.books, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = action.payload;
      state.filterBooks = action.payload;
      state.status = 'success';
    });
  },
});

export const { getBookById, filteringBooks } = digitalBookSlice.actions;

export default digitalBookSlice.reducer;
