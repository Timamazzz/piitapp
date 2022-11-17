import React, {useRef} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Modalize} from 'react-native-modalize';
import NewsList from '../../../components/Project/NewsList/NewList';
import {backgroundImage, blurImage} from '../../../constants/images';
import styles from './styles';
import {globalStyles, SCREEN_HEIGHT} from '../../../constants/globalStyles';

const NewsScreen = () => {
  const modalizeRef = useRef<Modalize>(null);
  modalizeRef.current?.open();
  return (
    <View style={globalStyles.flexOne}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerItem}>
          <Text style={globalStyles.grayText}>Новости</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerItem}>
          <Text style={globalStyles.grayText}>...</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={styles.images}
        source={backgroundImage}
        resizeMode="cover">
        <View style={styles.welcomeContainer}>
          <Text style={globalStyles.grayText}>Добро пожаловать @nickname</Text>
        </View>
        <View style={styles.preModalViewContainer}>
          <Modalize
            ref={modalizeRef}
            modalStyle={styles.modalStyle}
            alwaysOpen={SCREEN_HEIGHT * 0.8}
            modalHeight={SCREEN_HEIGHT * 0.9}
            overlayStyle={styles.modalOverlay}>
            <ImageBackground
              style={styles.images}
              resizeMode="cover"
              source={backgroundImage}
              blurRadius={50}>
              <ImageBackground
                style={[globalStyles.flexOne, styles.zIndexOne]}
                resizeMode="cover"
                source={blurImage}
                imageStyle={styles.opacityBlur}>
                <NewsList />
              </ImageBackground>
            </ImageBackground>
          </Modalize>
        </View>
      </ImageBackground>
    </View>
  );
};
export default NewsScreen;
