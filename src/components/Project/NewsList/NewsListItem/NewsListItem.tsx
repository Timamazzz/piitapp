import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

interface INewsListItem {
  data: any;
}

const NewsListItem: FC<INewsListItem> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={data.avatar} style={styles.avatar} />
        <View>
          <Text style={{color: 'black'}}>{data.username}</Text>
          <Text style={{color: 'black'}}>{data.nickname}</Text>
        </View>
      </View>
      <View>
        <Image source={{uri: data.image}} style={styles.newsImage} />
      </View>
    </View>
  );
};

export default NewsListItem;
