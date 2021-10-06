import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { View, Text } from 'react-native';

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';



 export default function App() {
    let [fontsLoaded] = useFonts({
      OpenSans_400Regular,
      OpenSans_700Bold,
    });
    
    if (!fontsLoaded) {
      return (
        <>
        </>
      )
    }
    else {
      return (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      );
    }
  }
