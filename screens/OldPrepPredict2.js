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
import { LinearGradient } from "expo-linear-gradient";

const OldPrepPredict2 = ({ navigation }) => {
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
                        marginTop:  SIZES.padding * 6,
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
                            tintColor: COLORS.lightyellow,
                        }}
                    />

                    <Text
                        style={{
                            marginLeft: SIZES.padding * 1.5,
                            color: COLORS.lightyellow,
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
                    안녕하세요, 송채현님
                </Text>
                <TouchableOpacity onPress={() => {
                    // setActivePage("OldPrepPredict3");
                    // navigation.navigate("OldPrepPredict3");
                }} activeOpacity={1}>
                    <View style={{ ...styleSheet.whiteBox }}>
                        <ImageBackground
                            source={images.oldprep2}
                            resizeMode="contain"
                            imageStyle={{ borderRadius: 50 }}
                            style={{ flex: 1, }}
                        >
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={{
                marginTop: 10,
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                <TouchableOpacity 
                    style={{...styleSheet.analyButton, overflow: "hidden", borderRadius: 30}}
                    onPress={()=>{
                        navigation.navigate("OldPrepPredict3");
                        setActivePage("OldPrepPredict3");
                    }}
                    >
                    <View style={{}}>
                        <LinearGradient
                            colors={["#6E64D4", "#5AA9FC", ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={{
                                color: 'white',
                                marginHorizontal: 30, 
                                marginVertical: 10,
                                }}>
                                클릭하여 상세조회하기
                            </Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                {/* <FontAwesome.Button
                    // name="paypal"
                    color="white"
                    size={30}
                    padding={5}
                    borderRadius={10}
                    backgroundColor="#6e64d4"
                    // backgroundColor="rgba(0,0,0,0)"
                    marginHorizontal={10}
                    onPress={() => {
                        setActivePage("OldPrepPredict3");
                        navigation.navigate("OldPrepPredict3");
                    }}
                >
                    클릭하여 상세조회하기
                </FontAwesome.Button> */}
            </View>
            <View style={{
                marginTop: 5,
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                <TouchableOpacity 
                    style={{...styleSheet.analyButton, overflow: "hidden", borderRadius: 30}}
                    onPress={()=>{
                        navigation.navigate("FinanceProduct");
                        setActivePage("FinanceProduct");
                    }}
                    >
                    <View style={{}}>
                        <LinearGradient
                            paddingVertical={20}
                            colors={["#5AA9FC", "#6E64D4", ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={{
                                color: 'white',
                                width : SIZES.width * 0.5,
                                marginHorizontal: 30, 
                                // marginVertical: 30,
                                ...FONTS.h2,
                                }}> 
                                채현님께 추천하는
                            </Text>
                            <Text style={{
                                color: 'white',
                                width : SIZES.width * 0.5,
                                marginHorizontal: 30, 
                                // marginVertical: 30,
                                ...FONTS.h2,
                                }}>
                                금융상품 보러가기
                            </Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>
                {/* <FontAwesome.Button
                    name="paypal"
                    color="white"
                    size={40}
                    padding={10}
                    borderRadius={20}
                    backgroundColor="#6e64d4"
                    // backgroundColor="rgba(0,0,0,0)"
                    marginHorizontal={10}
                    onPress={() => {
                        setActivePage("FinanceProduct");
                        navigation.navigate("FinanceProduct");
                    }}
                >
                    채현님께 추천하는 금융상품 보러가기
                </FontAwesome.Button> */}
            </View>
        </ScrollView>
    )
}

const styleSheet = StyleSheet.create({
    whiteBox: {
        width: SIZES.width * 0.6,
        height: SIZES.height * 0.4,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 35,
        backgroundColor: "white",
        alignSelf: "center"
    },

    analyButton: {
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: {
          width: 3,
          height: 3,
        },
        // padding: 10,
        marginVertical: 10,
        alignItems: "center",
    },

});

export default OldPrepPredict2;