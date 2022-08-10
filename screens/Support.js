import React from "react";
import {
    View,
    Text
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

const Support = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: SIZES.padding * 6,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Text>지원금</Text>
        </View>
    )
}

export default Support;