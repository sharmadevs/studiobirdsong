import React, { useState } from 'react';
import ArrowRightIcon from '../../../assets/svg/ArrowRightIcon';
import Typography, { FontFamily } from 'components/UI/Typography';
import { CommonCss } from 'libs/commonCss/CommonCss';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import SignInModal from 'components/UI/SignInModal';
interface SettingScreenProps { }


const SettingScreen = (props: SettingScreenProps) => {
  const [isLoginShow,setIsLogin] = useState<boolean>(false)
  const renderMenu = () => (
    <><View style={styles.menus}>
      <View style={styles.menuItemLeft}>
        <Typography style={styles.leftTitle}>Slideshow Interval</Typography>
      </View>
      <View style={styles.menuItemRight}>
        <Typography style={styles.rightTitle}>2 Seconds</Typography>
      </View>
    </View><View style={[styles.menus, { marginBottom: 0, }, CommonCss.mt10]}>
        <View style={styles.menuItemLeft}>
          <Typography style={styles.leftTitle}>App Version</Typography>
        </View>
        <View style={styles.menuItemRight}>
          <Typography style={styles.rightTitle}>{DeviceInfo.getVersion()}</Typography>
        </View>
      </View><View style={[styles.menus, { marginTop: 0 }]}>
        <View style={styles.menuItemLeft}>
          <Typography style={styles.leftTitle}>Privacy Policy</Typography>
        </View>
        <View style={styles.menuItemRight}>
          <TouchableOpacity style={{ justifyContent: "flex-end", alignItems: 'flex-end' }}>
            <ArrowRightIcon fill={'#000'} size={18} />
          </TouchableOpacity>
        </View>
      </View><View style={[styles.menus, { marginTop: 0 }]}>
        <View style={styles.menuItemLeft}>
          <Typography onPress={()=>setIsLogin(true)} style={[styles.leftTitle, { textAlign: 'center' }]}>Login</Typography>
        </View>
      </View></>
  )

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingBox}>
          <Typography style={styles.heading} fontFamily={FontFamily.CINZELEXTRABOLD}>Settings</Typography>
        </View>
        {renderMenu()}
      </View>
      {
        isLoginShow && <SignInModal isVisible={isLoginShow} title="Login" subTitle="This will allow you to create new events and upload photos" onClose={()=>setIsLogin(false)} />
      }
    </>
  );
};
SettingScreen.SCREEN_NAME = "SettingScreen";
export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    ...CommonCss.flex1,
    backgroundColor: '#f9f9f9'
  },
  headingBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  heading: {
    fontSize: 40,
    textTransform: 'capitalize'
  },
  //@ts-ignore
  menus: {
    backgroundColor: 'white',
    ...CommonCss.mt40,
    ...CommonCss.mb20,
    ...CommonCss.displayFlex,
    ...CommonCss.p15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  menuItemLeft: {
    ...CommonCss.flex1,
  },
  leftTitle: {},
  menuItemRight: {
    ...CommonCss.flex1,
    justifyContent: 'flex-end',
  },
  rightTitle: {
    textAlign: 'right'
  },
});
