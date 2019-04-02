import { AppRegistry } from 'react-native';
import App from './App/Setup/App';
import { name as appName } from './app.json';
import './App/Setup/Reactotron';

AppRegistry.registerComponent(appName, () => App);
