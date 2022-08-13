import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { shadow } from "react-native-paper";
import { useGlobalState } from "../GlobalState/GlobalStates";
import { images } from "../constants";

export default NonBenefit = ({ navigation }) => {
  const [activePage, setActivePage] = useGlobalState("activePage"); // global state
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
          justifyContent: "space-around",
          alignItems: "center",
          alignItems: "center",
          marginTop: headerHeight,
        }}
      >
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            width: 350,
            height: 350,
            borderRadius: 350,
            borderWidth: 0.5,
            borderColor: "#F5F5F5",
            shadowOpacity: 0.25,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: 275,
              height: 275,
              borderRadius: 200,
              borderWidth: 1,
              borderColor: "#F5F5F5",
              shadowOpacity: 0.25,
            }}
          >
            <View
              style={{
                justifyContent: "space-around",
                alignItems: "center",
                width: 200,
                height: 200,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: "#F5F5F5",
                shadowOpacity: 0.25,
              }}
            >
              <Image
                style={{
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: 150,
                  height: 150,
                  borderRadius: 100,
                  shadowOpacity: 0.25,
                }}
                source={images.nonbeneficiary}
              />
            </View>
          </View>
        </View>

        <Text style={styles.infoText}>
          {`채현님은 기준 소득인정액 이하이므로, 
          만 65세 이상이 되셨을 때,
          기초연금 수급자격자입니다!`}
        </Text>
        <TouchableOpacity style={styles.analyButton}>
          <LinearGradient
            colors={["#6E64D4", "#5AA9FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            borderRadius={25}
            padding={10}
          >
            <Text style={styles.textColor}>
              채현님의 자산 분석 리포트 보러가기
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.analyButton}>
          <LinearGradient
            colors={["#6E64D4", "#5AA9FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            borderRadius={25}
            padding={10}
          >
            <Text style={styles.textColor}>
              {"채현님의 노후 대비율 예측해보러가기"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <FontAwesome.Button
          name={"home"}
          color={"white"}
          size={40}
          padding={30}
          justifyContent={"center"}
          backgroundColor={"rgba(0,0,0,0)"}
          onPress={() => {
            setActivePage("Home");
            navigation.navigate("Home");
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  analyButton: {
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
  infoText: {
    // fonFamily: "Hahmlet",
    fontWeight: "700",
    fontSize: 23,
    marginVertical: 20,
    marginLeft: 10,
    // textAlign: "center",
    // padding: 20,
    color: "#FFFFFF",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 4,
    },
  },
});
