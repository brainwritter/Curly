import { init, RematchRootState } from '@rematch/core';
import * as models from './Models';
import persistor from './Persist';
import navReducer from '../Navigation/Reducer'

export const store = init({
  models,
  redux: {
    reducers: {
      navReducer
    }
  },
  plugins: [persistor]
});

export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type iRootState = RematchRootState<typeof models>;
