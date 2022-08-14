var request = require("request"),
  cheerio = require("cheerio");

var url = "http://pensionkr.com/pensionpage";
let pensionTable = [];

request(url, function (err, res, html) {
  if (!err) {
    var $ = cheerio.load(html);
  }

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

    const array2 = [];
    var j = 0;

    const array = data.text().split("\n");
    for (var i = 0; i < array.length; i++) {
        if (array[i] == '' || array[i] == '  ')
            continue;
        else 
            array2[j++] = array[i].trim();
    }

    const pensionList = [];
    var j = 0;

    for (var i = 0; i < array2.length; i++) {
        if (i == 0 || i%10 == 0 || i%10 == 2)
            continue;
        else 
            pensionList[j++] = array2[i];
    }

    
    let index = 0
    for (let i = 0; i < 49; i++) {
        pensionTable[i] = [];
        for (let j = 0; j < 8; j++) {
            pensionTable[i][j] = pensionList[index].replace(",", "").replace(",", "");
            index++;
        }
    }
    
    predictPension(4032901, 48, 19, 60);
    //console.log(pensionTable);
  });
});

// parameter : 수입, 현재 나이, 일한 기간, 은퇴 예상 나이
function predictPension(income, age, workPeriod, retirementAge) {
    var pensionJoinPeriod = retirementAge - (age - workPeriod);
    var period = parseInt((pensionJoinPeriod / 5) - 1);
    
    if (period == 0)
        period += 1;
    if (period < 1 || income < pensionTable[0][0]) 
        return 0;

    //console.log(pensionTable[37][0]);
    for (var i = 0; i < 49; i++) {
        if (income <= parseInt(pensionTable[i][0])) {
            var result = pensionTable[i-1][period];
            break;
        }
    }
    
    console.log(result);
    return result;
}



