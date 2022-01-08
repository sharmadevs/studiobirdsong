import * as React from 'react';
import FacebookIcon from '../../../assets/svg/FacebookIcon';
import ProfileImage from 'components/ProfileIcon';
import { IMAGES_URL } from 'libs/images';
import { SCREEN_WIDTH } from 'libs/size';
import {  View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import VimeoIcon from '../../../assets/svg/Vimeo';
import InstagramIcon from '../../../assets/svg/Instagram';
import PinterestIcon from '../../../assets/svg/PinterestIcon';
import Typography, { FontFamily } from 'components/UI/Typography';
import TextField from 'components/UI/TextField';
import Video from 'react-native-video';
import { CommonCss } from 'libs/commonCss/CommonCss';
import ShareIcon from '../../../assets/svg/ShareIcon';
import MoreIcon from '../../../assets/svg/MoreIcon';
import RootNavigator from 'libs/navigation/RootNavigation';
import EventScreen from 'features/events';
interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
    const videoRef = React.createRef<Video>()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
                <Typography style={styles.heading} fontFamily={FontFamily.CINZELBOLD} >Studio Birds Songs</Typography>
                <View style={{ position: "relative" }}>
                    <ImageBackground source={IMAGES_URL.HOMEBG} style={{ height: 200, width: SCREEN_WIDTH }} resizeMode={'center'} />
                    <View style={styles.socialIcon}>
                        <View style={styles.vimeoIcon}>
                            <VimeoIcon size={18} />
                        </View>
                        <View style={CommonCss.flex1}>
                            <FacebookIcon size={18} />
                        </View>
                        <View style={{ marginTop: -50 }}>
                            <ProfileImage imageUrl={IMAGES_URL.BK} />
                        </View>
                        <View style={[CommonCss.flex1, CommonCss.ml30]}>
                            <InstagramIcon size={18} />
                        </View>
                        <View style={[CommonCss.flex1, { alignSelf: "center", justifyContent: "flex-end", maxWidth: 40 }]}>
                            <PinterestIcon size={18} />
                        </View>

                    </View>
                </View>
                <View style={styles.eventSectionBox}>
                    <View style={styles.eventId}>
                        <Typography style={styles.alreadyText}>Already have an Event Id ?</Typography>
                        <View style={styles.formGroup}>
                            <TextField
                                placeholder="Enter Event Id here"
                                style={styles.textInput}
                                placeholderTextColor={'#c8c8c8'}

                            />
                            <Typography style={styles.followButton} fontFamily={FontFamily.CINZELMEDIUM} >FOLLOW</Typography>
                        </View>
                    </View>
                </View>
                <View style={styles.clientSection}>
                    <View style={styles.clientImg}>
                        <ImageBackground source={IMAGES_URL.CVC} style={styles.clientImgBg} resizeMode={'cover'} />
                        <View style={styles.options}>
                            <View style={styles.optionShare}>
                                <View style={styles.labelWithIcon}>
                                    <ShareIcon size={18} fill="white" />
                                    <Typography style={{color:'white',...CommonCss.ml10}} onPress={()=>{EventScreen.navigate()}}>Share</Typography>
                                </View>
                            </View>
                            <View style={styles.optionMore}>
                                <View style={styles.labelWithIcon}>
                                    <MoreIcon size={18} fill="white" />
                                    <Typography style={{color:'white',...CommonCss.ml10}}>More</Typography>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
HomeScreen.SCREEN_NAME = "HomeScreen";
HomeScreen.navigate = () => {
    RootNavigator.navigate(HomeScreen.SCREEN_NAME);
};

export default HomeScreen;
