import { configureStore } from '@reduxjs/toolkit';
import authModalStateReducer from './features/auth-slice';
import profilePairReducer from './features/profilePair-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    authModalStateReducer,
    profilePairReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
