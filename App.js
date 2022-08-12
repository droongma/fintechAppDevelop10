import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// import Tabs from "./navigation/Tabs";
import {FAKE_API_KEY} from '@env';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerCustomContent } from './navigation/DrawerCustomContent';
import { SignUpStackNavigator } from './navigation/SignUpStackNavigator';

const Drawer = createDrawerNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })
    
    if(!loaded){
      return null;
    }
    return (
        <NavigationContainer >
            <SignUpStackNavigator/>
        </NavigationContainer>
    )
}

export default App;
