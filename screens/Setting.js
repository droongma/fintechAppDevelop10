import React from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ScrollView,
    FlatList
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';

const Setting = ({navigation}) => {
    const headerHeight = useHeaderHeight();
    const data = [
        {
            title: "내 프로필 정보",
            detail : "프로필 정보를 조회하거나 수정하세요",
        },
        {
            title: "앱 설정",
            detail : "글씨 크기 등 앱의 환경을 설정하세요",
        },
        {
            title: "문의하기",
            detail : "앱 사용과 관련한 문의를 할 수 있습니다",
        },
    ]

    const renderData = ({ item, index }) => (
        <TouchableOpacity>
                <View style={{
                    borderBottomWidth: 1, 
                    backgroundColor: "white",  
                    paddingLeft: 10,
                    marginTop: index===0 ? 0 : 10,
                }}>
                    <Text style={{...FONTS.h2}}>{item.title}</Text>
                    <Text>{item.detail}</Text>
                </View>
        </TouchableOpacity>
    )

    return (
        <View style={{marginTop: headerHeight + 10, backgroundColor: COLORS.lightGray,}}>
            <FlatList
                data={data}
                renderItem={renderData}
                keyExtractor={(item, index) =>index}
            />
        </View>
    )
}

export default Setting;