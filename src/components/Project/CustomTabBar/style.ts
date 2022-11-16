import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/globalStyles';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.075,
    paddingHorizontal: SCREEN_WIDTH * 0.15,
    justifyContent: 'space-between',
  },
  tabBarButton: {
    justifyContent: 'center',
  },
  tabBarIcon: {
    height: SCREEN_WIDTH * 0.07,
    width: SCREEN_WIDTH * 0.07,
  },
  disabledTab: {
    opacity: 0.5,
    width: SCREEN_WIDTH * 0.07,
  },
  isFocusTab: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBorder: {
    borderTopWidth: 2,
  },
});

export default styles;
