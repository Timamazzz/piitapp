import React, {useRef} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {globalStyles} from '../../../constants/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {avatar, backgroundImage} from '../../../constants/images';
import {Modalize} from 'react-native-modalize';
import styles from './styles';

// @ts-ignore
const ProfileScreen = ({navigation}) => {
  const modalizeRef = useRef<Modalize>(null);
  modalizeRef.current?.open();
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/*<View style={styles.header}>
        <TouchableOpacity style={styles.headerItem}>
          <Image source={backButton} style={styles.headerButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <Image source={dots} style={styles.headerButton} />
        </TouchableOpacity>
  </View>*/}
      <View style={{marginTop: '40%'}}>
        <View
          style={{
            position: 'absolute',
            top: -55,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}>
          <Image style={styles.avatar} source={avatar} />
          <Text
            style={[
              globalStyles.blackText,
              globalStyles.boldText,
              globalStyles.bigText,
            ]}>
            Имя пользователя
          </Text>
          <Text style={[globalStyles.grayText]}>@nickname</Text>
        </View>
        <View style={[styles.modalStyle]}>
          <View style={[styles.list, {marginTop: 130}]}>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                navigation.navigate('CreditsScreen');
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                  position: 'absolute',
                  bottom: -10,
                }}
              />
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  {fontSize: 14},
                ]}>
                Моя сессия
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                navigation.navigate('DebtScreen');
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                  position: 'absolute',
                  bottom: -10,
                }}
              />
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  {fontSize: 14},
                ]}>
                Оформление хвостовок
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                navigation.navigate('');
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'red',
                  position: 'absolute',
                  bottom: -10,
                }}
              />
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  {fontSize: 14},
                ]}>
                Оплата
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default ProfileScreen;
