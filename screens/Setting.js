import React from "react";
import {
    View,
    Text,
    Button
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const Setting = ({navigation}) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: SIZES.padding * 6,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Button onPress={()=> {navigation.navigate("Navtest")}} title="다른 화면으로"></Button>
        </View>
    )
}

export default Setting;