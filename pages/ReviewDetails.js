import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../routes/shared/Card';

export default function ReviewDetails({ navigation }){

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
            <Text style={globalStyles.review}>{ navigation.getParam('body') }</Text>
            <View style={styles.rating}>
                <Text>Gamezone rating: </Text>
                <Image 
                  source={require('../assets/')}
                />
            </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        
    }
})
