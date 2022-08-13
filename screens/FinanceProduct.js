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

            <View>
                <Text style={{
                    marginTop: SIZES.padding * 8,
                    fontFamily: "Roboto-Bold",
                    fontSize: SIZES.h1,
                    lineHeight: 35,
                    color: "white",
                    marginHorizontal: SIZES.width * 0.15,
                    textAlign: 'center',
                }}>
                    채현님께 추천드리는 금융상품
                </Text>
                <View style={{ ...styleSheet.whiteBox }}>
                    <ImageBackground
                        source={images.finance_product1}
                        resizeMode="contain"
                        imageStyle={{ borderRadius: 15 }}
                        style={{ flex: 1, }}
                    >
                    </ImageBackground>
                </View>
            </View>
            <View style={{ marginTop: 10, }}>
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.blue,
                    textAlign: 'center',
                }}>
                    금융상품을 더 확인하고 싶으면
                </Text>
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.blue,
                    textAlign: 'center',
                }}>
                    클릭하세요!
                </Text>
            </View>

            <View style={{
                paddingVertical: 5,
                borderRadius: 15, backgroundColor: "#d8d8e8",
                alignSelf: "center", marginTop: 10
            }}>
                <Text style={{ ...FONTS.body4, color: 'black', textAlign: 'center', marginHorizontal: 10 }}>
                    바로 확인하러 가기
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
                    홈으로
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
        borderRadius: 5,
        backgroundColor: "white",
        alignSelf: "center"
    }

});

export default FinanceProduct;