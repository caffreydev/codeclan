// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type InitialState = {
//   value: PairModalState;
// };

// type PairModalState = {
//   isOpen: boolean;
//   page: 'profile' | 'kata';
// };

// const initialState = {
//   value: { isOpen: false, page: 'profile' } as PairModalState,
// } as InitialState;

// export const pairModalState = createSlice({
//   name: 'pairModalState',
//   initialState,
//   reducers: {
//     changePage: (state, action: PayloadAction<'profile' | 'kata'>) => {
//       return { ...state.value, value: { page: action.payload } };
//     },
//     closePairModal: () => {
//       return { value: { isOpen: false } };
//     },
//     openPairModal: () => {
//       return {
//         value: { isOpen: true },
//       };
//     },
//     openProfilePair: () => {
//       return {
//         value: {
//           isOpen: true,
//           page: 'profile'
//         }
//       }
//     },
//     openKataPair: () => {
//       return {
//         value: {
//           isOpen: true,
//           page: 'kata'
//         }
//       }
//     }
//   },
// });

// export const { changePage, closePairModal, openPairModal, openProfilePair, openKataPair } = pairModalState.actions;
// export default pairModalState.reducer;
