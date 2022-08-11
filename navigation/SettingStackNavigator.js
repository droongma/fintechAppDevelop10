import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AlarmScreen, Navtest, Setting } from '../screens';

const Stack = createStackNavigator();

const SettingStackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SettingStack" component={Setting} />
    
            <Stack.Screen name="Navtest" component={Navtest} /> 
{/* 
            <Stack.Screen name="AlarmStack" options={{
                        drawerItemStyle: { height: 0 },
                        headerShown: false
                    }} 
                    component={AlarmScreen} /> */}

        </Stack.Navigator>
    )
}

export {SettingStackNavigator};