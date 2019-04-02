import { createStackNavigator, createAppContainer } from 'react-navigation';

import CounterScreen from '../Domains/User/Screens';

const AppNav = createStackNavigator({
  CounterScreen
});

export default createAppContainer(AppNav);