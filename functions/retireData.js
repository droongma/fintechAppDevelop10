//url = 'https://apis.data.go.kr/1160100/service/GetOfficialNoticeInfoService/getRetirementPensionBenefitRate?serviceKey=hfJvdPemckjU7lcCQD1MgH2xtoQpmcD%2B5aw%2BGcZN1kxZ9dZuhUReliPXJLBugToIa9OBq5uAhofMspWKq0HMuQ%3D%3D'
import axios from "axios";

export default function Detail_PhotoStory({ route, navigation }) {
  const [image, setImage] = useState();
}

useEffect(() => {
  try {
    axios({
      method: "get",
      url: "https://apis.data.go.kr/1160100/service/GetOfficialNoticeInfoService/getRetirementPensionBenefitRate?serviceKey=hfJvdPemckjU7lcCQD1MgH2xtoQpmcD%2B5aw%2BGcZN1kxZ9dZuhUReliPXJLBugToIa9OBq5uAhofMspWKq0HMuQ%3D%3D",
    })
      .then(function (response) {
        const result = response.data;
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
    alert("Error", e);
  } finally {
  }
}, [storyIdx]);
