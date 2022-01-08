import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, View, StyleSheet } from 'react-native';
import Typography from '../Typography';
import { CommonCss } from 'libs/commonCss/CommonCss';

interface CustomHeaderProps {
    headerTitle: string;
    navigation?: StackNavigationProp<any>;
    backIcon?: boolean;
    headerHeight?: number | any;
    marginTop?: number | any;
}

const CustomHeader = ({ headerTitle, navigation, headerHeight, marginTop }: CustomHeaderProps) => {
    return (
        <>
            <View style={[styles.container, { height: headerHeight / 3, marginTop: marginTop / 3, }]}>
                <Typography style={styles.headerTitle}>{headerTitle}</Typography>
            </View>
        </>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        ...CommonCss.ml20,
        ...CommonCss.mb20
    },
});
