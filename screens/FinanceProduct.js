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
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { BgGradShape } from "../shape";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useGlobalState } from "../GlobalState/GlobalStates";

const FinanceProduct = ({ navigation }) => {
    const [activePage, setActivePage] = useGlobalState("activePage");
    const headerHeight = useHeaderHeight();
    return (
        <ScrollView showsVerticalScrollIndicator={true} 
            >
            <BgGradShape
                primaryColor="#416DF8"
                secondaryColor="#2F53D5"
                height={2.5}
                borderRadius={60}
                marginTop={SIZES.padding * 6}
                figures={{}}
                gradientColors={[COLORS.blue, COLORS.lightblue]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            <View style={{ marginTop: headerHeight, }}>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
                        paddingHorizontal: SIZES.padding * 2,
                        marginTop:  SIZES.padding * 4,
                    }}
                    // onPress={() => {navigation.navigate("Home")}}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Image
                        source={icons.back} // 백버튼
                        resizeMode="contain" // 가로와 세로 중 넓은 부분이 100%를 차지할 때까지만 이미지를 늘림
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.black,
                        }}
                    />

                    <Text
                        style={{
                            marginLeft: SIZES.padding * 1.5,
                            color: COLORS.black,
                            ...FONTS.h4,
                        }}
                    >
                        이전으로
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{
                    marginTop: 10,
                    fontFamily: "Roboto-Bold",
                    fontSize: SIZES.h1,
                    lineHeight: 35,
                    color: "white",
                    marginHorizontal: SIZES.width * 0.15,
                    textAlign: 'center',
                }}>
                    채현님의 노후 대비율 9.8%
                </Text>
                <View style={{ ...styleSheet.whiteBox }}>
                    <ImageBackground
                        source={images.oldprep3}
                        resizeMode="contain"
                        imageStyle={{ borderRadius: 50 }}
                        style={{ flex: 1, }}
                    >
                    </ImageBackground>
                </View>
            </View>
            <View style={{ marginTop: 5, }}>
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.blue,
                    textAlign: 'center',
                }}>
                    풍요로운 노후를 위해 필요한 돈
                </Text>
                <Text style={{
                    ...FONTS.h4,
                    textAlign: 'center',
                    marginTop: 5,
                }}>
                    = 3억 5천 112만원
                </Text>
            </View>
            <View style={{ marginTop: 5, }}>
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.blue,
                    textAlign: 'center',
                }}>
                    채현님이 준비한 노후자금
                </Text>
                <Text style={{
                    ...FONTS.h4,
                    textAlign: 'center',
                    marginTop: 5,
                }}>
                    = 3천 432만원
                </Text>
            </View>

            <View style={{
                width: SIZES.width * 0.9, paddingVertical: 5,
                borderRadius: 15, backgroundColor: "#d8d8e8",
                alignSelf: "center", marginTop: 10
            }}>
                <Text style={{ ...FONTS.body4, color: 'black', textAlign: 'center', marginHorizontal: 10 }}>
                    노후 대비가 시급합니다!
                    노후 자금 준비를 위해 노후 모아가 추천하는 금융상품과 투자방법을
                    알아보고 싶다면 아래를 클릭하세요!
                </Text>

            </View>
            <View style={{
                marginTop: 10,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <FontAwesome.Button
                    name="rocket"
                    color="white"
                    size={40}
                    padding={10}
                    borderRadius={20}
                    backgroundColor="#6e64d4"
                    // backgroundColor="rgba(0,0,0,0)"
                    marginHorizontal={10}
                    onPress={() => {
                        setActivePage("Home");
                        navigation.navigate("Home");
                    }}
                >
                    풍요로운 미래를 준비하러 가기!
                </FontAwesome.Button>
            </View>
        </ScrollView>
    )
}

const styleSheet = StyleSheet.create({

    whiteBox: {
        width: SIZES.width * 0.5,
        height: SIZES.height * 0.3,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 35,
        backgroundColor: "white",
        alignSelf: "center"
    }

});

export default FinanceProduct;