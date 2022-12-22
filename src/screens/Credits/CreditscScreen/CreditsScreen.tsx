import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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
import {creditsData, mark} from '../../../constants/database';
import {ICredit} from '../../../constants/types';
import RadioButtonsGroup from '../../../components/Project/Radio/RadioButtonsGroup/RadioButtonsGroup';
import {RadioButtonProps} from '../../../components/Project/Radio/types';

const CreditsScreen = () => {
  const modalizeRef = useRef<Modalize>(null);
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
    {
      id: '1',
      leftLabel: 'Зачет',
      value: 'Зачет',
    },
    {
      id: '2',
      leftLabel: 'Не зачет',
      value: 'Не зачет',
    },
    {
      id: '3',
      leftLabel: '2',
      value: '2',
    },
    {
      id: '4',
      leftLabel: '3',
      value: '3',
    },
    {
      id: '5',
      leftLabel: '4',
      value: '4',
    },
    {
      id: '6',
      leftLabel: '5',
      value: '5',
    },
  ]);
  const [modalCredit, setModalCredit] = useState<ICredit>({
    id: 1,
    mark: '2',
    subject: '',
    height: 1,
    isConfirmed: false,
  });
  const openModal = (credit: ICredit) => {
    setModalCredit(credit);
    console.log(credit);
    modalizeRef.current?.open();
  };
  const confirmCredit = () => {
    /*    creditsData.map(element => {
      if (element.id === modalCredit.id) {
        element.isConfirmed = true;
      }
    });*/
    console.log(radioButtons);
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
          <Text style={{color: '#FD251E'}}>Средний балл: {mark()}</Text>
        </View>
      </View>
      <CreditsList openModal={openModal} />
      <Modalize
        ref={modalizeRef}
        modalHeight={
          modalCredit.isConfirmed ? SCREEN_HEIGHT * 0.3 : SCREEN_HEIGHT * 0.5
        }
        modalStyle={{backgroundColor: colors.newWhite}}>
        {!modalCredit.isConfirmed ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={[
                globalStyles.blackText,
                globalStyles.bigText,
                globalStyles.boldText,
              ]}>
              {modalCredit.subject}
            </Text>
            <RadioButtonsGroup
              containerStyle={{
                height: SCREEN_HEIGHT * 0.45 * 0.45,
                marginTop: 15,
              }}
              radioButtons={radioButtons}
            />
            <TouchableOpacity onPress={() => confirmCredit()}>
              <Image
                style={{
                  width: SCREEN_WIDTH * 0.15,
                  height: SCREEN_WIDTH * 0.2,
                  resizeMode: 'contain',
                }}
                source={fingerIcon}
              />
            </TouchableOpacity>
            <Text style={[globalStyles.blackText]}>Подтверждение оценки</Text>
          </View>
        ) : (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: SCREEN_HEIGHT * 0.25,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={[globalStyles.grayText, globalStyles.bigText]}>
                {modalCredit.subject}:
              </Text>
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  globalStyles.bigText,
                  {color: '#FD251EFF'},
                ]}>
                {modalCredit.mark}
              </Text>
            </View>
          </View>
        )}
      </Modalize>
    </View>
  );
};
export default CreditsScreen;
