import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface PageTwoState {
  activeCard: number;
  checkedStatus:boolean;
}

const initialState: PageTwoState = {
  activeCard: 9,
  checkedStatus:false
};

export const pageTwoSlice = createSlice({
  name: 'pageTwo',
  initialState,
  reducers: {
    changeActiveCard: (state, { payload }: PayloadAction<number>) => {
      state.activeCard = payload;
    },
    changeStatus:(state, { payload }: PayloadAction<boolean>) => {
      state.checkedStatus = payload;
    },
  },
});

export const { changeActiveCard, changeStatus } = pageTwoSlice.actions;

export const pageTwoSelect = (state: RootState) => state.pageTwo;
export const activeCardSelect = (state: RootState) => state.pageTwo.activeCard;
export const checkedStatusSelect = (state: RootState) => state.pageTwo.checkedStatus;

export default pageTwoSlice.reducer;
