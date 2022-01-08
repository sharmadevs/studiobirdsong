import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageSourcePropType, } from 'react-native';

interface ProfileImageProps {
    imageUrl: ImageSourcePropType;
}

const ProfileImage = ({ imageUrl }: ProfileImageProps) => {
    return (
        <View >
            <Image source={imageUrl} style={{ height: 100, width: 100, borderRadius: 50,alignSelf:"center" }} />
        </View>
    );
};

export default ProfileImage;

const styles = StyleSheet.create({
    container: {}
});
