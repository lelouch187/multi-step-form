import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface PageThreeState {
  items: IPickItem[];
}
export interface IPickItem {
  title: string;
  subtitle: string;
  cost: number;
  checked: boolean;
}

const initialState: PageThreeState = {
  items: [
    { title: 'Online service', subtitle: 'Access to multiplayer games', cost: 1, checked: false },
    { title: 'Larger storage', subtitle: 'Extra 1TB of cloud save', cost: 2, checked: false },
    {
      title: 'Customizable profile',
      subtitle: 'Custom theme on your profile',
      cost: 2,
      checked: false,
    },
  ],
};

export const pageThreeSlice = createSlice({
  name: 'pageThree',
  initialState,
  reducers: {
    chengeCheck:(state, {payload}:PayloadAction<number>)=>{
      state.items[payload].checked=!state.items[payload].checked
    }
  },
});

export const { chengeCheck } = pageThreeSlice.actions;

export const pickItemsSelect = (state: RootState) => state.pageThree.items;


export default pageThreeSlice.reducer;
