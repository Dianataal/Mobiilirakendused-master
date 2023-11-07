import React, { useEffect } from "react";
import { View, Text } from 'react-native';

import Signup from "./src/screens/auth/Signup";
import Splash from "./src/screens/auth/Splash";
import Signin from "./src/screens/auth/Signin";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = ''
const IOS_CLIENT_ID = ''
const REVERSED_CLIENT_ID = ''

const Stack = createNativeStackNavigator();

import Config from "react-native-config";
import { colors } from './src/utils/colors';

const App = () => {
  useEffect(() => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: Config.GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
    iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
  })
}, [])
    

    const theme = {
      colors: {
        background: colors.white
      },
    };

    return (
    <SafeAreaProvider>  
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
          <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>  
  );
};

export default React.memo(App)