import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
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
            <Text style={globalStyles.home}></Text>
        </View>
    );
}
