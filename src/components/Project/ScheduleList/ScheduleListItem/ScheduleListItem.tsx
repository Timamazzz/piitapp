import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {globalStyles} from '../../../../constants/globalStyles';

interface INewsListItem {
  data: any;
}

const ScheduleListItem: FC<INewsListItem> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.grayText, globalStyles.bigText]}>
        {data.subject}
      </Text>
      <View>
        <Text style={[globalStyles.grayText, globalStyles.boldText]}>
          {data.place}
        </Text>
        <Text style={[globalStyles.grayText]}>Преподаватель:</Text>
        <Text style={[globalStyles.grayText]}>{data.teacher}</Text>
      </View>
      <View>
        <Text style={[globalStyles.grayText, globalStyles.boldText]}>
          {data.time}
        </Text>
        <Text style={[globalStyles.grayText]}>До конца занятия</Text>
        <Text style={[globalStyles.grayText]}>осталось:</Text>
      </View>
    </View>
  );
};

export default ScheduleListItem;
