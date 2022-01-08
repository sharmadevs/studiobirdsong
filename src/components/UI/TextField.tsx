import React from 'react';
import {View, TextInput, StyleSheet, Platform, TextInputProps} from 'react-native';
import { FontFamily } from './Typography';

const styles = StyleSheet.create({
    defaultStyles: {
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
    }
});


const TextField = (props: TextInputProps) => {
    return (
        <View style={[styles.defaultStyles, {flex: 1, width: '100%', height: '100%'}]}>
            <TextInput
                {...props}
                style={[props.style, {fontFamily: FontFamily.CINZELREGULAR}]}
            />
        </View>
    );
};
export default TextField;

