import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeScreen from 'features/home';
import NotificationIcon from '../../../../assets/svg/NotificationIcon';
import NotificationScreen from 'features/notification';
import SettingScreen from 'features/settings';
import SettingIcon from '../../../../assets/svg/SettingIcon';
import LogoIcon from '../../../../assets/svg/LogoIcon';
import Typography from 'components/UI/Typography';
import { createStackNavigator } from '@react-navigation/stack';
import EventScreen from 'features/events';
import ScreenOptionNavigation from 'navigation/NavigatorBar';
const styles = StyleSheet.create({
    icon: {
        resizeMode: 'contain',
        flex: 1,
        alignSelf: 'center',
        marginTop: 8,
        marginBottom: 6,
    },
});

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={HomeScreen.SCREEN_NAME} component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name={EventScreen.SCREEN_NAME} component={EventScreen} options={EventScreen.navigationOptions} />
        </Stack.Navigator>
    )
}
const BottomTabNav = ({ navigation }: { navigation: any }) => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                style: {
                    backgroundColor: '#f9f9f9',
                    padding: 5
                },
                activeTintColor: '#3c50af',
            }}
        >
            <BottomTab.Screen
                name={HomeScreen.SCREEN_NAME}
                component={HomeStack}
                options={{
                    tabBarLabel: ({ focused, color, }) => <Typography style={{ fontSize: 11, color: color }}>{"Studio"}</Typography>,
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <LogoIcon size={size} fill={color} />
                        );
                    },

                }}

            />
            <BottomTab.Screen
                name={NotificationScreen.SCREEN_NAME}
                component={NotificationScreen}
                options={{
                    tabBarLabel: ({ focused, color, }) => <Typography style={{ fontSize: 11, color: color }}>{"Notification"}</Typography>,
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <NotificationIcon size={size} fill={color} />
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name={SettingScreen.SCREEN_NAME}
                component={SettingScreen}
                options={{
                    tabBarLabel: ({ focused, color, }) => <Typography style={{ fontSize: 11, color: color }}>{"Settings"}</Typography>,
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <SettingIcon size={size} fill={color} />
                        );
                    },
                }}

            />
        </BottomTab.Navigator>
    );
};

BottomTabNav.SCREEN_NAME = 'BottomTabNav';
BottomTabNav.navigationOptions = {
    headerShown: false,
};

export default BottomTabNav;
