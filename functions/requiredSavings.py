

age,savingsForOld,severancePay, monthlySaving = map(int,input("나이,노후 대비용 저축금액, 퇴직금, 매월 저축금액 ").split()) 
myData= {'age':age ,'savingsForOld':savingsForOld,'severancePay':severancePay, 'monthlySaving' :monthlySaving }
print(type(myData.get('monthlySaving')))
"""

expectAge,
retireAge,
pesionAge,
retireMonthlyHopeCost,



나이
노후 대비용 저축금액
퇴직금
매월 저축금액
국민연금 매월 수령 예상금액 


age, 
//sex, 
savingsForOld, 
severancePay,
monthlySaving,
monthlyPension,

"""

"""
총 예상 저축액 : totalAsset = (monthlySaving * workPeriods) + savingsForOld + severancePay + (monthlyPension *pensionPeriods)
// 월기준 
은퇴기간 : retirePeriods = (expectAge - retireAge) * 12
일 가능 기간: workPeriods = (retireAge - age)  *12
연금 수령 기간 pensionPeriods = (expectAge - pesionAge ) * 12

은퇴 후 월 평균 생활비 가능 금액 : possibleCostAfterRetire = totalAsset / retirePeriods 
차이 금액 : lackAmount = retireMonthlyHopeCost - possibleCostAfterRetire
매월 필요 추가 저축액(노후대비) requiredMonthlySaving= (lackAmount * retirePeriods) / workPeriods 
"""
 
 

def predictAsset(list):
    
    expectAge = 83
    retireAge = 50
    pesionAge = 65 
    retireMonthlyHopeCost = 21000000
    monthlyPension = 1000000    
     #은퇴기간 ,일 가능 기간,  연금 수령 기간 - 월 기준
    retirePeriods = (expectAge - retireAge) * 12
    workPeriods = (retireAge - list.get('age'))  *12
    print(retirePeriods)
    pensionPeriods = (expectAge - pesionAge ) * 12

    #총 예상 저축액 : 
    totalAsset = (list.get('monthlySaving') * workPeriods) + list.get('savingsForOld') + list.get('severancePay') + (monthlyPension *pensionPeriods)
    print(totalAsset)
    #은퇴 후 월 평균 생활비 가능 금액 ,차이 금액 ,  매월 필요 추가 저축액(노후대비)
    possibleCostAfterRetire = totalAsset / retirePeriods 
    lackAmount = retireMonthlyHopeCost - possibleCostAfterRetire
    requiredMonthlySaving= (lackAmount * retirePeriods) / workPeriods 
    result = {"possibleCostAfterRetire":int(possibleCostAfterRetire),"requiredMonthlySaving":int(requiredMonthlySaving) }
    print(lackAmount)
    return result 


    

    
print(predictAsset(myData))