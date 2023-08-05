'use client';

import { Children } from 'react';
import { store } from './Store';
import { Provider } from 'react-redux';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
