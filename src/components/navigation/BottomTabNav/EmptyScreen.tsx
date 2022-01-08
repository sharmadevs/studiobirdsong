import { Text, View } from 'react-native';
import React from 'react';

const EmptyScreen = () => {
    return(
        <View>
            <Text>Setting</Text>
        </View>
    );
};
EmptyScreen.SCREEN_NAME = "EmptyScreen";
export default EmptyScreen;
