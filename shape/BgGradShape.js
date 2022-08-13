import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const BgGradShape = ({
  primaryColor,
  height,
  borderRadius,
  style,
  gradientColors,
  start,
  end
}) => {
  const config = {
    primaryColor: primaryColor || "#416DF8",
    height: Dimensions.get("window").height / (height || 3.5),
    borderRadius: borderRadius !== undefined ? borderRadius : 30 // 기본값
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        height: config.height,
        borderBottomLeftRadius: config.borderRadius,
        borderBottomRightRadius: config.borderRadius,
        backgroundColor:"red",
        ...style,
        overflow: 'hidden',
      }}>
        <LinearGradient
                // colors={[COLORS.lime, COLORS.lightRed]}
                colors={gradientColors}
                style={{flex: 1}}
                start={start}
                end={end}> 
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default BgGradShape ;
