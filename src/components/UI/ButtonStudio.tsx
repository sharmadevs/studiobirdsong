import React from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle, TouchableOpacity } from 'react-native';
import Typography from './Typography';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    elevation: {
        elevation: 10,
        shadowOpacity: 0.15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowRadius: 8,
    },
    label: {
        marginTop: 5,
        marginBottom: 5,
        fontSize: 15,
        color: '#0C0D34',
        letterSpacing: 1,
        fontWeight: '500',
        textAlign: 'center',
    },
    icon: {
        marginRight: 8,
    },
});

export enum ButtonType {
    DEFAULT,
    PRIMARY,
    SOCIAL,
}

interface ButtonProps {
    variant?: ButtonType;
    label: string;
    icon?: React.ReactNode;
    onPress: () => void;
    isElevated?: boolean;
    textColor?: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    isEnabled?: boolean
}

const ButtonStudio = ({
    variant = ButtonType.PRIMARY,
    label,
    onPress,
    icon,
    isElevated = false,
    textColor = 'white',
    textStyle,
    buttonStyle,
    isEnabled= true
}: ButtonProps) => {
    let backgroundColor;
    let borderWidth;
    const borderColor = 'white';
    switch (variant) {
        case ButtonType.PRIMARY:
            backgroundColor = '#121212';
            borderWidth = 0;
            break;
        default:
            backgroundColor = 'black';
            borderWidth = 1;
            break;
    }
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {  borderWidth, borderColor },
                {backgroundColor: isEnabled ? backgroundColor : '#8bc1d5'},
                isElevated && styles.elevation,
                buttonStyle,
            ]}
            disabled={!isEnabled}
            onPress={() =>isEnabled ? onPress() : null}
        >
            {icon && <View style={styles.icon}>{icon}</View>}
            <Typography style={[styles.label, textStyle, { color: textColor }]}>{label}</Typography>
        </TouchableOpacity>
    );
};

export default ButtonStudio;
