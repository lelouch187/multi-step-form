import { configureStore } from '@reduxjs/toolkit';
import sideReducer from './features/sidebar/side-slice';
import pageOneReducer from './features/pageOne/pageOne-slice';
import pageTwoReducer from './features/pageTwo/pageTwo-slice';
import pageThreeReducer from './features/pageThree/pageThree-slice';

export const store = configureStore({
  reducer: {
    side: sideReducer,
    pageOne: pageOneReducer,
    pageTwo: pageTwoReducer,
    pageThree: pageThreeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
