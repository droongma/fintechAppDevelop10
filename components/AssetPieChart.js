import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, View } from "react-native";
import { COLORS, SIZES, FONTS, icons, } from "../constants"
import { PieChart, } from "react-native-chart-kit";
import React from "react";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    // barRadius: 8,
    color: (opacity = 0.8) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    // barPercentage: 0.2,
    useShadowColorFromDataset: false, // optional
    style:{
      innerWidth: 100,
    }
  };

const data = [
    {
      name: "부채",
      population: 64,
      color: "#A32CC4",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "소득평가액",
      population: 14,
      color: "#710193",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "금융자산",
      population: 10,
      color: "#9867C5",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "자동차",
      population: 9,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "기타",
      population: 3,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
];

const AssetPieChart = () => {
    return (
        <View style={{paddingBottom: 0, }}>
            <PieChart
                data={data}
                width={SIZES.width }
                height={SIZES.height * 0.2}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                center={[10, 0]}
            />
        </View>
    )
}

export default AssetPieChart;