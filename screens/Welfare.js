import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, TouchableOpacity, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useHeaderHeight } from "@react-navigation/elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from "react-native-elements";
import { fonts } from "react-native-elements/dist/config";

const Welfare = () => {
  const ment = "채연님에게 적합한 \n다양한 복지 혜택을 둘러보세요.";
  const keyword = "키워드 🎈";
  const headerHeight = useHeaderHeight();
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('장애인');

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

  function renderKeywordCategory() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity 
        onPress={()=>{
          setCategory(item);
        }}
      >
        <View style={{...styles.keywordCategoryStyle,
        backgroundColor: item===category? COLORS.blue: COLORS.gray }}>
          <Text style={{...FONTS.h3, marginVertical: 5,}}>{item}</Text>
        </View>
      </TouchableOpacity>
    )

    return (
      <View>
        {
          <FlatList
            data={keywords}
            renderItem={renderItem}
            keyExtractor={(item, index) => "keyasd" + index}
            horizontal
            showsHorizontalScrollIndicator={true}
            
          />
        }
      </View>
    )
  }

  function renderKeywordWelfares() {
    const renderItem = ({ item, index }) => (
      <TouchableOpacity 
        activeOpacity={1}
      >
        <View style={{...styles.KeywordWelfareStyle,borderRadius: 10, }}>
          <View style={{...styles.KeywordWelfareInnerStyle,borderRadius: 10, }}>
            <Text style={{...FONTS.h2, marginVertical: 5, marginHorizontal: 10}}>{item}</Text>
          </View>
          <Text style={{...FONTS.body3, marginVertical: 5, alignSelf: 'center'}}>자세히 보기</Text>
        </View>
      </TouchableOpacity>
    )

    return (
      <View style={{marginTop: 10,}}>
        {
          keywords.map((keyword, index) => (
            (keyword===category) ? (
                <FlatList
                  key={index}
                  data={keywordWelfares[keyword].data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => 'vb'+index}
                  horizontal
                  showsHorizontalScrollIndicator={true}   
                />
            ) : (null)
          ))
        }
      </View>
    )
  }

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

      {renderFeaturedWelfares()}
      <View style={{...styles.whiteBox}}>
          <Text style={{...FONTS.h4, textAlign: 'center', marginHorizontal: 15, color: 'white',  }}>
            채현님의 상황에 맞는 다양한 복지 혜택을 둘러보세요
          </Text>
      </View>
      
      {/* 키워드 검색 헤더  */}
      <View style={{flexDirection: 'row', marginTop: 15,}}>
        <View style={{
          flexDirection: 'row',
          width: SIZES.width * 0.3,
          marginRight: SIZES.width * 0.05,
          marginLeft: SIZES.width * 0.05,
          justifyContent: 'center'
        }}>
          <Text style={{...FONTS.h4}}>키워드 검색</Text>
          <Text> 🔥 </Text>
        </View>

        <View style={{flexDirection: 'row', 
          width: SIZES.width * 0.5,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Text style={{color:COLORS.gray}}>View ALL</Text>
          <View style={{flexDirection: 'row', }}>
            <Text style={{...FONTS.h5}}>전화 걸기  </Text>
            <Icon name="phone" size={25} color="#000"/>
          </View>
        </View>
      </View>
      
      {renderKeywordCategory()}
      {renderKeywordWelfares()}
      
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
    height: SIZES.height * 0.1,
    marginTop: 20,
    paddingVertical: 10,         
    borderRadius: 15,
    backgroundColor: "#5494DA", 
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
  keywordCategoryStyle: {
    width: SIZES.width * 0.4,
    height: 60,
    justifyContent: 'center',
    borderRadius: 10,
    // height: SIZES.h1,
    marginRight: SIZES.padding,
    marginLeft: SIZES.padding,
    marginTop: 5,
    backgroundColor: COLORS.gray,
    overflow: "hidden",
    alignItems: 'center',
  },

  KeywordWelfareStyle: {
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.3,
    marginRight: SIZES.padding,
    marginLeft: SIZES.padding,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGreen,
    overflow: "hidden",
  },
  KeywordWelfareInnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * 0.4,
    height: SIZES.height * 0.2,
    // marginRight: SIZES.padding,
    // marginLeft: SIZES.padding,
    // marginVertical: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightblue,
    overflow: "hidden",
  },
})
 

export default Welfare;
