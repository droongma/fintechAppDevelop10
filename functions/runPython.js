var request = require("request"),
  cheerio = require("cheerio");

var url = "http://pensionkr.com/pensionpage";

request(url, function (err, res, html) {
  if (!err) {
    var $ = cheerio.load(html);
  }

  // 블로그 title 정보 가져오기
  $(".pensionkr_table3").each(function () {
    var post = {
      순번: "",
      "가입기간중기준 소득월액평균액(B값)": "",
      삭제할거: "",
      "10년": "",
      "20년": "",
      "25년": "",
      "30년": "",
      "35년": "",
      "40년": "",
    };

    var data = $(this);

    console.log(data.text().split(" "));
  });
});
