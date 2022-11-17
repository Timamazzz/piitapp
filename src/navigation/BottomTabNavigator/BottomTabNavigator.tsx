import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../screenName';
import NewsScreen from '../../screens/News/NewsScreen/NewsScreen';
import CreditsScreen from '../../screens/Credits/CreditscScreen/CreditsScreen';
import ScheduleScreen from '../../screens/Schedule/ScheduleScreen/ScheduleScreen';
import CustomTabBar from '../../components/Project/CustomTabBar/CustomTabBar';
import ProfileScreen from '../../screens/Profile/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();
const tabScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarAllowFontScaling: true,
  tabBarHideOnKeyboard: true,
};

/*// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NewsStack(props: any) {
  return (
    <Tab.Navigator initialRouteName={SCREENS.News}>
      <Tab.Screen
        name={SCREENS.News}
        component={NewsScreen}
        options={tabScreenOptions}
      />
    </Tab.Navigator>
  );
}*/
function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={SCREENS.News}
        component={NewsScreen}
        options={tabScreenOptions}
      />
      <Tab.Screen
        name={SCREENS.Credits}
        component={CreditsScreen}
        options={tabScreenOptions}
      />
      <Tab.Screen
        name={SCREENS.Schedule}
        component={ScheduleScreen}
        options={tabScreenOptions}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={ProfileScreen}
        options={tabScreenOptions}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;