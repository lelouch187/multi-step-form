import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';

export interface ICard {
  img: string;
  title: string;
  cost: number;
}

interface PageTwoState {
  Cards: ICard[];
  activeCard: number;
  checkedStatus: boolean;
}

const initialState: PageTwoState = {
  Cards: [
    { img: arcade as unknown as string, title: 'Arcade', cost: 9 },
    { img: advanced as unknown as string, title: 'Advanced', cost: 12 },
    { img: pro as unknown as string, title: 'Pro', cost: 3 },
  ],
  activeCard: 9,
  checkedStatus: false,
};

export const pageTwoSlice = createSlice({
  name: 'pageTwo',
  initialState,
  reducers: {
    changeActiveCard: (state, { payload }: PayloadAction<number>) => {
      state.activeCard = payload;
    },
    changeStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.checkedStatus = payload;
    },
  },
});

export const { changeActiveCard, changeStatus } = pageTwoSlice.actions;

export const selectActiveCardInfo = (state: RootState) => state.pageTwo.Cards.filter(card=>card.cost===state.pageTwo.activeCard);
export const selectCards = (state: RootState) => state.pageTwo.Cards;
export const selectPageTwo = (state: RootState) => state.pageTwo;
export const selectActiveCard = (state: RootState) => state.pageTwo.activeCard;
export const selectCheckedStatus = (state: RootState) => state.pageTwo.checkedStatus;

export default pageTwoSlice.reducer;
