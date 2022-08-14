import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { BgGradShape } from "../shape";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useGlobalState } from "../GlobalState/GlobalStates";

const newsData = [
    {
        text: '稅혜택 당근 주고 건보료로 회수? "노후연금마저 뺏어가나요?"'
        ,date: "2022.08.11"
    },
    {
        text: '175만원 낼 건강보험료, 10분만에 75만원 깎은 비결[행복한 노후 탐구]'
        ,date: "2022.08.11"
    },
    {
        text: '똑똑한 노후 준비를 위한 3대 연금 알아보기'
        ,date: "2022.08.10"
    },
    {
        text: '노인빈곤 해소 및 안정적인 노후생활 보장을 위한 「포괄적 연금통계 개발」 추진'
        ,date: "2022.08.02"
    },
]

const NewsScreen = ({ navigation }) => {
    const [activePage, setActivePage] = useGlobalState("activePage");
    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{flex: 1}}>
            <BgGradShape
                primaryColor="#416DF8"
                secondaryColor="#2F53D5"
                height={3.5}
                borderRadius={60}
                marginTop={SIZES.padding * 6}
                figures={{}}
                gradientColors={[COLORS.blue, COLORS.lightblue]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            <View style={{
                // marginBottom: SIZES.height * 0.1,
                height: SIZES.height * 0.35,
            }}>
                <Text style={{
                    marginTop: SIZES.padding * 8,
                    fontFamily: "Roboto-Bold",
                    fontSize: SIZES.h1,
                    lineHeight: 35,
                    color: "white",
                    // marginHorizontal: SIZES.width * 0.15,
                    textAlign: 'center',
                }}>
                    노후 대비 관련
                </Text>
                <Text style={{
                    fontFamily: "Roboto-Bold",
                    fontSize: SIZES.h1,
                    lineHeight: 35,
                    color: "white",
                    // marginHorizontal: SIZES.width * 0.05,
                    textAlign: 'center',
                }}>
                    정책 뉴스를 확인하세요!
                </Text>
            </View>
            <ScrollView>
                {newsData.map((news, index) => (
                    <View style={{ 
                        ...styleSheet.whiteBox, 
                        justifyContent: 'center',
                        marginTop: (index!==0) ? 15 : 0,
                     }} key={index}>
                        <Text style={{
                            ...FONTS.h2,
                            marginHorizontal: 5,
                        }}>
                            {news.text}
                        </Text>
                        <Text style={{
                            marginTop: 10,
                            marginHorizontal: 5,
                            ...FONTS.h4,
                        }}>
                            {news.date}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styleSheet = StyleSheet.create({

    whiteBox: {
        width: SIZES.width * 0.7,
        height: SIZES.height * 0.3,
        borderWidth: 2,
        // marginTop: SIZES.height * 0.05,
        // paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "white",
        alignSelf: "center"
    }

});

export default NewsScreen;