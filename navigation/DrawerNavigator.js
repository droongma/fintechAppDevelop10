import React from 'react';
import { AlarmScreen, Annuity, Etc, Home, Setting, Support } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingStackNavigator } from './SettingStackNavigator';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// DrawerNavigator : 왼쪽 위 버튼을 누르면, 이동할 수 있는 화면의 목록이 나옴
// 헤더의 오른쪽에는 알람 버튼도 있다.
const DrawerNavigator = ({navigation}) => {
    return (
        <Drawer.Navigator 
            backBehavior='history' // 마지막으로 본 페이지로 돌아오게 설정
            screenOptions={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity onPress={() => {
                        // alert('알람을 클릭하였습니다!')}
                        navigation.navigate("Alarm")
                    }}>
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
            <Drawer.Screen name="Home" options={{ title: 'My home으로 제목바꾸기' }} component={Home} />

            <Drawer.Screen name="Support" component={Support} />

            <Drawer.Screen name="Annuity" component={Annuity} />

            <Drawer.Screen name="Etc" component={Etc} />

            <Drawer.Screen name="Setting" component={SettingStackNavigator} />

            <Drawer.Screen name="Alarm" options={{ // Alarm 항목은 drawer에 안보이게 함. 아이콘 클릭으로만 접근 가능
                        drawerItemStyle: { height: 0 },
                        headerShown: false
                    }} 
                    component={AlarmScreen} /> 
            {/* <Drawer.Screen name="Navtest" component={Navtest} /> */}
        </Drawer.Navigator>
    )
}

export {DrawerNavigator};