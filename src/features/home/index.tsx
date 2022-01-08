import FacebookIcon from '../../../assets/svg/FacebookIcon';
import ProfileImage from 'components/ProfileIcon';
import { IMAGES_URL } from 'libs/images';
import { SCREEN_WIDTH } from 'libs/size';
import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';
import VimeoIcon from '../../../assets/svg/Vimeo';
import InstagramIcon from '../../../assets/svg/Instagram';
import PinterestIcon from '../../../assets/svg/PinterestIcon';
import Typography, { FontFamily } from 'components/UI/Typography';
import TextField from 'components/UI/TextFieldHydra';
import Video from 'react-native-video';
import { useRef } from 'react';
interface HomeScreenProps { }

const HomeScreen = (props: HomeScreenProps) => {
    const videoRef = React.createRef<Video>()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
                <Typography style={styles.heading} fontFamily={FontFamily.CINZELBOLD} >Studio Birds Songs</Typography>
                <View style={{ position: "relative" }}>
                    <ImageBackground source={IMAGES_URL.HOMEBG} style={{ height: 300, width: SCREEN_WIDTH }} resizeMode={'center'} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16 }}>
                        <View style={{ flex: 1, alignSelf: "center" }}>
                            <VimeoIcon size={18} />
                        </View>
                        <View style={{ flex: 1, }}>
                            <FacebookIcon size={18} />
                        </View>
                        <View style={{ marginTop: -50 }}>
                            <ProfileImage imageUrl={IMAGES_URL.BK} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 30 }}>
                            <InstagramIcon size={18} />
                        </View>
                        <View style={{ flex: 1, alignSelf: "center", justifyContent: "flex-end", maxWidth: 40 }}>
                            <PinterestIcon size={18} />
                        </View>

                    </View>
                </View>
                <View style={styles.eventSectionBox}>
                    <View style={styles.eventId}>
                        <Typography style={styles.alreadyText}>Already have an Event Id ?</Typography>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
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
                    {/* <View style={styles.clientImg}>
                        <ImageBackground source={IMAGES_URL.CVC} style={styles.clientImgBg} resizeMode={'cover'}  />
                    </View>
                    <View>
                        <View>
                            <View></View>
                        </View>
                    </View> */}
                    <Video source={{ uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" }}   // Can be a URL or a local file.
                        ref={videoRef}                                      // Store reference
                        onBuffer={(data) => console.log(data)}                // Callback when remote video is buffering
                        onError={(data) => console.log(data)}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo} 
                        controls
                        paused={true}
                        onVideoError={()=>console.log('','ddddcc')}
                        repeat={true}
                        onEnd={()=>videoRef.current?.setState({"play":true})}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
HomeScreen.SCREEN_NAME = "HomeScreen";
export default HomeScreen;
