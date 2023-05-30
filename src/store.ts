import { configureStore } from '@reduxjs/toolkit';
import sideReducer from './features/sidebar/side-slice';
import pageOneReducer from './features/pageOne/pageOne-slice';

export const store = configureStore({
  reducer: {
    side: sideReducer,
    pageOne:pageOneReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
