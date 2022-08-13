import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Keyboard,
  Alert,
  Styled,
  TextInput,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default InfoInput = ({ navigation }) => {
  const [age, setAge] = useState();
  const [savingsForOld, setSavingsForOld] = useState();
  const [severancePay, setSeverancePay] = useState();
  const [monthlySaving, setMonthlySaving] = useState();
  const [workingYear, setWorkingYear] = useState();

  return (
    <LinearGradient
      colors={["#36D1DC", "#5B86E5"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <View style={styles.inputBox}>
          <Text style={styles.infoText}>나이를 입력하세요 </Text>
          <TextInput
            style={styles.inputFormat}
            label="나이"
            placeholder="50"
            onChangeText={(Text) => setAge(Text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.infoText}>저축해 둔 노후자금을 입력하세요.</Text>
          <TextInput
            style={styles.inputFormat}
            label="나이"
            placeholder="50"
            onChangeText={(Text) => setAge(Text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.infoText}> 수령하실 퇴직금을 입력하세요. </Text>
          <TextInput
            style={styles.inputFormat}
            label="나이"
            placeholder="50"
            onChangeText={(Text) => setAge(Text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.infoText}> 매달 저축액을 입력하세요. </Text>
          <TextInput
            style={styles.inputFormat}
            label="나이"
            placeholder="50"
            onChangeText={(Text) => setAge(Text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.infoText}> 일하신 기간을 입력하세요. </Text>
          <TextInput
            style={styles.inputFormat}
            label="나이"
            placeholder="50"
            onChangeText={(Text) => setAge(Text)}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.submitBtn}>
          <Text
            style={{
              fontSize: 20,
              padding: 10,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {"확인"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    justifyContent: "center",
    margin: "3%",
    width: "90%",
    height: "10%",
    flex: 3,
    borderRadius: 10,
    backgroundColor: "#EFFAFD",
  },
  inputFormat: {
    height: 10,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    flex: 1,
  },
  infoText: {
    fontSize: 20,
    padding: 10,
    fontWeight: "500",
  },
  submitBtn: {
    backgroundColor: "blue",
    margin: "3%",
    width: "90%",
    height: "10%",
    flex: 2,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});
