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
  const [result1, setResult1] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);
  const [hopeCost, setHopeCost] = useState(null);
  const [readyPer, setReadyPer] = useState(null);

  var intAge = parseInt(age);
  var intSavingsForOld = parseInt(savingsForOld);
  var intSeverancePay = parseInt(severancePay);
  var intMonthlySaving = parseInt(monthlySaving);
  var intWorkingYear = parseInt(workingYear);
  var retireMonthlyHopeCost = parseInt(hopeCost);

  const requireSavings = () => {
    var expectAge = 83;
    var retireAge = 50;
    var pesionAge = 65;

    var monthlyPension = 1000000;
    //은퇴기간 ,일 가능 기간,  연금 수령 기간 - 월 기준
    var retirePeriods = (expectAge - retireAge) * 12;
    var workPeriods = (retireAge - intAge) * 12;
    var pensionPeriods = (expectAge - pesionAge) * 12;

    //총 예상 저축액 :

    var totalAsset =
      intMonthlySaving * workPeriods +
      monthlyPension * pensionPeriods +
      intSavingsForOld +
      intSeverancePay;
    console.log(totalAsset);
    //은퇴 후 월 평균 생활비 가능 금액 ,차이 금액 ,  매월 필요 추가 저축액(노후대비)
    const possibleCostAfterRetire = totalAsset / retirePeriods;
    let lackAmount = retireMonthlyHopeCost - possibleCostAfterRetire;
    const requiredMonthlySaving = (lackAmount * retirePeriods) / workPeriods;
    setResult1(parseInt(possibleCostAfterRetire / 10000));
    setResult2(parseInt(requiredMonthlySaving / 10000));
    setResult3(parseInt(retireMonthlyHopeCost / 10000));
    setReadyPer(
      parseInt(
        (possibleCostAfterRetire /
          (possibleCostAfterRetire + retireMonthlyHopeCost)) *
          100
      )
    );
  };

  return (
    <LinearGradient
      colors={["#36D1DC", "#5B86E5"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
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
              onChangeText={(Number) => setAge(Number)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.infoText}>
              저축해 둔 노후자금을 입력하세요.
            </Text>
            <TextInput
              style={styles.inputFormat}
              label="나이"
              placeholder="50"
              onChangeText={(Number) => setSavingsForOld(Number)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.infoText}> 수령하실 퇴직금을 입력하세요. </Text>
            <TextInput
              style={styles.inputFormat}
              label="나이"
              placeholder="50"
              onChangeText={(Number) => setSeverancePay(Number)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.infoText}> 매달 저축액을 입력하세요. </Text>
            <TextInput
              style={styles.inputFormat}
              label="나이"
              placeholder="50"
              onChangeText={(Number) => setMonthlySaving(Number)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.infoText}> 일하신 기간을 입력하세요. </Text>
            <TextInput
              style={styles.inputFormat}
              label="나이"
              placeholder="50"
              onChangeText={(Number) => setWorkingYear(Number)}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.infoText}>
              {" "}
              희망하는 노후 월 생활비를 입력하세요.{" "}
            </Text>
            <TextInput
              style={styles.inputFormat}
              label="나이"
              placeholder="50"
              onChangeText={(Number) => setHopeCost(Number)}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={requireSavings}>
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
          <View style={styles.box}>
            <Text style={styles.infoText}>
              당신의 은퇴 후 월 평균 사용 가능 금액: {result1} 만원
            </Text>

            <Text style={styles.infoText}>
              당신의 목표 금액 : {result3} 만원
            </Text>
            <Text style={styles.infoText}>
              {" "}
              당신은 월 {result2} 만원의 추가 저축이 필요합니다.{" "}
            </Text>
            <Text style={styles.infoText}> 노후 대비율 : {readyPer} % </Text>
          </View>
        </View>
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
    height: 20,
    margin: 10,
    borderWidth: 1,
    //padding: 10,
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
  box: {
    flex: 0.3,
    borderRadius: 25,
    alignItems: "center",
  },
  resultText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
  },
});
