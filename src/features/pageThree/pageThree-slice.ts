import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface PageThreeState {
  items: Item[];
}
interface Item {
  title: string;
  subtitle: string;
  const: number;
  checked: boolean;
}

const initialState: PageThreeState = {
  items: [
    { title: 'Online service', subtitle: 'Access to multiplayer games', const: 1, checked: false },
    { title: 'Larger storage', subtitle: 'Extra 1TB of cloud save', const: 2, checked: false },
    {
      title: 'Customizable profile',
      subtitle: 'Custom theme on your profile',
      const: 2,
      checked: false,
    },
  ],
};

export const pageThreeSlice = createSlice({
  name: 'pageThree',
  initialState,
  reducers: {
    
  },
});

export const {  } = pageThreeSlice.actions;

export const pickItemsSelect = (state: RootState) => state.pageThree.items;


export default pageThreeSlice.reducer;
