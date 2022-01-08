import BackIcon from '../../assets/svg/BackIcon';
import RootNavigator from 'libs/navigation/RootNavigation';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Size from 'utils/size/size';
interface ScreenOptionNavigation {
    showBackButton: boolean;
    showProfileIcon?: boolean;
    headerLeft?: React.ReactNode;
    headerRight?: React.ReactNode;
}

const ScreenOptionNavigation = (props?: ScreenOptionNavigation) => {
    const { showBackButton = false, showProfileIcon = false, headerLeft, headerRight } =
        props || {};
    return {
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTitleAlign:'center',
        headerLeft: () => {
            if (showBackButton) {
                return (
                    <TouchableOpacity
                        style={{
                            height: Size.squareButton.size,
                            width: Size.squareButton.size,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    <BackIcon size={18} />
                    </TouchableOpacity>
                );
            } else if (headerLeft) {
                return headerLeft;
            }
            return null;
        },
        headerTitle: () => {},
        headerRight: () => {
            if (showProfileIcon) {
                return (
                    <TouchableOpacity
                        style={{
                            height: Size.squareButton.size,
                            width: Size.squareButton.size,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    </TouchableOpacity>
                );
            } else if (headerRight) {
                return headerRight;
            }
            return null;
        },
    };
};

export default ScreenOptionNavigation;
