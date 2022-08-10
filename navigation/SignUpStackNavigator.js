import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Home,  SignUp } from '../screens';
import { DrawerNavigator } from './DrawerNavigator';

const Stack = createStackNavigator();

const SignUpStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
                headerShown: false
        }}>
            <Stack.Screen name="SignUp" component={SignUp} />
    
            <Stack.Screen name="HomeStack" component={DrawerNavigator} /> 

        </Stack.Navigator>
    )
}

export {SignUpStackNavigator};