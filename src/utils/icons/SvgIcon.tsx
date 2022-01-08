import { View } from 'react-native';
import React from 'react';

interface SvgIconProps {
    children: any;
    size?: number;
}

export function SvgIcon(props: SvgIconProps) {
    const height = props.size ? props.size : 40;
    const width = props.size ? props.size : 40;
    return (
        <View
            {...props}
            style={{
                height,
                width,
            }}>
            {props.children}
        </View>
    );
}
