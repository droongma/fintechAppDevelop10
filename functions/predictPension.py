from bs4 import BeautifulSoup
import pandas as pd

def getPensionData() :
    url = f"http://pensionkr.com/pensionpage"
    tables = pd.read_html(url)

    df = pd.DataFrame(tables[0])
    df.columns = df.columns.droplevel(0)
    df = pd.DataFrame(tables[0], columns=['가입기간중기준 소득월액평균액(B값)', '10년', '20년', '25년', '30년', '35년', '40년'])
    print(df)
    print(df.loc[0][1])

    return df
    

def predictMyPension(income, age, workPeriod, retirementAge) :
    df = getPensionData()
    pensionJoinPeriod = retirementAge - (age - workPeriod)
    index = (pensionJoinPeriod//5) - 2 
    if index ==0 :
      index+=1
    if index < 1 or income < df.loc[0][0]:
      return 0

    # 예를 들어 소득이 55만원… 14년 근무이면..?
    for i in range(1,49) :
      if income <= df.loc[i][0] :
        result = df.loc[i-1][index]
        break
    
    return result
        

predictMyPension(550000, 34, 3, 49)