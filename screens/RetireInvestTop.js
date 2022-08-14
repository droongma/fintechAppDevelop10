import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";

const RetireInvestTop = () => {
  const headerHeight = useHeaderHeight();
  const [search, setSearch] = React.useState('');

  const topData = [
    {
        text: '한국투자퇴직연금인덱스40증권자투자신탁'
    },
    {
        text: '한국퇴직연금글로벌브랜드파워증권투자'
    },
    {
        text: '신한글로벌밸런스EMP[채권혼합-재간접형](C-e)'
    },
    {
        text: '한국투자글로벌전기차&배터리[주식](C-e)'
    },
    {
        text: 'AB미국그로스증권투자신탁[주식-재간접형](C-e)'
  },
  ]


  return (
    <View style={{
      flex: 1, 
      ...styles.container, 
      marginTop: headerHeight
    }}>
      <View style={{
        ...styles.container,
        // marginHorizontal: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row', 
        alignItems: 'center',}}>
        <SearchBar
          round
          containerStyle={{
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            width: SIZES.width * 0.75,
            marginHorizontal: 10,
            marginVertical: 10,
            backgroundColor: "#fff",
            padding: 0,
          }}
          // inputContainerStyle={{
          // }}
          inputStyle={{
            fontSize: 20,
            color: 'black',
          }}
          lightTheme={true}
          searchIcon={{size: 30}}
          onChangeText={(text)=>{
            console.log(text);
            setSearch(text);
          }}
          onClear={(text)=>{
            setSearch('');
          }}
          placeholder="키워드를 검색하세요!"
          value={search}
          // style={styles.textInputStyle}
        />
        <Icon name="filter" size={30} color="#000"/>
      </View>

      <View style={{ ...styles.Box1}}>
          <Text style={{...FONTS.h2, textAlign: 'center', marginHorizontal: 25, color: 'black',  }}>
            최근 5영업일간 유입이 가장 많은 투자상품 <Text style={{color: 'red'}}>Top 5</Text>는?
          </Text> 
          <Image style={{alignSelf: 'center', height: SIZES.height * 0.15, resizeMode: 'contain'}} source={images.invest_logo1}/>
      </View>
      <ScrollView>
          {topData.map((data, index) => (
              <View style={{ 
                  ...styles.whiteBox,
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginTop: (index!==0) ? 15 : 0,
                  overflow: 'hidden'
                }} key={index}>
                  <Text style={{
                      ...FONTS.h2,
                      marginHorizontal: 5,
                  }}>
                      {(index + 1) + "위 - " + data.text}
                  </Text>
                  <View style={{ // 버튼의 가운데 정렬을 위해 사용
                    flex: 1,
                    flexDirection: 'column',
                    marginVertical: 20,
                    borderRadius: 15,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                    <Button style={{
                        borderRadius: 10,
                        // marginHorizontal: 20, 
                      }} 
                      title="기간 수익률 보러가기"
                    />
                  </View>
              </View>
          ))}
      </ScrollView>
      {/* {renderCardData()}  */}
    </View>
  )
}  

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    // width: SIZES.width * 0.7,
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    position: 'absolute',
    left: 50,
    top: 30,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  Box1: {
    width : SIZES.width * 0.8, 
    // height: SIZES.height * 0.1,
    marginVertical: 20,
    paddingTop: 5,
    // paddingVertical: 10,         
    borderRadius: 15,
    backgroundColor: "#FFF3FF", 
    alignSelf: "center"
  },

  whiteBox: {
    width: SIZES.width * 0.7,
    // height: SIZES.height * 0.3,
    borderWidth: 2,
    // marginTop: SIZES.height * 0.05,
    // paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "white",
    alignSelf: "center"
  }

})
  
export default RetireInvestTop;
