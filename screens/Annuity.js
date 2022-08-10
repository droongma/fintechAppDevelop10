import React from "react";
import {
    View,
    Text
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';

const Annuity = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: headerHeight,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Text>연금</Text>
        </View>
    )
}

export default Annuity;