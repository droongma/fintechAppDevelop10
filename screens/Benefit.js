import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { shadow } from "react-native-paper";
import { useGlobalState } from "../GlobalState/GlobalStates";

export default Benefit = ({ navigation }) => {
  const [activePage, setActivePage] = useGlobalState('activePage'); // global state
  const headerHeight = useHeaderHeight();
  return (
    <LinearGradient
      colors={["#36D1DC", "#5B86E5"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: headerHeight,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#6E64D4", "#5AA9FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            borderRadius={"25px"}
            padding={10}
          >
            <Text style={styles.textColor}>
              채현님의 자산 분석 리포트 보러가기
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={["#6E64D4", "#5AA9FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            borderRadius={"25px"}
            padding={10}
          >
            <Text style={styles.textColor}>
              {" "}
              채현님의 노후 대비율 예측해보러가기{" "}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <FontAwesome.Button
          name={"home"}
          color={"white"}
          size={40}
          justifyContent={"center"}
          backgroundColor={"rgba(0,0,0,0)"}
          onPress={() => {
            setActivePage("Home");
            navigation.navigate("Home");
          }}
        />

        <Text>수혜자</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    padding: 10,
    alignItems: "center",
  },
  textColor: {
    color: "white",
  },
});
