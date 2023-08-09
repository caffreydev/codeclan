import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: CurrentKataState;
};

type CurrentKataState = {
  kata: string;
};

const initialState = {
  value: { kata: '' } as CurrentKataState,
} as InitialState;

export const currentKataState = createSlice({
  name: 'authModalState',
  initialState,
  reducers: {
    setCurrentKata: (state, action: PayloadAction) => {
      return {
        value: {
          kata: action.payload,
        },
      };
    },
  },
});

export const { setCurrentKata } = currentKataState.actions;
export default currentKataState.reducer;
