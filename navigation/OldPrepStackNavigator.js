import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AlarmScreen, Navtest, OldPrepPredict, OldPrepPredict2, OldPrepPredict3, Setting } from '../screens';

const Stack = createStackNavigator();

const OldPrepStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            {/* <Stack.Screen options={{ title: 'OldPrepPredict.js',}} name="OldPrepPredictStack" component={OldPrepPredict} /> */}
    
            <Stack.Screen options={{ title: 'OldPrepPredict2.js', }}  name="OldPrepPredictStack" component={OldPrepPredict2} /> 
            <Stack.Screen options={{ title: 'OldPrepPredict3.js', }}  name="OldPrepPredict3" component={OldPrepPredict3} /> 
        </Stack.Navigator>
    )
}

export {OldPrepStackNavigator};