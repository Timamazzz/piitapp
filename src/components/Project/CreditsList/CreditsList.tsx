import React, {FC} from 'react';
import {FlatList} from 'react-native';
import CreditsListItem from './CreditsListItem/CreditsListItem';
import {creditsData} from '../../../constants/database';

type ICreditsListProps = {
  openModal: (credit: any) => void;
};

const CreditsList: FC<ICreditsListProps> = ({
  openModal = () => {},
  ...props
}) => {
  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return <CreditsListItem data={item} openModal={openModal} />;
  };

  return <FlatList data={creditsData} renderItem={_renderItem} />;
};

export default CreditsList;
