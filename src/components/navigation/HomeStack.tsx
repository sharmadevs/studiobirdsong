import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNav from "./BottomTabNav";
import RootNavigator from "libs/navigation/RootNavigation";

const HomeStackNav = createStackNavigator();
const HomeStack = () => {
    return (
        <HomeStackNav.Navigator mode="card">
            <HomeStackNav.Screen
                name={BottomTabNav.SCREEN_NAME}
                component={BottomTabNav}
                options={BottomTabNav.navigationOptions}
            />
        </HomeStackNav.Navigator>
    );
};

HomeStack.SCREEN_NAME = 'HomeStack';
HomeStack.navigate = () => {
    RootNavigator.navigate(HomeStack.SCREEN_NAME);
};
export default HomeStack;