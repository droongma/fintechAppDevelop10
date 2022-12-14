import React from "react";
import {
  AlarmScreen,
  Welfare,
  Etc,
  Home,
  Support,
  Benefit,
  NonBenefit,
  AssetAnalysis,
  OldPrepPredict,
  FinanceProduct,
  NewsScreen,
  RetireInvestTop,
  RetireMyInvest,
  ProductReco,
} from "../screens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SettingStackNavigator } from "./SettingStackNavigator";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Button, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerCustomContent } from "./DrawerCustomContent";
import { OldPrepStackNavigator } from "./OldPrepStackNavigator";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// DrawerNavigator : 왼쪽 위 버튼을 누르면, 이동할 수 있는 화면의 목록이 나옴
// 헤더의 오른쪽에는 알람 버튼도 있다.
const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCustomContent {...props} />} // Drawer에 뭘 그릴지 직접 설정
      backBehavior="history" // 마지막으로 본 페이지로 돌아오게 설정
      screenOptions={{
        drawerActiveBackgroundColor: "#c6cbef",
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              // alert('알람을 클릭하였습니다!')}
              navigation.navigate("Alarm");
            }}
          >
            <Image
              source={{ uri: Image.resolveAssetSource(icons.alarm).uri }}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                // backgroundColor: "rgba(0,0,0,0)"
              }}
            />
          </TouchableOpacity>
        ),
        // headerStyle: {backgroundColor: 'transparent'}
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{ title: "Home.js" }}
        component={Home}
      />

      <Drawer.Screen
        name="Support"
        options={{ title: "Support.js" }}
        component={Support}
      />

      <Drawer.Screen
        name="Welfare"
        options={{ title: "Welfare.js" }}
        component={Welfare}
      />

      <Drawer.Screen name="Etc" options={{ title: "Etc.js" }} component={Etc} />

      <Drawer.Screen name="Setting" component={SettingStackNavigator} />

      <Drawer.Screen
        name="Benefit"
        options={{ title: "Benefit.js" }}
        component={Benefit}
      />

      <Drawer.Screen
        name="RetireInvestTop"
        options={{ title: "RetireInvestTop.js" }}
        component={RetireInvestTop}
      />

      <Drawer.Screen
        name="RetireMyInvest"
        options={{ title: "RetireMyInvest.js" }}
        component={RetireMyInvest}
      />

      <Drawer.Screen
        name="AssetAnalysis"
        options={{ title: "AssetAnalysis.js" }}
        component={AssetAnalysis}
      />

      <Drawer.Screen
        name="NewsScreen"
        options={{ title: "NewsScreen.js" }}
        component={NewsScreen}
      />

      <Drawer.Screen
        name="NonBenefit"
        options={{ title: "NonBenefit.js" }}
        component={NonBenefit}
      />

      <Drawer.Screen
        name="OldPrepPredict"
        options={{ title: "OldPrepPredict.js" }}
        component={OldPrepPredict}
      />

      <Drawer.Screen
        name="FinanceProduct"
        options={{ title: "FinanceProduct.js" }}
        component={FinanceProduct}
      />

      <Drawer.Screen
        name="OldPrepPredict2"
        options={{
          // Alarm 항목은 drawer에 안보이게 함. 오른쪽 위의 아이콘 클릭으로만 접근 가능
          drawerItemStyle: { height: 0 },
          headerShown: false,
        }}
        component={OldPrepStackNavigator}
      />

      <Drawer.Screen
        name="InfoInput"
        options={{ title: "InfoInput.js" }}
        component={InfoInput}
      />

      <Drawer.Screen
        name="Alarm"
        options={{
          // Alarm 항목은 drawer에 안보이게 함. 오른쪽 위의 아이콘 클릭으로만 접근 가능
          drawerItemStyle: { height: 0 },
          headerShown: false,
        }}
        component={AlarmScreen}
      />
      <Drawer.Screen
        name="ProductReco"
        options={{ title: "ProductReco.js" }}
        component={ProductReco}
      />

      {/* <Drawer.Screen name="Navtest" component={Navtest} /> */}
    </Drawer.Navigator>
  );
};

export { DrawerNavigator };
