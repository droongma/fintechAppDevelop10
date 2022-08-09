import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Dimensions,
} from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { RenderHeader } from "../components";
const { width, height } = Dimensions.get("window");

// KeyboardAvoidingView : TextInput이 포커스 되었을 때 keyboard가 올라오며 가리는 현상을 방지
const SignUp = () => {
    
    function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
                    marginTop: SIZES.padding * 6,
                    paddingHorizontal: SIZES.padding * 2
                }}
                onPress={() => console.log("Sign Up")}
            >
                <Image
                    source={icons.back} // 백버튼
                    resizeMode="contain" // 가로와 세로 중 넓은 부분이 100%를 차지할 때까지만 이미지를 늘림
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.white
                    }} 
                /> 

                <Text style={{ marginLeft: SIZES.padding * 1.5, 
                    color: COLORS.white, ...FONTS.h4 }}>회원가입</Text>
            </TouchableOpacity>
        )
    }

    function renderLogo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 5,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.wallieLogo}
                    resizeMode="contain"
                    style={{
                        width: "60%"
                    }}
                />
            </View>
        )
    }

    function renderForm() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 3,
                    marginHorizontal: SIZES.padding * 3,
                }}
            >
                {/* Full Name */}
                <View style={{ marginTop: SIZES.padding * 3 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>이름</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="이름을 입력하세요"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                    />
                </View>

                {/* Phone Number */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>전화번호</Text>

                    {/* Country Code */}
                    <View style={{ flexDirection: 'row' }}>
                        
                        <TouchableOpacity 
                            style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                            // onPress={() => setModalVisible(true)}
                            onPress={() => console.log("Show modal")}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Image // 아래 화살표
                                    source={icons.down}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        tintColor: COLORS.white
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Image
                                    source = {images.usFlag} // 임시 데이터. 원래 국기 이미지 보여줌
                                    // source={{ uri: selectedArea?.flag }}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                /> 
                            </View>

                            {/* 국가 코드 */}
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}> 
                                {/* <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}</Text> */}
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>US+1</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Phone Number 입력칸 */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 40,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            placeholder="전화번호를 입력하세요"
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                        />
                    </View>
                </View>

                {/* Password */}
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>비밀번호</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="비밀번호를 입력하세요"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        // secureTextEntry={!showPassword}
                        secureTextEntry={true}
                    />

                    {/* 패스워드 입력칸 오른쪽의 토글버튼(원문/암호문 전환 버튼) */}
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30
                        }}
                        // onPress={() => setShowPassword(!showPassword)}
                        onPress={() => console.log("Toggle")}
                    >
                        <Image
                            // source={showPassword ? icons.disable_eye : icons.eye}
                            source = {icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderButton() {
        return (
            <View style={{ margin: SIZES.padding * 3 }}>
                <TouchableOpacity
                    style={{
                        height: 60,
                        backgroundColor: COLORS.black,
                        borderRadius: SIZES.radius / 1.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    // onPress={() => navigation.navigate("Home")}
                    onPress={() => console.log("Navigate to Home")}

                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}>
            <LinearGradient
                // colors={[COLORS.lime, COLORS.lightRed]}
                colors={[COLORS.blue, COLORS.lightblue]}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x:1, y:1}}>
                <ScrollView>
                    {renderHeader()}
                    {/* <RenderHeader text="Hi~" /> */}
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}

export default SignUp;