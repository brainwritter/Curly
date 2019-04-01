import { init, RematchRootState } from '@rematch/core';
import * as models from 'Setup/Models';
import persistor from 'Setup/Persist';
import { reactNavigationPlugin } from 'App/Navigation/NavigatorSetup';

export const store = init({
  models,
  plugins: [persistor, reactNavigationPlugin],
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
