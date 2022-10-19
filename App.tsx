/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// @ts-ignore
import type {Node} from 'react';
import CommonNavigator from './src/navigation/CommonNavigator/CommonNavigator';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <CommonNavigator />
    </NavigationContainer>
  );
};

export default App;
