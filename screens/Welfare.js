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
        title: "주택담보노후연금보증",
        tag1: "#중앙부처 복지사업",
        tag2: "#중장년 #노년",
        tag3: "#생활지원 #서민금융",
      },
      {
        title: "노인평생교육지원",
        tag1: "#평생교육 지업사원",
        tag2: "#중장년 #노년",
        tag3: "#여가지원 #교육지원",
      },
      {
        title: "노인정서생활지원",
        tag1: "#중앙부처 복지사업",
        tag2: "#중장년 #노년",
        tag3: "#생활지원 #정서지원",
      },
  ]

  const keywords = ["자녀", "장애인", "공무원", "신체건강", "산업재해"];

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
            keyExtractor={(item, index) => index}
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
            keyExtractor={(item, index) => index}
            horizontal
            showsHorizontalScrollIndicator={true}
            
          />
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
    justifyContent: 'center',
    // height: SIZES.h1,
    marginRight: SIZES.padding,
    marginLeft: SIZES.padding,
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: COLORS.gray,
    overflow: "hidden",
    alignItems: 'center',
  },
})
 

export default Welfare;
