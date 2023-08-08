import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  value: ProfilePairState;
};

type ProfilePairState = {
  isOpen: boolean;
};

const initialState = {
  value: { isOpen: false } as ProfilePairState,
} as InitialState;

export const profilePairState = createSlice({
  name: 'authModalState',
  initialState,
  reducers: {
    closeProfilePair: () => {
      return initialState;
    },
    openProfilePair: (state) => {
      return {
        value: {
          isOpen: true,
        },
      };
    },
  },
});

export const { closeProfilePair, openProfilePair } = profilePairState.actions;
export default profilePairState.reducer;
