import * as React from 'react';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigation from '../Navigation/AppNavigation'
import { Provider } from 'react-redux';
import { store as rootStore } from './Store';

const persistor = getPersistor();
export default class Curly extends React.PureComponent {
  public render() {
    return (
      <Provider store={rootStore}>
        <PersistGate persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
