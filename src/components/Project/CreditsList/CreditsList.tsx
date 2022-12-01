import React from 'react';
import {FlatList} from 'react-native';
import CreditsListItem from './CreditsListItem/CreditsListItem';

const data = [
  {
    id: '1',
    mark: '5',
    subject: 'ИТ',
  },
  {
    id: '2',
    mark: 'Зачет',
    subject: 'Типис',
  },
  {
    id: '3',
    mark: 'Не зачет',
    subject: 'Пи',
  },
];

const _renderItem = ({item, index}: {item: any; index: number}) => {
  return <CreditsListItem data={item} />;
};

const CreditsList = () => {
  return <FlatList data={data} renderItem={_renderItem} />;
};

export default CreditsList;
