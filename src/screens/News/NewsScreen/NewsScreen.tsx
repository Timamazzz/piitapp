import React, { useRef } from 'react';
import {ImageBackground, Text, View} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import NewsList from '../../../components/Project/NewsList/NewList';
import { backgroundImage, blurImage } from '../../../constants/images';
import styles from './styles';


const NewsScreen = () => {
    const modalizeRef = useRef<Modalize>(null);
    modalizeRef.current?.open();
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
                <View style={{backgroundColor:'#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 50, padding: 10, paddingHorizontal: 20, position: 'absolute', top: 80, alignSelf: 'center',}}>
                    <Text style={{color: '#646E82',  fontSize: 20}}>Добро пожаловать @nickname</Text>
                </View>
                <View style={{flex: 1, borderTopRightRadius: 50, overflow: 'hidden', borderTopLeftRadius:50}}>
                <Modalize 
                    ref={modalizeRef}
                    modalStyle={{borderTopRightRadius: 50, overflow: 'hidden', borderTopLeftRadius:50, backgroundColor: 'rgba(255,255,255,0)'}}
                    alwaysOpen={500}
                    modalHeight={580}
                    overlayStyle={{backgroundColor: 'rgba(255,255,255,0)'}}
                    >
                    <ImageBackground style={styles.images} resizeMode="cover" source={backgroundImage} blurRadius={50}>
                        <ImageBackground style={{flex: 1, zIndex: 1}} resizeMode="cover" source={blurImage}  imageStyle={{opacity: .4}}>
                            <NewsList></NewsList>
                        </ImageBackground>
                    </ImageBackground>
           </Modalize>
                </View>
        </ImageBackground>
    </View>
  );
};
export default NewsScreen;
