/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import store from './src/redux/Store';
import {RootSiblingParent} from 'react-native-root-siblings';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
