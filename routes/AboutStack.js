import { createStackNavigator } from "react-navigation-stack";
import About from "../pages/Home";


const screens = {
    About: {
        screen: About,
        navigationOptions: {
            headerTintColor: '#444',
            title: 'About Review App',
            headerStyle: { backgroundColor: 'lightgrey', height: 90 }
        }
    }
    
}

const AboutStack = createStackNavigator(screens);
export default AboutStack;