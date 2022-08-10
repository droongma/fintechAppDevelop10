import React from 'react';
import { SignUp, Home, Scan, Annuity, Support, Navtest, Etc } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Tabs from "./navigation/Tabs";
import {FAKE_API_KEY} from '@env';

const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent",
  },
};

const Stack = createStackNavigator();

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
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'} // 초기 화면
            >
                <Stack.Screen name="SignUp" component={SignUp} />
                
                <Stack.Screen name="Home" component={Tabs} /> 

                {/* Tabs */}
                <Stack.Screen name="Support" component={Support} />

                <Stack.Screen name="Annuity" component={Annuity} />

                <Stack.Screen name="Scan" component={Scan} />

                <Stack.Screen name="Etc" component={Etc} />

                <Stack.Screen name="Navtest" component={Navtest} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
