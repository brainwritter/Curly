import * as React from 'react';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store as rootStore } from './Store';

const persistor = getPersistor();

interface CurlyProps {
  children: React.ReactNode;
}

export default class Curly extends React.PureComponent<CurlyProps, any> {
  public render() {
    const { children } = this.props;
    return (
      <Provider store={rootStore}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    );
  }
}
