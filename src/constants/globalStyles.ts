import {Dimensions, StyleSheet} from 'react-native';
import {colors} from './colors';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  flexOne: {flex: 1},
  grayText: {color: '#646E82'},
  blackText: {color: colors.black},
  boldText: {fontWeight: 'bold'},
  bigText: {fontSize: 24},
});
