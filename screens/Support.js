import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { LinearGradient } from "expo-linear-gradient"



const Support = () => {
    const headerHeight = useHeaderHeight();

    return (
        <View style={{
            flex: 1,
            marginTop: headerHeight + 10,
        }}>
            <View >
                <Text style={{...FONTS.h3, marginStart: 20,  marginBottom: 10,}}>소득인정액</Text>
                {/* {renderCard()} */}
                <LinearGradient
                // colors={[COLORS.lime, COLORS.lightRed]}
                    colors={[COLORS.purple, COLORS.lightpurple]}
                    style={{width : SIZES.width * 0.8, alignSelf: 'center', borderRadius: 10, }}
                    start={{x: 0, y: 0}}
                    end={{x:1, y:1}}>
                    <View style={{ width : SIZES.width * 0.8,  paddingTop: 30,
                         }}>
                            <Text style={{...FONTS.h3, color: 'white', marginHorizontal: 15}}>
                                채현님의 현재 소득인정액은 월 1,851,900원입니다.
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10,
                                    marginHorizontal: 15, marginBottom: 20,}}>
                                <Text style={{...FONTS.body4, color: 'white'}}>Chaehyun Song</Text>
                                <Text style={{...FONTS.body4, color: 'white'}}>2001/05/06</Text>
                            </View>
                    </View>
                </LinearGradient>   
                <View>
                    <Text style={{...FONTS.h3, marginHorizontal: 15, marginTop: 15}}>
                                채현님의 현재 소득인정액 구성자산
                    </Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 50,
        width: SIZES.width,
        height: SIZES.height * 0.6,
    },
    scroll: {
        width: SIZES.width,
        height: SIZES.height * 0.6, 
    },
    image: {
        width: SIZES.width,
        height: SIZES.height,
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row', 
        position: 'absolute', 
        bottom: 0, 
        alignSelf: 'center'
    },
    pagingText: {
        fontSize: SIZES.width / 30, 
        color: '#888', 
        margin: 3
    },
    pagingActiveText: {
        fontSize: SIZES.width / 30,
        color: '#fff',
        margin: 3
    },
})

export default Support;