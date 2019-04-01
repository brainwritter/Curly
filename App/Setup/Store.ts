import { init, RematchRootState } from '@rematch/core';
import * as models from './Models';
import persistor from './Persist';
import { reactNavigationPlugin } from '../Navigation/NavigatorSetup';

export const store = init({
  models,
  plugins: [persistor, reactNavigationPlugin],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
