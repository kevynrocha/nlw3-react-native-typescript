import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';
import AppLoading from 'expo/build/launch/AppLoading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Nunito_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Routes />  
}