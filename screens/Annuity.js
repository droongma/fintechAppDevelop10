import React from "react-native";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { LinearGradient } from "expo-linear-gradient";

const Annuity = () => {

  const ment = "채연님에게 적합한 \n다양한 복지 혜택을 둘러보세요.";
  const keyword = "키워드 🎈"


    return (
        <View style={styles.container}>

            <View style={styles.search}>
                <TextInput style={styles.input} placeholder="키워드 검색" /> 
                <TouchableOpacity style={styles.iconbutton} onPress={() => alert("버튼")}>
                  <Image source={icons.search} />
                </TouchableOpacity>
            </View>

            <View style={{flex: 2.5}}>
              <ScrollView horizontal>
                  <View contentContainerStyle style={styles.card}>
                      <Text style={styles.text}>주택담보노후연금보증</Text>
                  </View>
                  <View contentContainerStyle style={styles.card}>
                      <Text style={styles.text}>card test</Text>
                  </View> 
                  <View contentContainerStyle style={styles.card}>
                      <Text style={styles.text}>card test</Text>
                  </View>
              </ScrollView> 
            </View>

            <View style={{flex: 1.3, alignItems: "center", borderWidth: 0.1 }}>
              <Text style={styles.text2}>{ment}</Text>
            </View>

            <View style={{flex: 0.7}}>
              <Text style={styles.text3}>{keyword}</Text>
            </View>

            <View style={{flex: 0.8, marginLeft: 10}}>
              <ScrollView horizontal>
                <TouchableOpacity style={styles.keywordButton}>
                  <Text style={{textAlign: "center", paddingVertical: 7}}>자녀</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keywordButton}>
                  <LinearGradient
                    colors={["#4960F9", "#39CCDD"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{flex: 1, borderRadius: 32}}
                  >
                    <Text style={{textAlign: "center", paddingVertical: 7}}>장애인</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keywordButton}>
                  <Text style={{textAlign: "center", paddingVertical: 7}}>공무원</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keywordButton}>
                  <Text style={{textAlign: "center", paddingVertical: 7}}>신체건강</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.keywordButton}>
                  <Text style={{textAlign: "center", paddingVertical: 7}}>노인</Text>
                </TouchableOpacity>               
              </ScrollView> 
            </View>

            <View style={{flex: 2}}>
                <ScrollView horizontal>
                  <View contentContainerStyle style={styles.card2}>
                      <Text style={styles.text}>card test</Text>
                  </View>
                  <View contentContainerStyle style={styles.card2}>
                      <Text style={styles.text}>card test</Text>
                  </View> 
                  <View contentContainerStyle style={styles.card2}>
                      <Text style={styles.text}>card test</Text>
                  </View>
              </ScrollView> 
          
            </View>               
        </View>
    )
}  

const styles = StyleSheet.create({ 
  container: {
    //flexDirection: 'row',
    // justifyContent: "center",
    // alignItems: "center", // 각 자식 아이템들이 가운데 높이에 위치하도록 정렬
    // //  marginTop: SIZES.padding * 6,
    // // paddingHorizontal: SIZES.padding * 2
    flex: 1
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16, // to provide rounded corners
    borderTopRightRadius: 16, // to provide rounded corners
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginLeft: 10,
    marginRight: 10,
    width: 264,
    height: 180
  },
  text: {
    textAlign: "center",
    //textAlignVertical: "center",
    paddingVertical: 70,
    borderBottomColor: '#bbb',
    borderBottomWidth: 0.1,
    fontSize: 24,
    marginLeft: 20,
    marginRight: 20,
  },
  search: {
    flex: 0.5, 
    marginBottom: 20,
    marginTop: 50,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    borderTopLeftRadius: 16, // to provide rounded corners
    borderTopRightRadius: 16, // to provide rounded corners
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: "white",
    fontSize: 18,
    paddingVertical: 20,
    paddingLeft: 15,
    flex: 8, 
    marginLeft: 1
  },
  iconbutton: {
    flex: 1,
    width: 1,
    height: 1,
  },
  text2: {
    borderRadius: 40,
    backgroundColor: "white",
    fontSize: 20,
    flex: 8, 
    //align: "center",
    margin: 10,
    textAlign: "auto",
    width: 370,
    height: 80,
    paddingLeft: 45,
    fontSize: 20,
    paddingVertical: 5, 
  },
  text3: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 10,
    fontWeight: 'bold',
    
  },
  keywordButton: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    width: 92,
    height: 32,
    marginLeft: 10,
    backgroundColor: "white",
    borderRadius: 32,
  },
  card2: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16, // to provide rounded corners
    borderTopRightRadius: 16, // to provide rounded corners
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  }
});


export default Annuity;
