import FacebookIcon from '../../../../assets/svg/FacebookIcon';
import AppleIcon from '../../../../assets/svg/AppleIcon';
import { CommonCss } from 'libs/commonCss/CommonCss';
import * as React from 'react';
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';
import ButtonStudio, { ButtonType } from '../ButtonStudio';
import Typography, { FontFamily } from '../Typography';

interface SignInModalProps {
    isVisible: boolean;
    onClose: Function;
    //action: (method: string) => void;
    title: string;
    subTitle: string;
}

const SignInModal = ({ isVisible, onClose, title, subTitle }: SignInModalProps) => {
    return (
        <>
            <View style={styles.centerdViewModal}>
                <Modal animationType="fade"
                    transparent={true}
                    visible={isVisible}
                    style={{ margin: 0, position: 'relative' }}
                    onDismiss={() => onClose()}
                    onRequestClose={() => onClose()}

                >
                    <TouchableWithoutFeedback onPress={() => onClose()}>
                        <View style={styles.modalOverlay} >

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                <View style={styles.modalView}>
                                    <View>
                                        <View style={[styles.centerdView, CommonCss.mt20]}>
                                            <View style={styles.titleBox}>
                                                <Typography style={[styles.title]} fontFamily={FontFamily.CINZELBOLD}>{title}</Typography>
                                            </View>
                                            <View style={styles.subTitleBox}>
                                                <Typography style={styles.subTitle}>{subTitle}</Typography>
                                            </View>
                                        </View>
                                        <View style={{ ...CommonCss.mb20 }}>
                                            <ButtonStudio
                                                buttonStyle={{ marginTop: 17, borderRadius: 5, marginHorizontal: 25 }}
                                                label={'Sign in with Facebook'}
                                                onPress={() => {
                                                }}
                                                variant={ButtonType.SOCIAL}
                                                textStyle={{ fontSize: 14 }}
                                            />

                                            <ButtonStudio
                                                buttonStyle={{ marginTop: 17, borderRadius: 5, marginHorizontal: 25 }}
                                                icon={<AppleIcon size={16} />}
                                                label={'Sign in with Apple'}
                                                onPress={() => {
                                                }}
                                                variant={ButtonType.SOCIAL}
                                                textStyle={{ fontSize: 14 }}
                                            />

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </>
    );
};

export default SignInModal;

const styles = StyleSheet.create({
    centerdViewModal: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        elevation: 5,
        ...CommonCss.p15,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        ...CommonCss.pt10,
    },
    centerdView: {
    },
    titleBox: {
        ...CommonCss.pb20
    },
    title: {
        color: 'black',
        textAlign: 'center',
    },
    subTitleBox: { ...CommonCss.pb20 },
    subTitle: { textAlign: 'center', },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});
