import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface SideState {
  name: string;
  phone: number | null;
  email: string;
}

const initialState: SideState = {
  name: '',
  phone: null,
  email: '',
};

export const pageOneSlice = createSlice({
  name: 'pageOne',
  initialState,
  reducers: {
    pageOneSave: (state, { payload }: PayloadAction<SideState>) => {
     return state = payload;
    },
  },
});

export const { pageOneSave } = pageOneSlice.actions;

export const pageOne = (state: RootState) => state.pageOne

export default pageOneSlice.reducer;
