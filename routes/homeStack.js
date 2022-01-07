import { createStackNavigator } from "react-navigation-stack";
import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails"
import Header from "./shared/Header";
import React from 'react';
import { createAppContainer } from 'react-navigation';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:({ navigation })=> {
            return{
            headerTintColor: '#444',
            headerTitle: () => <Header navigation={navigation} title='Gamezone'/>,
            headerStyle: { backgroundColor: 'lightgrey', height: 90 }
            }
        }
    },
    Reviews: {
        screen: ReviewDetails,
        navigationOptions: {
            headerTintColor: '#444',
            title: 'Review Details',
            headerStyle: { backgroundColor: 'lightgrey', height: 90 }
        }
    }
}

const homeStack = createStackNavigator(screens);
export default createAppContainer(homeStack) ;
