import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails"

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTintColor: '#444',
            title: 'Home',
            headerStyle: { backgroundColor: 'lightgrey', height: 90 }
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
export default createAppContainer(homeStack);