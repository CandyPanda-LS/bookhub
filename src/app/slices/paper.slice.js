import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPapers } from '../actions/paper.action';

const filterPapers = (paperList, searchWord) => {
  let newArray = paperList.filter(function (el) {
    return el.subject.toLowerCase().includes(searchWord.toLowerCase());
  });
  return newArray;
};

const paperSlice = createSlice({
  name: 'paper',
  initialState: {
    papers: [],
    status: 'success',
    filterPapers: [],
  },
  reducers: {
    filteringPapers: (state, action) => {
      state.filterPapers = filterPapers(state.papers, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllPapers.fulfilled, (state, action) => {
      // Add user to the state array
      state.filterPapers = action.payload;
      state.papers = action.payload;
      state.status = 'success';
    });
  },
});

export const { filteringPapers } = paperSlice.actions;

export default paperSlice.reducer;
