import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface PageTwoState {
  activeCard: number;
}

const initialState: PageTwoState = {
  activeCard: 9,
};

export const pageTwoSlice = createSlice({
  name: 'pageTwo',
  initialState,
  reducers: {
    changeActiveCard: (state, { payload }: PayloadAction<number>) => {
      state.activeCard = payload;
    },
  },
});

export const { changeActiveCard } = pageTwoSlice.actions;

export const activeCard = (state: RootState) => state.pageTwo.activeCard;

export default pageTwoSlice.reducer;
