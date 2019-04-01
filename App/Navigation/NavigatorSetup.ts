import createReactNavigationPlugin from '@rematch/react-navigation';
import Routes from './AppNavigation';

export const { Navigator, reactNavigationPlugin } = createReactNavigationPlugin({
  Routes,
  initialScreen: 'Login',
});
