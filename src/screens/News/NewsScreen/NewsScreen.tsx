import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NewsList from '../../../components/Project/NewsList/NewList';
import { backgroundImage, blurImage } from '../../../constants/images';
import styles from './styles';


const NewsScreen = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', zIndex: 100, width: '100%', padding: 15}}>
            <TouchableOpacity style={{backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 50, padding: 10}}>
                <Text style={{color: '#646E82'}}>Новости</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 50, padding: 10}}>
                <Text style={{color: '#646E82'}}>...</Text>
            </TouchableOpacity>
        </View>
        <ImageBackground style={styles.images} source={backgroundImage} resizeMode="cover">
            <View style={{flex: 1, marginTop: 100,  borderTopRightRadius: 50, overflow: 'hidden', borderTopLeftRadius:50}}>
                <ImageBackground style={styles.images} resizeMode="cover" source={backgroundImage} blurRadius={50}>
                    <ImageBackground style={{flex: 1, zIndex: 1}} resizeMode="cover" source={blurImage}  imageStyle={{opacity: .4}}>
                        <NewsList></NewsList>
                    </ImageBackground>
                </ImageBackground>
            </View>
        </ImageBackground>
    </View>
  );
};
export default NewsScreen;
