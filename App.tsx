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
import BottomTabNavigator from './src/navigation/BottomTabNavigator/BottomTabNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomTabNavigator />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;
