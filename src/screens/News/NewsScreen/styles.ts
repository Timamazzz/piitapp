import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    minWidth: 40,
    height: 40,
  },
  headerButton: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  welcomeContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
  },
  preModalViewContainer: {
    flex: 1,
    borderTopRightRadius: 50,
    overflow: 'hidden',
    borderTopLeftRadius: 50,
  },
  modalStyle: {
    borderTopRightRadius: 50,
    overflow: 'hidden',
    borderTopLeftRadius: 50,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  modalOverlay: { backgroundColor: colors.transparent },
  zIndexOne: {
    zIndex: 1,
  },
  opacityBlur: {
    opacity: 0.4,
  },
});

export default styles;
