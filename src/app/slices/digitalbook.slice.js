import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks, saveDigitalBook } from '../actions/digitalbook.action';
import { toast } from 'react-toastify';

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
    filteringDigitalBooks: (state, action) => {
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
    builder.addCase(saveDigitalBook.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = [...state.books, action.payload];
      state.filterBooks = [...state.books, action.payload];
      state.status = 'success';
      toast.success('Saved successfully');
    });
  },
});

export const { getBookById, filteringDigitalBooks } = digitalBookSlice.actions;

export default digitalBookSlice.reducer;
