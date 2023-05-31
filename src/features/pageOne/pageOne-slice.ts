import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface PageOneState {
  name: string;
  phone: number | null;
  email: string;
}

const initialState: PageOneState = {
  name: '',
  phone: null,
  email: '',
};

export const pageOneSlice = createSlice({
  name: 'pageOne',
  initialState,
  reducers: {
    pageOneSave: (state, { payload }: PayloadAction<PageOneState>) => {
     return state = payload;
    },
  },
});

export const { pageOneSave } = pageOneSlice.actions;

export const pageOneSelect = (state: RootState) => state.pageOne

export default pageOneSlice.reducer;
