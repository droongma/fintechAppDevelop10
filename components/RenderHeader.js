import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text } from "react-native";
import { COLORS, SIZES, FONTS, icons, } from "../constants"

// '<- Sign UP' 모양을 표시하는 테스트용 컴포넌트
const RenderHeader = ({text}) => {
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
                color: COLORS.white, ...FONTS.h4 }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default RenderHeader;