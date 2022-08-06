import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationNavigator from './src/navigation/ApplicationNavigator';
import RootStore from './src/redux/store/RootStore';
import { Provider } from "react-redux";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={RootStore}>
        <ApplicationNavigator />
      </Provider>
    </NavigationContainer>
  );
}
