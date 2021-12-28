import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }){

    // const pressHandler = () => {
    //     navigation.pop();
    // }

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
            <Text style={globalStyles.review}>{ navigation.getParam('body') }</Text>
            <Text style={globalStyles.review}>{ navigation.getParam('rating') }</Text>
        </View>
    );
}
