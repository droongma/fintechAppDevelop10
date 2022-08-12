import React from "react";
import {
    View,
    Text
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { useGlobalState } from "../GlobalState/GlobalStates";

const IncomeAnalysis = () => {
    const headerHeight = useHeaderHeight();
    return (
        <View>
            <Text style={{...FONTS.h2}}>ss의 내용 표시</Text>
            <View style={{}}>

            </View>
        </View>
    )
}

export default IncomeAnalysis;