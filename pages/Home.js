import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }){

    // const pressHandle = ()=>{
    //     navigation.navigate('Reviews');
    // }

    const [reviews, setReviews] = useState([
        { title: 'James Gordon, GCPD Hero cop ever', rating: 5, body: 'He brings justice for innocent people', key: '1' },
        { title: 'Bruce Wayne, Upcoming Batman', rating: 4, body: 'He is a rich kid whose parents died', key: '2' },
        { title: 'Ed Nygma,a doctor and the Riddler', rating: 3, body: 'He is a criminal mastermind with killing techniques', key: '3' },
      ]);

    return(
        <View style={globalStyles.container}>
                <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('Reviews', item)}>
                        <Text style={globalStyles.titleText}> { item.title } </Text>
                    </TouchableOpacity>
                )}
                />
        </View>
    );
}
