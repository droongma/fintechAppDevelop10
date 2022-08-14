import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";

const RetireMyInvest = () => {
  const ment = "채연님에게 적합한 \n다양한 복지 혜택을 둘러보세요.";
  const keyword = "키워드 🎈";
  const headerHeight = useHeaderHeight();
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('장애인');

  const dataList = [
    {
      title: '투자상품의 이동방향과 이동비율 TOP 5', 
      color: "#ECF7FE",
      imgsrc : images.investAd1,
    },
    {
      title: '이번 분기의 인기 수익 운용 포트폴리오 TOP 10', 
      color: "#F3F3EA",
      imgsrc : images.investAd2,
    },
    {
      title: 'HOT한 인기 퇴직연금 투자 상품',
      color: "#FBE9C1",
      imgsrc : images.investAd3,
    },
    {
      title: '수익률 상위 상품',
      color: "#FBECFE",
      imgsrc : images.investAd4,
    }
  ];

  const featuredWelfareList = [
      {
        id: 136334,
        title: "주택담보노후연금보증",
        tag1: "#중앙부처 복지사업",
        tag2: "#중장년 #노년",
        tag3: "#생활지원 #서민금융",
      },
      {
        id: 253124,
        title: "노인평생교육지원",
        tag1: "#평생교육 지업사원",
        tag2: "#중장년 #노년",
        tag3: "#여가지원 #교육지원",
      },
      {
        id: 76967,
        title: "노인정서생활지원",
        tag1: "#중앙부처 복지사업",
        tag2: "#중장년 #노년",
        tag3: "#생활지원 #정서지원",
      },
  ]

  const keywords = ["노인", "자녀", "장애인", "공무원", "신체건강"];
  const keywordWelfares = keywords.reduce((accumulator, value) => {
    return {...accumulator, [value]: ''};
  }, {});

  keywordWelfares[keywords[0]] = {idx: 0, data: ["은퇴후 생활 지원", "노인 자산관리 지원", "노인 취미교실 모집", "노인 건강상담 안내"]};
  keywordWelfares[keywords[1]] = {idx: 1, data:["양육비 지원", "교육비 지원", "아동스포츠 교육 모집", "한국어 교실"]};
  keywordWelfares[keywords[2]] = {idx: 2, data:["장애인 연금", "장애인 출산 지원", "장애인 이동 지원", "장애인 인재양성 코스 모집"]};
  keywordWelfares[keywords[3]] = {idx: 3, data:["공무원 정신건강 지원센터", "공무원 연금", "공무원 취미교실"]};
  keywordWelfares[keywords[4]] = {idx: 4, data:["건강센터 안내", "치료비 지원", "재활치료 지원", "생활스포츠 교실", "직장인 병원치료 지원", ]};


  function renderFeaturedWelfares() {
    const renderItem = ({ item, index }) => (
      <View style={{...styles.welfareItemStyle}}>
          <LinearGradient
            width={SIZES.width * 0.7}
            borderRadius={SIZES.radius}
            colors={["#36D1DC", "#5B86E5"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
          >
          <View style={{  padding: SIZES.padding, marginTop: 20, marginLeft: 10,}}>
              <Text style={{ ...FONTS.h2, color: 'white' }}>{item.title}</Text>
          </View>

          <View style={{ paddingHorizontal: SIZES.padding,  }}>
              <Text style={{ ...FONTS.h4, color: 'white',}}>{item.tag1}</Text>
              <Text style={{ ...FONTS.h4,  marginTop: SIZES.padding, color: 'white',}}>{item.tag2}</Text>
              <Text style={{ marginVertical: SIZES.padding, ...FONTS.h4, color: 'white',}}>{item.tag3}</Text>
          </View>
          <Text style={{ 
            marginVertical: SIZES.padding, 
            ...FONTS.body4, 
            alignSelf: 'flex-end',
            marginRight: 30,
            color: 'white',
          }}>
            자세히 보기
          </Text>
          </LinearGradient>
      </View>
    )
  

    return (
      <View>
        {
          featuredWelfareList.length > 0 &&
          <FlatList
            data={featuredWelfareList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id}
            horizontal
            showsHorizontalScrollIndicator={true}
          />
        }
      </View>
    )
  }
  
  function renderDataCards() { 
    const renderItem = ({ item, index }) => (
      <View style={{...styles.welfareItemStyle, backgroundColor: item.color}}>
        <View style={{  padding: SIZES.padding, marginLeft: 10,}}>
            <Text style={{ ...FONTS.h1, }}>{item.title}</Text>
        </View>
        <Image source={item.imgsrc} alignSelf='center' resizeMode="contain"></Image>
      </View>
    )

    return (
      <View style={{marginBottom: 20,}}>
        {
          dataList.length > 0 &&
          <FlatList
            data={dataList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={true}
          />
        }
      </View>
    )
  }

  // 최종적으로 리턴할 것
  return (
    <ScrollView style={{
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

      
      <View style={{...styles.whiteBox, overflow: 'hidden'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="eye" size={30} color="#000"/>
          <Text style={{...FONTS.h4, textAlign: 'center', marginHorizontal: 15, color: 'black',  }}>
            채현님의 IRP 계좌 수익률 현황
          </Text>
        </View>
        <Text style={{...FONTS.h2, marginLeft: 10,}}>52,319,800 원</Text>
        <Text style={{...FONTS.h3, color: 'red', marginLeft: 15,}}>+3,976,305(7.6%)</Text>
        <Image source={images.gain_graph} alignSelf='center' resizeMode="contain"></Image>
      </View>
      {/* {renderFeaturedWelfares()} */}
      {renderDataCards()}
    </ScrollView>
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
  whiteBox: {
    width : SIZES.width * 0.9, 
    // height: SIZES.height * 0.1,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#4580F2',
    paddingVertical: 10,         
    borderRadius: 15,
    borderColor: 'blue',
    backgroundColor: COLORS.white, 
    alignSelf: "center"
  },
  welfareItemStyle: {
    width: SIZES.width * 0.7,
    marginRight: SIZES.padding,
    marginLeft: SIZES.padding,
    marginTop: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
})
 

export default RetireMyInvest;
