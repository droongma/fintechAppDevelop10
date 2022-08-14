import axios from "axios";
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useCallback,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  Alert,
  FlatList,
} from "react-native";

const Item = React.memo(
  ({
    item: {
      basDt,

      ctg,
      cmpyNm,
      qtrBnfRt,
      bnfRt3yr,
      bnfRt5yr,
      bnfRt7yr,
    },
  }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{cmpyNm}</Text>
        <Text style={styles.title}>{qtrBnfRt}</Text>
      </View>
    );
  }
);

export default ProductReco = ({ navigation }) => {
  const [companyList, setCompanyList] = useState([]);

  const dataList = () => {
    try {
      axios({
        method: "get",
        url: "https://apis.data.go.kr/1160100/service/GetOfficialNoticeInfoService/getRetirementPensionBenefitRate?serviceKey=U4DXfTSAqo7xJ52R9hWeNB5uVtsgW55ge9IWQYcpW56ZfVs%2BTbYQxBZC09CfMtoSz%2BgTlWcEWn2%2BxP6ZZDAskg%3D%3D&resultType=json",
      })
        .then(function (response) {
          const result = response.data.response.body.items.item;

          const list = [];
          for (let i = 0; i < result.length; i++) {
            list.push({
              basDt: result[i].basDt, //날짜
              bzds: result[i].bzds, // 회사 타입
              cmpyNm: result[i].cmpyNm, //회사명
              totalRt:
                (result[i].qtrBnfRt +
                  result[i].bnfRt3yr +
                  result[i].bnfRt5yr +
                  result[i].bnfRt7yr +
                  result[i].bnfRt10yr) /
                5, //퇴직연금 투자 상품 수익률
            });
          }

          var temp = 0;

          for (let i = 0; i < list.length - 1; i++) {
            if (list[i].totalRt < list[i + 1].totalRt) {
              temp = list[i];
              list[i] = list[i + 1];
              list[i + 1] = temp;
            }
          }

          const top = [];
          for (let i = 0; i < 3; i++) {
            top.push(list[i]);
          }
          setCompanyList(top);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
      alert("Error", e);
    } finally {
    }
  };
  dataList();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={companyList}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    padding: 10,
    fontSize: 32,
  },
});
