import React, {useRef} from 'react';
import {Image, Text, View} from 'react-native';
import CreditsList from '../../../components/Project/CreditsList/CreditsList';
import {
  globalStyles,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../../constants/globalStyles';
import styles from './styles';
import {Modalize} from 'react-native-modalize';
import {fingerIcon} from '../../../constants/images';
import {colors} from '../../../constants/colors';

const CreditsScreen = () => {
  const modalizeRef = useRef<Modalize>(null);
  const openModal = () => {
    modalizeRef.current?.open();
  };
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
      <CreditsList openModal={openModal} />
      <Modalize
        ref={modalizeRef}
        modalHeight={SCREEN_HEIGHT * 0.3}
        modalStyle={{backgroundColor: colors.newWhite}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{
              width: SCREEN_WIDTH * 0.2,
              height: SCREEN_WIDTH * 0.3,
              resizeMode: 'contain',
            }}
            source={fingerIcon}
          />
          <Text style={[globalStyles.blackText]}>Подтверждение оценки</Text>
        </View>
      </Modalize>
    </View>
  );
};
export default CreditsScreen;
