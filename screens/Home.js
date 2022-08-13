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

const Home = ({ navigation }) => {
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
                    marginTop: headerHeight,
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
                            source={images.mydata_agree}
                            resizeMode="contain"
                            imageStyle={{ borderRadius: 30 }}
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
                <FontAwesome.Button
                    name="location-arrow"
                    color="white"
                    size={40}
                    padding={10}
                    borderRadius={20}
                    backgroundColor="#6e64d4"
                    // backgroundColor="rgba(0,0,0,0)"
                    marginHorizontal={10}
                    onPress={() => { // 기초연금 수급자격 조회 화면으로 이동
                        setActivePage("Benefit");
                        navigation.navigate("Benefit");
                    }}
                >
                    기초연금 수급자격 확인하러 가기
                </FontAwesome.Button>
            </View>
        </ScrollView>
    )
}

const styleSheet = StyleSheet.create({

    whiteBox: {
        width: SIZES.width * 0.7,
        height: SIZES.height * 0.5,
        marginTop: 20,
        paddingVertical: 10,
        borderRadius: 35,
        backgroundColor: "white",
        alignSelf: "center"
    }

});

export default Home;