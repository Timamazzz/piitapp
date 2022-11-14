import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREENS} from '../screenName';
import CreditsScreen from '../../screens/Credits/CreditscScreen/CreditsScreen';
import NewsScreen from '../../screens/News/NewsScreen/NewsScreen';
import ScheduleScreen from '../../screens/Schedule/ScheduleScreen/ScheduleScreen';

// @ts-ignore
export const CommonNavigator = () => {
  const CommonStack = createStackNavigator();

  return (
    <>
      <CommonStack.Navigator initialRouteName="App">
        <CommonStack.Screen
          name={SCREENS.News}
          component={NewsScreen}
          options={{headerShown: false}}
        />
        <CommonStack.Screen
          name={SCREENS.Credits}
          component={CreditsScreen}
          options={{headerShown: false}}
        />
        <CommonStack.Screen
          name={SCREENS.Schedule}
          component={ScheduleScreen}
          options={{headerShown: false}}
        />
      </CommonStack.Navigator>
    </>
  );
};

export default CommonNavigator;
