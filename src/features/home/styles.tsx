import { CommonCss } from "libs/commonCss/CommonCss";
import { SCREEN_WIDTH } from "libs/size";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    eventSectionBox: {
        marginVertical: 20
    },
    eventId: {
        backgroundColor: '#f5f7fb',
        padding: 15
    },
    alreadyText: {
        textAlign: "center",
    },
    textInput: {
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#f3f3f3', padding: 7, borderRadius: 20
    },
    followButton: {
        marginTop: 13,
        marginLeft: 10,
        color: 'blue'
    },
    heading: {
        marginHorizontal: 20,
        marginTop: 15,
        fontSize: 18,
        marginBottom: 8
    },
    clientSection: {
        marginHorizontal: 5,
        position: 'relative',
        height: 300,
        width: SCREEN_WIDTH * 0.97,
        marginBottom: 40
    },
    clientImg: {
        position: 'relative'
    },
    clientImgBg: { height: 300, width: SCREEN_WIDTH * 0.97, borderRadius: 5, overflow: "hidden" },
    backgroundVideo: {
        height: 300,
        width: SCREEN_WIDTH * 0.97
    },
    socialIcon: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16 },
    formGroup: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
    vimeoIcon: { flex: 1, alignSelf: "center" },
    //@ts-ignore
    options: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#a52a2a38',
        ...CommonCss.displayFlex,
        ...CommonCss.p10
    },
    optionShare: { ...CommonCss.flex1, },
    //@ts-ignore
    labelWithIcon: {
        ...CommonCss.displayFlex,

    },
    optionMore: {
        ...CommonCss.flex1,
        alignItems: 'flex-end'
    },
});

export default styles;