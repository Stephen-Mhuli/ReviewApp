import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){

    // const pressHandler = () => {
    //     navigation.pop();
    // }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.home}>Review Details Page</Text>
            {/* <Button title='Go back Home' onPress={pressHandler}/> */}
        </View>
    );
}
