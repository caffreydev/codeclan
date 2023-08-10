import { configureStore } from '@reduxjs/toolkit';
import authModalStateReducer from './features/auth-slice';
// import pairModalStateReducer from './features/pair-slice';
// import currentKataReducer from './features/currentKata-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    authModalStateReducer,
    // pairModalStateReducer,
    // currentKataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
