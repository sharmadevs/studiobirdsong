import { SCREEN_WIDTH } from "libs/size";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    eventSectionBox:{
        marginVertical:20
    },
    eventId:{
        backgroundColor:'#f5f7fb',
        padding:15
    },
    alreadyText:{
        textAlign:"center",
    },
    textInput:{
        borderColor:'#ddd',
        borderWidth:1,
        backgroundColor:'#f3f3f3',padding:7,borderRadius:20
    },
    followButton:{
        marginTop: 13,
        marginLeft:10,
        color:'blue'
    },
    heading:{
        marginHorizontal:20,
        marginTop:15,
        fontSize:18,
        marginBottom:8
    },
    clientSection:{ 
          marginHorizontal:5,
          position:'relative',
          height:300,
          width:SCREEN_WIDTH*0.97
    },
    clientImg:{},
    clientImgBg:{ height: 300, width: SCREEN_WIDTH*0.97,borderRadius:5,overflow:"hidden"},
    backgroundVideo:{
     
        height:300,
        width:SCREEN_WIDTH*0.97
    }
});

export default styles;