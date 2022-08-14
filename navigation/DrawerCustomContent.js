import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar, // 유저 이미지 만들 때 주로 사용
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { images } from "../constants";
import { useGlobalState } from "../GlobalState/GlobalStates";

export function DrawerCustomContent(props) {
  // const [active, setActive] = React.useState("Home");
  const [activePage, setActivePage] = useGlobalState("activePage"); // global state

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
          <View style={{ marginTop: 15 }}>
            <Avatar.Image source={images.profile} />
          </View>
          <View style={{ marginStart: 9, marginTop: 15 }}>
            <Title style={styles.title}>김혜원</Title>
            <Caption style={styles.caption}>@deliogustav</Caption>
          </View>
        </View>

        {/* Drawer 메뉴 표시 */}
        <Drawer.Section style={{ flex: 1, marginTop: 15 }}>
          <DrawerItem
            label="홈 화면"
            style={
              activePage === "Home"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("Home");
              props.navigation.navigate("Home");
            }}
          />

          <DrawerItem
            label="복지혜택 둘러보기"
            style={
              activePage === "Welfare"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("Welfare");
              props.navigation.navigate("Welfare");
            }}
          />

          <DrawerItem
            label="노후 대비율 예측해보기"
            style={
              activePage === "OldPrepPredict"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("OldPrepPredict");
              props.navigation.navigate("OldPrepPredict");
            }}
          />

          <DrawerItem
            label="기초연금 수급자격 확인"
            style={
              activePage === "Benefit"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("Benefit");
              props.navigation.navigate("Benefit");
            }}
          />

          <DrawerItem
            label="자산분석 보고서"
            style={
              activePage === "AssetAnalysis"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("AssetAnalysis");
              props.navigation.navigate("AssetAnalysis");
            }}
          />

          <DrawerItem
            label="추천 금융상품"
            style={
              activePage === "FinanceProduct"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("FinanceProduct");
              props.navigation.navigate("FinanceProduct");
            }}
          />

          <DrawerItem
            label="노후정책 뉴스"
            style={
              activePage === "NewsScreen"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("NewsScreen");
              props.navigation.navigate("NewsScreen");
            }}
          />

          <DrawerItem
            label="설정"
            style={
              activePage === "Setting"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("Setting");
              props.navigation.navigate("Setting");
            }}
          />

          <DrawerItem
            label="InfoInput.js입니다"
            style={
              activePage === "InfoInput"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("InfoInput");
              props.navigation.navigate("InfoInput");
            }}
          />

          <DrawerItem
            label="ProductReco.js입니다"
            style={
              activePage === "ProductReco"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("ProductReco");
              props.navigation.navigate("ProductReco");
            }}
          />

          {/* <DrawerItem
            label="NonBenefit.js입니다"
            style={
              activePage === "NonBenefit"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("NonBenefit");
              props.navigation.navigate("NonBenefit");
            }}
          />

          <DrawerItem
            label="Etc.js입니다"
            style={
              activePage === "Etc"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("Etc");
              props.navigation.navigate("Etc");
            }}
          />

          <DrawerItem
            label="Support.js입니다"
            style={
              activePage === "Support"
                ? { backgroundColor: "#CBE9AC" }
                : { backgroundColor: "#ffffff" }
            }
            onPress={() => {
              setActivePage("Support");
              props.navigation.navigate("Support");
            }}
          /> */}

          <DrawerItem
            style={{
              height: 0,
              headerShown: false,
            }}
            label="AlarmScreen.js입니다"
            onPress={() => {
              // props.navigation.navigate("Alarm");
            }}
          />

          <DrawerItem
            style={{
              height: 0,
              headerShown: false,
            }}
            label="OldPrepPredict2.js입니다"
            onPress={() => {
              // props.navigation.navigate("OldPrepPredict2");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    paddingTop: 25,
    paddingStart: 15,
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 0,
  },
  Paragraph: {
    fontWeight: "bold",
    marginEnd: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
