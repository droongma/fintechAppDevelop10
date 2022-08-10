import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Navtest, Setting } from '../screens';

const Stack = createStackNavigator();

const SettingStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Setting' screenOptions={{
                headerShown: false
        }}>
            <Stack.Screen name="SettingStack" component={Setting} />
    
            <Stack.Screen name="Navtest" component={Navtest} /> 

        </Stack.Navigator>
    )
}

export {SettingStackNavigator};