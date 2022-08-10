import React from 'react';
import { Annuity, Etc, Home, Setting, Support } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingStackNavigator } from './SettingStackNavigator';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

// DrawerNavigator : 왼쪽 위 버튼을 누르면, 이동할 수 있는 화면의 목록이 나옴
// 헤더의 오른쪽에는 알람 버튼도 있다.
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' 
            screenOptions={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={() => alert('알람을 클릭하였습니다!')}>
                        <Image  
                            source={{ uri: Image.resolveAssetSource(icons.alarm).uri }}
                            style={{
                                width: 30,
                                height: 30,
                                marginRight: 10
                            }}
                        />
                    </TouchableOpacity>
                ),
                // headerStyle: {backgroundColor: 'transparent'}
            }} >
            <Drawer.Screen name="Home" component={Home} />

            <Drawer.Screen name="Support" component={Support} />

            <Drawer.Screen name="Annuity" component={Annuity} />

            <Drawer.Screen name="Etc" component={Etc} />

            <Drawer.Screen name="Setting" component={SettingStackNavigator} />

            {/* <Drawer.Screen name="Navtest" component={Navtest} /> */}
        </Drawer.Navigator>
    )
}

export {DrawerNavigator};