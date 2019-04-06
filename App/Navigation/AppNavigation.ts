import { createStackNavigator, createAppContainer } from 'react-navigation';

import CounterScreen from '../Domains/User/Screens';
import TextStyleScreen from '../Domains/TextStyle/Screens';

const AppNav = createStackNavigator({
  CounterScreen,
  TextStyleScreen,
});

export default createAppContainer(AppNav);
