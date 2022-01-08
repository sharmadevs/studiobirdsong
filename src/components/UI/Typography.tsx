import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
export enum FontFamily {
    CINZELBOLD = 'Cinzel-Bold',
    CINZELBLACK = 'Cinzel-Black',
    CINZELEXTRABOLD = 'Cinzel-ExtraBold',
    CINZELREGULAR = 'Cinzel-Regular',
    CINZELLIIGHT = 'Cinzel-Light',
    CINZELMEDIUM = 'Cinzel-Medium'
}

interface RoundedButtonProps {
    children: React.ReactNode;
    onPress?: Function;
    style?: StyleProp<TextStyle>;
    fontFamily?: string;
    numberOfLines?: number
}

const Typography: React.FC<RoundedButtonProps> = ({ onPress, children, style, fontFamily = FontFamily.CINZELREGULAR, numberOfLines }: RoundedButtonProps) => {
    return onPress ? (
        <Text
            style={[style, { ...{ fontFamily } }]}
            onPress={() => (onPress ? onPress() : null)}
        >
            {children}
        </Text>
    ) : (
        <Text numberOfLines={numberOfLines} style={[style, { ...{ fontFamily } }]}>{children}</Text>
    );
};

export default Typography;
