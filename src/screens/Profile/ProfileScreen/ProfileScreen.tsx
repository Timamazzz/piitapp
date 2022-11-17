import React, {useRef} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {globalStyles, SCREEN_HEIGHT} from '../../../constants/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  avatar,
  backButton,
  backgroundImage,
  dots,
} from '../../../constants/images';
import {Modalize} from 'react-native-modalize';
import styles from './styles';

const ProfileScreen = () => {
  const modalizeRef = useRef<Modalize>(null);
  modalizeRef.current?.open();
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerItem}>
          <Image source={backButton} style={styles.headerButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <Image source={dots} style={styles.headerButton} />
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        modalStyle={styles.modalStyle}
        alwaysOpen={SCREEN_HEIGHT * 0.8}
        modalHeight={SCREEN_HEIGHT * 0.8}
        withOverlay={false}
        panGestureEnabled={false}>
        <View style={styles.modalContent}>
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
          <View style={styles.list}>
            <TouchableOpacity style={styles.listItem}>
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  globalStyles.bigText,
                ]}>
                Аттестация
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  globalStyles.bigText,
                ]}>
                Моя сессия
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  globalStyles.bigText,
                ]}>
                Оформление хвостовок
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <Text
                style={[
                  globalStyles.grayText,
                  globalStyles.boldText,
                  globalStyles.bigText,
                ]}>
                Оплата
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    </ImageBackground>
  );
};
export default ProfileScreen;
