import React from "react";
import {
    View,
    Text
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { useHeaderHeight } from '@react-navigation/elements';
import { useGlobalState } from "../GlobalState/GlobalStates";

const Home = () => {
    const headerHeight = useHeaderHeight();
    // const [activePage, setActivepage] = useGlobalState('activePage');
    // if (activePage === "Home") setActivepage("sda");
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
            marginTop: headerHeight,
            // paddingHorizontal: SIZES.padding * 2
        }}>
            <Text>Home.js의 내용 표시</Text>
            {/* <Text>{activePage}</Text> */}
        </View>
    )
}

export default Home;