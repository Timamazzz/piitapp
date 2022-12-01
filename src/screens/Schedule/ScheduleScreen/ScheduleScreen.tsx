import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../../constants/globalStyles';
import styles from './styles';
import ScheduleList from '../../../components/Project/ScheduleList/ScheduleList';

const ScheduleScreen = () => {
  return (
    <View style={globalStyles.flexOne}>
      <View style={styles.header}>
        <View>
          <Text
            style={[
              globalStyles.grayText,
              globalStyles.bigText,
              globalStyles.boldText,
            ]}>
            Расписание
          </Text>
          <Text style={[globalStyles.grayText]}>ИТ-999</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={[globalStyles.grayText, {fontSize: 24}]}>...</Text>
          <Text style={[globalStyles.grayText]}>Числитель</Text>
        </View>
      </View>
      <ScheduleList />
    </View>
  );
};
export default ScheduleScreen;
