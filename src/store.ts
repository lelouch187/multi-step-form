import { configureStore } from '@reduxjs/toolkit';
import sideReducer from './features/sidebar/side-slice';

export const store = configureStore({
  reducer: {
    side: sideReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
