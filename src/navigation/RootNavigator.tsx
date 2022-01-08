import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'features/home';
import ScreenOptionNavigation from './NavigatorBar';
import HomeStack from 'components/navigation/HomeStack';

const RootStackNavigator = createStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStackNavigator.Navigator mode="modal" initialRouteName="SplashScreen">
            <RootStackNavigator.Screen
                name={HomeStack.SCREEN_NAME}
                component={HomeStack}
                options={{ headerShown: false }}
            />
          

        </RootStackNavigator.Navigator>
    );
};

export default RootStackScreen;
