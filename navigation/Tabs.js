import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, {
    Path
} from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper'

import { Home,  Annuity, Support, Setting, Etc } from "../screens";
import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const NavImage = ({source, focused}) => {
    return (
        <Image
            source={source}
            resizeMode="contain"
            style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.white : COLORS.secondary,
            }}
        />
    )
}

const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) { // 선택된 탭은 초록색으로 표시된다.
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    width: 90,
                    height: 90,
                    paddingBottom: 10,
                    backgroundColor: COLORS.green
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
            // <View style={{ flex: 1, alignItems: 'center' }}>
            //     <View
            //         style={{
            //             flexDirection: 'row',
            //             position: 'absolute',
            //             top: 0
            //         }}
            //     >
            //         <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
            //         <Svg
            //             width={75}
            //             height={61}
            //             viewBox="0 0 75 61"
            //         >
            //             <Path
            //                 d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
            //                 fill={COLORS.white}
            //             />
            //         </Svg>
            //         <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
            //     </View>

            //     <TouchableOpacity
            //         style={{
            //             top: -22.5,
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //             width: 50,
            //             height: 50,
            //             borderRadius: 25,
            //             backgroundColor: COLORS.primary,
            //             ...styles.shadow
            //         }}
            //         onPress={onPress}
            //     >
            //         {children}
            //     </TouchableOpacity>
            // </View>
        )
    } else { // 선택되지 않은 탭
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    width: 90,
                    height: 90,
                    paddingBottom: 10,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.white
                    }}
                ></View>
                <BottomTabBar {...props.props} />
            </View>
        )
    } else {
        return (
            <BottomTabBar {...props.props} />
        )
    }
}

const Tabs = () => {
    return ( // 3개의 화면이 있는 tab
        <Tab.Navigator
            // tabBarOptions={{
            //     // showLabel: false, // 탭의 배경화면 제거
            //     showLabel: true,
            //     style: {
            //         position: 'absolute',
            //         bottom: 0,
            //         left: 0,
            //         right: 0,
            //         backgroundColor: "transparent",
            //         elevation: 0
            //     }
            // }}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: [
                    { 
                        display: "flex",
                        height: 90
                    }, 
                    null
                ],
                tabBarLabelStyle: {
                    fontSize: 18,
                }
            }}
            
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="자산"
                component={Home}
                
                options={{
                    tabBarIcon: ({ focused }) => (
                        <NavImage source={icons.more} focused = {focused} />
                        // <Image
                        //     source={icons.more}
                        //     resizeMode="contain"
                        //     style={{
                        //         width: 25,
                        //         height: 25,
                        //         tintColor: focused ? COLORS.white : COLORS.secondary
                        //     }}
                        // />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="지원금"
                component={Support}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <NavImage source={icons.scan} focused = {focused} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="연금"
                component={Annuity}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <NavImage source={icons.user} focused = {focused} />
                    ),
                    tabBarButton: (props) => ( // tabBarButton 속성을 추가해 해당 tab 누를시 보여줄 항목을 지정
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="기타"
                component={Etc}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={icons.bill}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => ( // tabBarButton 속성을 추가해 해당 tab 누를시 보여줄 항목을 지정
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="설정"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <NavImage source={icons.disable_eye} focused = {focused} />
                    ),
                    tabBarButton: (props) => ( // tabBarButton 속성을 추가해 해당 tab 누를시 보여줄 항목을 지정
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;