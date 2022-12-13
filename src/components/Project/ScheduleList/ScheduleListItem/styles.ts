import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0F5',
    borderRadius: 30,
    padding: '3%',
    margin: '2.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#BAC3CF',
    borderRightColor: '#CAD1DA',
    borderTopColor: colors.white,
    borderLeftColor: colors.white,
    borderWidth: 1,
  },
});

export default styles;
