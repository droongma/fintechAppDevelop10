import React from 'react';
import { View, StyleSheet } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import {
    Avatar, // 유저 이미지 만들 때 주로 사용
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper'
import { images } from '../constants';

export function DrawerCustomContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={[styles.userInfoSection, {flexDirection: 'row'}]}>
                    <View style={{marginTop: 15,}}>
                        <Avatar.Image source={images.profile} />
                    </View>
                    <View style={{marginStart: 9, marginTop: 15}}>
                        <Title style={styles.title}>김혜원</Title>
                        <Caption style={styles.caption}>@deliogustav</Caption>
                    </View>
                </View>

                {/* Drawer 메뉴 표시 */}
                <Drawer.Section style={{flex: 1, marginTop: 15}}>
                    <DrawerItem 
                        label='Home.js입니다' 
                        onPress={()=>{props.navigation.navigate('Home');}} 
                    />
                    <DrawerItem 
                        label='Support.js입니다' 
                        onPress={()=>{props.navigation.navigate('Support');}} 
                    />
                    <DrawerItem 
                        label='Annuity.js입니다' 
                        onPress={()=>{props.navigation.navigate('Annuity');}} 
                    />
                    <DrawerItem 
                        label='Etc.js입니다' 
                        onPress={()=>{props.navigation.navigate('Etc');}} 
                    />
                    <DrawerItem 
                        label='Setting.js입니다' 
                        onPress={()=>{props.navigation.navigate('Setting');}} 
                    />
                    <DrawerItem 
                        style={{
                            height: 0,
                            headerShown: false,
                        }}
                        label='AlarmScreen.js입니다' 
                        onPress={()=>{props.navigation.navigate('Alarm');}} 
                    />
                    
                </Drawer.Section>
                
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoSection: {
        paddingTop: 25,
        paddingStart: 15,
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginStart: 0,
    },
    Paragraph: {
        fontWeight: 'bold',
        marginEnd: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})