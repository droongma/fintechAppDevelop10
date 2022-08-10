import React, { useEffect } from "react";
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
import { NavigationContainer } from "@react-navigation/native";

const { width:SCREEN_WIDTH, height:SCREEN_HEIGHT } = Dimensions.get("window");

// KeyboardAvoidingView : TextInput이 포커스 되었을 때 keyboard가 올라오며 가리는 현상을 방지
const SignUp = ({navigation}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [areas, setAreas] = React.useState([]);
    const [selectedArea, setSelectedArea] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const getCountryList = async() => {
        let areaData;
        const response = await fetch("https://restcountries.com/v3.1/all"); // 국가번호 목록을 가져옴
        const jsonArray = await response.json();
        areaData = jsonArray.map(item => {
            let callingCode;
            if (item?.idd === undefined) return null; // item에 idd라는 키가 없는 경우 null 리턴
            
            const idd_suffix_arr = item.idd?.suffixes;

            // item.idd에 suffixes 배열이 없거나, 배열 길이가 0이면 null 리턴
            if (idd_suffix_arr === undefined || idd_suffix_arr.length === 0) return null;
            
            const idd_root = item.idd?.root; 
            const idd_suffix = idd_suffix_arr[0];
            const flag = item.flags?.png; // 국기 이미지 정보

            // item.idd에 root 또는 suffix라는 키가 없는 경우와, flag 이미지가 없는 경우는 null 리턴
            if (idd_root === undefined || idd_suffix === undefined || flag === undefined) return null;
            else {
                callingCode = idd_root.concat(idd_suffix);
                var name = item.name.common;
                if (item.cca2 === "KR") {
                    name = name.concat("(대한민국)");
                }
                return {
                    code: item.cca2,
                    name: name,
                    callingCode: callingCode,
                    flag: flag,
                    // flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                }
            }
        });

        areaData = areaData.filter(a => a !== null); // null로 처리된 데이터(값이 완전하지 않은 데이터) 제거
        areaData.sort((a, b) => {
            let a_low = a.name.toLowerCase();
            let b_low = b.name.toLowerCase();
            if (a_low < b_low) return -1;
            if (a_low > b_low) return 1;
            return 0;
        });
        setAreas(areaData); // 나라별 데이터 저장

        if(areaData.length > 0) {
            let defaultData = areaData.filter(a => a.code == "KR" ); // 기본적으로, 한국 전화번호로 설정
            if (defaultData.length > 0) {
                setSelectedArea(defaultData[0]);
            }
        }
        setIsLoaded(true);
    }

    useEffect(() => {
        getCountryList();
    }, []); // 초기에 화면을 불러올 때 사용
    
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
                            disabled={!isLoaded}
                            style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                            onPress={() => setModalVisible(true)}
                            // onPress={() => console.log("Show modal")}
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
                                    // source = {images.usFlag} // 임시 데이터. 원래 국기 이미지 보여줌
                                    source={{ uri: selectedArea?.flag }} // ?.는 optional chaining 의미
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
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}</Text>
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
                        secureTextEntry={!showPassword}
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
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            // source = {icons.eye}
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
                    onPress={() => navigation.navigate("Home")}

                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>시작하기</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderAreaCodesModal() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{ padding: SIZES.padding, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <TouchableWithoutFeedback onPress={()=>setModalVisible(false)}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: SCREEN_HEIGHT / 2,
                                width: SIZES.width * 0.75,
                                backgroundColor: COLORS.lightGreen,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={true}
                                style={{
                                    padding: SIZES.padding * 2,
                                    marginBottom: SIZES.padding * 2
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
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
            {renderAreaCodesModal() }
        </KeyboardAvoidingView>
    )
}

export default SignUp;