import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { shadow } from "react-native-paper";
import { useGlobalState } from "../GlobalState/GlobalStates";
import { images } from "../constants";

export default Benefit = ({ navigation }) => {
  const [activePage, setActivePage] = useGlobalState("activePage"); // global state
  const headerHeight = useHeaderHeight();
  return (
    // <LinearGradient
    //   colors={["#36D1DC", "#5B86E5"]}
    //   style={{ flex: 1 }}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 0 }}
    // >
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
            borderRadius: 300,
            borderWidth: 1.25,
            borderColor: "blue",
            shadowOpacity: 0.25,
          }}
        >
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: 275,
              height: 275,
              borderRadius: 300,
              borderWidth: 1.5,
              borderColor: "blue",
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
                borderColor: "blue",
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
                source={images.beneficiary}
              />
            </View>
          </View>
        </View>

        <Text style={styles.infoText}>
          {`채현님은 기준 소득인정액 이하이므로, 
          만 65세 이상이 된다면,
          기초연금 수급자격자입니다!`}
        </Text>
        <TouchableOpacity 
          style={{...styles.analyButton, overflow: "hidden", borderRadius: 30}}
          onPress={()=>{
            navigation.navigate("AssetAnalysis");
            setActivePage("AssetAnalysis");
          }}
          >
          <View style={{}}>
            <LinearGradient
              colors={["#6E64D4", "#5AA9FC"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              // borderRadius={20}
              // padding={10}
              // 
            >
              <Text style={{
                  ...styles.textColor,
                  marginHorizontal: 10, 
                  marginVertical: 10,
                }}>
                채현님의 자산 분석 리포트 보러가기
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity 
          style={styles.analyButton}
          onPress={()=>{
            navigation.navigate("OldPrepPredict");
            setActivePage("OldPrepPredict");
          }}>
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
        </TouchableOpacity> */}

        {/* <FontAwesome.Button
          name="home"
          color="white"
          size={40}
          padding={30}
          justifyContent="center"
          backgroundColor="rgba(0,0,0,0)"
          onPress={() => {
            setActivePage("Home");
            navigation.navigate("Home");
          }}
        /> */}
      </View>
    // </LinearGradient>
  );
};

//<View style={styles.oval}>
//<View style={styles.oval}>

const styles = StyleSheet.create({
  analyButton: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    // padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  textColor: {
    color: "white",
  },
  infoText: {
    // fontFamily: "Hahmlet",
    fontWeight: "700",
    fontSize: 23,
    marginTop: 20,
    marginLeft: 10,
    color: "#000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 4,
    },
  },
  oval: {},
});
