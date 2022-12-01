import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../../constants/globalStyles';
import styles from './styles';
import CreditsList from '../../../components/Project/CreditsList/CreditsList';

const CreditsScreen = () => {
  return (
    <View style={globalStyles.flexOne}>
      <View style={styles.header}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              width: '79%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={[
                globalStyles.grayText,
                globalStyles.bigText,
                globalStyles.boldText,
              ]}>
              Зачёты
            </Text>
            <Text style={[globalStyles.grayText, {fontSize: 24}]}>...</Text>
          </View>
          <Text style={[globalStyles.grayText]}>ИТ-999</Text>
          <Text style={[globalStyles.grayText]}>Студент ФИО</Text>
        </View>
      </View>
      <CreditsList />
    </View>
  );
};
export default CreditsScreen;
