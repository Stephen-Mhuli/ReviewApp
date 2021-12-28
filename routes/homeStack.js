import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails"

const screens = {
    Home: {
        screen: Home
    },
    Reviews: {
        screen: ReviewDetails
    }
}

const homeStack = createStackNavigator(screens);
export default createAppContainer(homeStack);