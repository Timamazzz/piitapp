import React from 'react';
import {FlatList} from 'react-native';
import ScheduleListItem from './ScheduleListItem/ScheduleListItem';

const data = [
  {
    id: '1',
    subject: 'ИТ',
    place: 'Гук 402',
    teacher: 'ФИО',
    time: '10:00-20:00',
  },
  {
    id: '2',
    subject: 'ИТ',
    place: 'Гук 402',
    teacher: 'ФИО',
    time: '10:00-20:00',
  },
  {
    id: '3',
    subject: 'ИТ',
    place: 'Гук 402',
    teacher: 'ФИО',
    time: '10:00-20:00',
  },
  {
    id: '4',
    subject: 'ИТ',
    place: 'Гук 402',
    teacher: 'ФИО',
    time: '10:00-20:00',
  },
  {
    id: '5',
    subject: 'ИТ',
    place: 'Гук 402',
    teacher: 'ФИО',
    time: '10:00-20:00',
  },
];

const _renderItem = ({item, index}: {item: any; index: number}) => {
  return <ScheduleListItem data={item} />;
};

const ScheduleList = () => {
  return <FlatList data={data} renderItem={_renderItem} />;
};

export default ScheduleList;
