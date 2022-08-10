import React from "react";
import {
    View,
    Text,
    Button
} from "react-native";

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';

const Navtest = ({navigation}) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: headerHeight,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Button onPress={()=>{navigation.navigate("SettingStack") }} title="원래 화면으로 돌아가기"> </Button>
        </View>
    )
}

export default Navtest;