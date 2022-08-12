import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { useHeaderHeight } from "@react-navigation/elements";
import { useGlobalState } from "../GlobalState/GlobalStates";

const Home = () => {
  const headerHeight = useHeaderHeight();
  // const [activePage, setActivepage] = useGlobalState('activePage');
  // if (activePage === "Home") setActivepage("sda");
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <LinearGradient
        colors={["#39CCDD", "#4960F9"]}
        style={{
          flex: 7,
          height: "40%",
          width: "100%",
          shadowOpacity: 0.25,
          borderBottomLeftRadius: 120,
          borderBottomRightRadius: 120,
          alignItems: "center",
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.helloText}> 안녕하세요, 송채현님 </Text>
        <View style={styles.card}>
          <Text style={{ marginTop: 30, fontSize: 30, fontWeight: "700" }}>
            채현님의 노후대비율은?
          </Text>
          <View
            style={{
              marginTop: "10%",
              justifyContent: "space-around",
              alignItems: "center",
              width: 250,
              height: 250,
              borderRadius: 10,
              borderWidth: 20,
              borderColor: "#4960F9",
            }}
          >
            <Text
              style={{
                color: "#4489EF",
                fontSize: 30,
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              {`마이데이터           동의하러가기`}
            </Text>
          </View>
        </View>
      </LinearGradient>

      <TouchableOpacity style={styles.goCheck}>
        <Text style={styles.checkText}>{`기초연금 수금자격 확인하러가기`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  helloText: {
    color: "white",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 33,
    textAlign: "center",
    marginTop: "30%",
    padding: 10,
  },
  card: {
    alignItems: "center",
    height: "60%",
    width: "80%",
    margin: "5%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 1,
      height: 4,
    },
  },
  goCheck: {
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#1433FF",
    borderRadius: 20,
    flex: 1.7,
    width: "90%",
    margin: "5%",
  },
  checkText: {
    margin: "5%",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    padding: 10,
    color: "white",
  },
});
