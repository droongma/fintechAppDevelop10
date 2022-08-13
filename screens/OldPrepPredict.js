import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { BgGradShape } from "../shape";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useGlobalState } from "../GlobalState/GlobalStates";

const OldPrepPredict = ({navigation}) => {
    const [activePage, setActivePage] = useGlobalState("activePage");
    const headerHeight = useHeaderHeight();
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <BgGradShape
                primaryColor="#416DF8"
                secondaryColor="#2F53D5"
                height={2.5}
                borderRadius={60}
                figures = {{}}
                gradientColors={[COLORS.blue, COLORS.lightblue]}
                start={{x: 0, y: 0}}
                end={{x:0.5, y:1}}
            />
            <View style={{marginTop: headerHeight, 

            }}>
                <Text style={{
                    // marginTop: 10,
                    fontFamily: "Roboto-Bold", 
                    fontSize: SIZES.h1, 
                    lineHeight: 35,
                    color: "white",
                    marginHorizontal: SIZES.width * 0.15,
                    textAlign: 'center',
                }}>
                    노후대비율을 어떻게 예측할까요?
                </Text>
                <View style={{...styleSheet.whiteBox}}>
                    <ImageBackground 
                        source={images.oldprep1} 
                        resizeMode="contain"
                        imageStyle={{ borderRadius: 50}}
                        style={{flex:1, }}
                        >
                        
                        {/* <Text style={{...FONTS.body3, color: 'black', marginHorizontal: 15}}>
                            <Text>채현님의 차량 가액이 </Text>
                            <Text style={{...FONTS.h3,}}>4000만원 </Text>
                            <Text>이상으로 </Text>
                            <Text style={{...FONTS.h3,}}>고급자동차</Text>    
                            <Text>
                                로 인정되므로, 현재 소유하신 차량을 
                                자녀분께 증여 또는 매각하시는 것을 추천드립니다!
                            </Text>
                            
                        </Text> */}
                    </ImageBackground> 
                </View>
           </View>
           <View style={{marginTop: 5,}}>
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.blue,
                    textAlign: 'center',
                }}>
                   은퇴 전 총 준비자금
                </Text>
                <Text style={{
                    ...FONTS.h4,
                    textAlign: 'center',
                    marginTop: 5,
                }}>
                   = 내 금융자산 + 국민연금 + 기타자산 + 정기투자
                </Text>
           </View>
           <View style={{marginTop: 5,}}>
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.blue,
                    textAlign: 'center',
                }}>
                   은퇴 후 총 필요자금
                </Text>
                <Text style={{
                    ...FONTS.h4,
                    textAlign: 'center',
                    marginTop: 5,
                }}>
                   = 미래 생활비 + 미래에 발생할 수 있는 지출
                </Text>
           </View>

           <View style={{ width : SIZES.width * 0.9,  paddingVertical: 5,
                        borderRadius: 15, backgroundColor: "#d8d8e8",
                         alignSelf: "center", marginTop: 10 }}>
                <Text style={{...FONTS.body4, color: 'black',textAlign: 'center', marginHorizontal: 10}}>
                물가 상승률은 3%로 가정하였으며, 
                기대수명은 고객님 나이 대상 통계청 생명표 기반으로 계산하였습니다.
                계산 값은 시뮬레이션 결과로 실제와는 다를 수 있으니
                참고자료로 활용하시기 바랍니다.
                    
                </Text>
                    
            </View>
            <View style={{ marginTop: 10,
                alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome.Button
                    name="search-plus"
                    color="white"
                    size={40}
                    padding={10}
                    borderRadius={20}
                    backgroundColor="#6e64d4"
                    // backgroundColor="rgba(0,0,0,0)"
                    marginHorizontal={10}
                    onPress={() => {
                        navigation.navigate("OldPrepPredict2");
                    }}
                >
                    노후대비율 측정해보러 가기!
                </FontAwesome.Button>
            </View>
        </ScrollView>
    )
}

const styleSheet = StyleSheet.create({
 
    whiteBox: {
        width : SIZES.width * 0.5, 
        height: SIZES.height * 0.3,
        marginTop: 20,
        paddingVertical: 10,         
        borderRadius: 35,
        backgroundColor: "white", 
        alignSelf: "center"
    }
   
  });

export default OldPrepPredict;