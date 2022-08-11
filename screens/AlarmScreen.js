import React from "react";
import {
    View,
    Text,
    Button,
    Image
} from "react-native";

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { TouchableOpacity } from "react-native-gesture-handler";

const AlarmScreen = ({navigation}) => {
    const headerHeight = useHeaderHeight();
    return (
        <View>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}
                // onPress={() => {navigation.navigate("Home")}}
                onPress={() => {navigation.goBack()}}
            >
                <Image
                    source={icons.back} // 백버튼
                    resizeMode="contain" // 가로와 세로 중 넓은 부분이 100%를 차지할 때까지만 이미지를 늘림
                    style={{
                        width: 20, 
                        height: 20,
                        tintColor: COLORS.black
                    }} 
                /> 

                <Text style={{ marginLeft: SIZES.padding * 1.5, 
                    color: COLORS.black, ...FONTS.h4 }}>홈으로</Text>
            </TouchableOpacity>

            <View style={{
                justifyContent: "center",
                alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
                marginTop: 50,
                // paddingHorizontal: SIZES.padding * 2
            }}>
                <Text>새로운 창에서 알림화면 표시</Text>
                <Button onPress={() => {navigation.goBack()}} title="홈 화면으로 돌아가기"> </Button>
            </View>
        </View>
    )
}

export default AlarmScreen;