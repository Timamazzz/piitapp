import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { backgroundImage } from "../../../constants/images";
import NewsListItem from "./NewsListItem/NewsListItem";

const data = [
    {
        id: '1',
        avatar: backgroundImage, 
        username: 'Иван Иванов', 
        nickname: '@nickname',
        image: 'https://www.bstu.ru/shared/attachments/220543'
    },
    {
        id: '2',
        avatar: backgroundImage, 
        username: 'Иван Иванов', 
        nickname: '@nickname',
        image: 'https://scientificrussia.ru/images/e/10ce-full.jpg'
    },
    {
        id: '3',
        avatar: backgroundImage, 
        username: 'Иван Иванов', 
        nickname: '@nickname',
        image: 'https://bgtu-nvrsk.ru/uploads/5fbcd0838cb3cdoc1724348512/5fbcd08430154.jpg'
    },
    {
        id: '4',
        avatar: backgroundImage, 
        username: 'Иван Иванов', 
        nickname: '@nickname',
        image: 'https://bgtu-nvrsk.ru/uploads/5fbcd0838cb3cdoc1724348512/5fbcd08430154.jpg'
    },
    {
        id: '5',
        avatar: backgroundImage, 
        username: 'Иван Иванов', 
        nickname: '@nickname',
        image: 'https://bgtu-nvrsk.ru/uploads/5fbcd0838cb3cdoc1724348512/5fbcd08430154.jpg'
    },
    {
        id: '6',
        avatar: backgroundImage, 
        username: 'Иван Иванов', 
        nickname: '@nickname',
        image: 'https://bgtu-nvrsk.ru/uploads/5fbcd0838cb3cdoc1724348512/5fbcd08430154.jpg'
    }
]

const _renderItem = ({item, index}:{item:any, index:number}) => {
    return (
        <NewsListItem
            data={item}
        />
    )
}

const NewsList = () => {
   return (
    <FlatList 
        data={data} 
        renderItem={_renderItem}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
    />
   )
};

export default NewsList;