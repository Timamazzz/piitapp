import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {globalStyles, SCREEN_WIDTH} from '../../../../constants/globalStyles';
import {fingerIcon} from '../../../../constants/images';

interface INewsListItem {
  data: any;
}

const CreditsListItem: FC<INewsListItem> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.grayText, globalStyles.bigText]}>
        {data.subject}
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={[
            globalStyles.grayText,
            globalStyles.boldText,
            {marginRight: 5},
          ]}>
          Оценка:
        </Text>
        <Text
          style={[
            globalStyles.grayText,
            globalStyles.boldText,
            {color: '#FD251E', marginRight: 5},
          ]}>
          {data.mark}
        </Text>
        <Image
          style={{
            width: SCREEN_WIDTH * 0.1,
            height: SCREEN_WIDTH * 0.2,
            resizeMode: 'contain',
          }}
          source={fingerIcon}
        />
      </View>
    </View>
  );
};

export default CreditsListItem;
