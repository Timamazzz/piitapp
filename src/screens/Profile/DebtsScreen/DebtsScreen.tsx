import React from 'react';
import {Image, Text, View} from 'react-native';
import {globalStyles} from '../../../constants/globalStyles';
import styles from './styles';
import {debtImage} from '../../../constants/images';
import {colors} from '../../../constants/colors';

const DebtsScreen = () => {
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
              Хвостовки
            </Text>
            <Text style={[globalStyles.grayText, {fontSize: 24}]}>...</Text>
          </View>
          <Text style={[globalStyles.grayText]}>ИТ-999</Text>
          <Text style={[globalStyles.grayText]}>Студент ФИО</Text>
        </View>
      </View>
      <Image source={debtImage} style={styles.Image} />
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <Text style={globalStyles.grayText}>ГРУППА</Text>
        </View>
        <View
          style={[
            styles.containerItem,
            {
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
            },
          ]}>
          <Text style={globalStyles.grayText}>ФИО</Text>
        </View>
        <View style={styles.containerItem}>
          <Text style={globalStyles.grayText}>ФИО ПРЕПОДАВАТЕЛЯ</Text>
        </View>
      </View>
    </View>
  );
};
export default DebtsScreen;
