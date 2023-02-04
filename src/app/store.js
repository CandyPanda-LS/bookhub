import { configureStore} from '@reduxjs/toolkit';
import paperReducer from './slices/paper.slice';
import digitalBookReducer from './slices/digitalbook.slice';
import audioBookReducer from './slices/audiobook.slice';

export const store = configureStore({
  reducer: {
    audiobook: audioBookReducer,
    digitalbook: digitalBookReducer,
    paper:paperReducer,
  },
});