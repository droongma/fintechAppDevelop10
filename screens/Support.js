import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { LinearGradient } from "expo-linear-gradient"

const Support = () => {
    const headerHeight = useHeaderHeight();

    return (
        <View style={{
            flex: 1,
            marginTop: headerHeight + 10,
        }}>
            <Text>Support</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 50,
        width: SIZES.width,
        height: SIZES.height * 0.6,
    },
    scroll: {
        width: SIZES.width,
        height: SIZES.height * 0.6, 
    },
    image: {
        width: SIZES.width,
        height: SIZES.height,
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center'
    },
    pagingText: {
        fontSize: SIZES.width / 30, 
        color: '#888', 
        margin: 3
    },
    pagingActiveText: {
        fontSize: SIZES.width / 30,
        color: '#fff',
        margin: 3
    },
})

export default Support;