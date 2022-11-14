import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import NewsList from '../../../components/Project/NewsList/NewList';
import { backgroundImage, blurImage } from '../../../constants/images';
import styles from './styles';
import { BlurView } from "@react-native-community/blur";



const NewsScreen = () => {
  return (
    <View style={{flex: 1}}>
        <ImageBackground style={styles.images} source={backgroundImage} resizeMode="cover">
            <View style={{flex: 1, marginTop: 100,  borderTopRightRadius: 50, overflow: 'hidden', borderTopLeftRadius:50}}>
                <BlurView
                     style={styles.absolute}
                     blurType="light"
                     blurAmount={10}
                     reducedTransparencyFallbackColor="white"
                >
            </BlurView>
            
            <View style={{backgroundColor: 'white', marginTop: 50}}>
                <Text style={{color: 'black'}}>Hello</Text>
            </View>
                
            </View>
        </ImageBackground>
    </View>
  );
};
export default NewsScreen;
