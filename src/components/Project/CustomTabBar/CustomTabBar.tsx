import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {SCREENS} from '../../../navigation/screenName';
import styles from './style';
import {calendarActiveIcon, catalogueActiveIcon, newsActiveIcon, orderActiveIcon, userActiveIcon} from '../../../constants/images';

interface ICustomTabBar {
  state: any;
  descriptors: any;
  navigation: any;
  [x: string]: any;
}

const CustomTabBar: FC<ICustomTabBar> = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        let iconName;
        switch (route.name) {
          case SCREENS.News:
            iconName = newsActiveIcon;
            break;
          case SCREENS.Credits:
            iconName = orderActiveIcon;
            break;
          case SCREENS.Schedule:
            iconName = calendarActiveIcon;
            break;
          case SCREENS.Profile:
            iconName = userActiveIcon;
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabBarButton, isFocused && styles.topBorder]}>
            <View style={[isFocused ? styles.isFocusTab : styles.disabledTab]}>
              <Image
                source={iconName}
                style={[styles.tabBarIcon]}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default CustomTabBar;
