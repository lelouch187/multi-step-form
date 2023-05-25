import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'


interface SideState {
  currentStep: number
}

const initialState: SideState = {
   currentStep: 1,
}

export const sideSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
   changeStep: (state, {payload}:PayloadAction<number>)=> {
      state.currentStep = payload
   }
  },
})

export const { changeStep } = sideSlice.actions

export const selectChangeStep = (state: RootState) => state.side.currentStep

export default sideSlice.reducer