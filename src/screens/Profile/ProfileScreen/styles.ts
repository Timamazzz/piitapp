import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { SCREEN_WIDTH } from '../../../constants/globalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    padding: 15,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    width: 40,
    height: 40,
  },
  headerButton: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  images: {
    flex: 1,
    justifyContent: 'center',
  },
  modalStyle: {
    borderTopRightRadius: 50,
    overflow: 'hidden',
    borderTopLeftRadius: 50,
  },
  modalContent: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  avatar: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    borderRadius: 60,
    resizeMode: 'contain',
    borderWidth: 5,
    borderColor: colors.black,
  },
  list: {
    width: SCREEN_WIDTH,
    paddingHorizontal: '10%',
  },
  listItem: {
    marginTop: '4.5%',
    padding: '5%',
    borderRadius: 25,
    backgroundColor: colors.white
  },
  preModalViewContainer: {
    flex: 1,
    borderTopRightRadius: 50,
    overflow: 'hidden',
    borderTopLeftRadius: 50,
  },
  zIndexOne: {
    zIndex: 1,
  },
  opacityBlur: {
    opacity: 0.4,
  },
});

export default styles;
