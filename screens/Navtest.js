import React from "react";
import {
    View,
    Text,
    Button
} from "react-native";

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';

const Navtest = ({navigation: {goBack}}) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: headerHeight,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Text style={{
                paddingHorizontal: 20,
                fontSize: 20
            }}>위의 drawer navigation과 알림 표시 버튼을 유지하면서, Navtest.js의 내용 표시</Text>
            <Button onPress={()=>{goBack() }} title="설정 화면으로 돌아가기"> </Button>
        </View>
    )
}

export default Navtest;