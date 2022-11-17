import {Dimensions, StyleSheet} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  flexOne: {flex: 1},
  grayText: {color: '#646E82'},
});
