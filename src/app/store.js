import { configureStore} from '@reduxjs/toolkit';
import paperReducer from './slices/paper.slice';

export const store = configureStore({
  reducer: {
    paper:paperReducer
  },
});