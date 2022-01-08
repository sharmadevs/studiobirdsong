import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'features/home';
import ScreenOptionNavigation from './NavigatorBar';

const RootStackNavigator = createStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStackNavigator.Navigator mode="modal" initialRouteName="SplashScreen">
            <RootStackNavigator.Screen
                name={HomeScreen.SCREEN_NAME}
                component={HomeScreen}
                options={ScreenOptionNavigation({
                    showBackButton: true,
                })}
            />

        </RootStackNavigator.Navigator>
    );
};

export default RootStackScreen;
