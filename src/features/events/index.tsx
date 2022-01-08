import CustomHeader from 'components/UI/Header/Header';
import Typography, { FontFamily } from 'components/UI/Typography';
import { CommonCss } from 'libs/commonCss/CommonCss';
import RootNavigator from 'libs/navigation/RootNavigation';
import * as React from 'react';
import { useRef } from 'react';
import { Animated, View, StyleSheet, SafeAreaView, FlatList, ImageBackground, StatusBar } from 'react-native';
import { getCloser } from 'utils/functions';
import { data } from './data';

const { diffClamp } = Animated;
const headerHeight = 60 * 2;
interface EventScreenProps { }
export interface ImageUrlProps {
  id: number;
  image: string;

}

const EventScreen = (props: EventScreenProps) => {
  const ref = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);
  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 5)],
    extrapolate: 'clamp'
  });

  const translateYNumber = useRef<any>();

  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });
  console.log(scrollY.current)
  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current, },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  const handleSnap = ({ nativeEvent }: any) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
              -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };

  const renderItem = (item: ImageUrlProps, index: number) => {
    return (
      <View key={index} style={{ ...CommonCss.mb10, }}>
        <ImageBackground source={{ uri: item.image }} style={{ width: '99%', height: 220, alignSelf: 'center' }} resizeMode="cover" resizeMethod="auto" />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <CustomHeader headerTitle="Portfolio" headerHeight={headerHeight} marginTop={headerHeight} />
      </Animated.View>
      <Animated.FlatList scrollEventThrottle={16} onScroll={handleScroll} ref={ref} contentContainerStyle={{ paddingTop: headerHeight / 4 }} bounces={false}
        onMomentumScrollEnd={handleSnap} data={data} renderItem={({ item, index }) => renderItem(item, index)} keyExtractor={(item) => item.id.toString()} />
    </SafeAreaView>
  );
};
EventScreen.SCREEN_NAME = "EventScreen";

EventScreen.navigate = () => {
  RootNavigator.navigate(EventScreen.SCREEN_NAME);
};
EventScreen.navigationOptions = {
  headerShown: false,
};
export default EventScreen;

const styles = StyleSheet.create({
  container: {
    ...CommonCss.flex1,
    backgroundColor: '#ddd',
    ...CommonCss.mt20
  },
  heading: {
    fontSize: 24,
    ...CommonCss.mb20,
    ...CommonCss.mt20,
    ...CommonCss.ml20
  },
  header: {
    position: 'absolute',
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
    top: 0
  },
});
