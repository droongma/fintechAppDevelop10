import React from "react";
import {
    View,
    Text,
    Button
} from "react-native";

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';

const Etc = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: headerHeight,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Text>기타 등등</Text>
        </View>
    )
}

export default Etc;