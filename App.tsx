/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator, { navigationRef } from 'libs/navigation/RootNavigation';
import RootStackScreen from 'navigation/RootNavigator';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { enableScreens } from 'react-native-screens';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import requestPermissionLocation from 'utils/functions/geolocation';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  enableScreens(true)
  let previousRouteName: string | undefined;
  requestPermissionLocation();
  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    return () => {
      RootNavigator.isReadyRef = false;
    };
  }, []);
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          RootNavigator.isReadyRef = true;
          previousRouteName = navigationRef.current?.getCurrentRoute()?.name;
        }}

      >
        <StatusBar backgroundColor={'white'} />
        <RootStackScreen />
      </NavigationContainer>
    </>
  );
};
export default App;
