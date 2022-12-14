import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/globalStyles';
import {colors} from '../../../constants/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  Image: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.4,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  container: {
    borderWidth: 1,
    borderColor: colors.white,
    width: SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    borderRadius: 20,
  },
  containerItem: {
    padding: 15,
  },
});

export default styles;
