# 노후모아 어플
핀테크 인턴십 코스 10조에서 만든 노후모아 어플의 소스코드 저장소입니다.

## 어플의 목적
은퇴를 걱정하는 사람들이 이용하기 편리한 맞춤형 은퇴자산 관리 서비스 제공

## 어플의 개발환경
- 사용한 프로그래밍 언어 : **React Native(버전 0.68)**
- 코드 작성에 사용한 에디터 : Visual Studio Code
- 어플 테스트용 안드로이드 에뮬레이터 : Pixel 2 API 30

## 개발에 사용한 주요 라이브러리
- **@react-navigation/drawer** : 서랍형(drawer) 메뉴 구현에 사용하는 drawer navigation 라이브러리. **사용자가 직접 원하는 메뉴를 선택하도록 할 때 유용하다.**

- **@react-navigation/stack** : stack navigation 라이브러리. **사용자가 화면 내에서 버튼 등을 눌러 다른 화면으로 이동하려는 상황일 때, 이것을 쓰면 유용하다.**
## 어플의 구성

|메뉴 설명 |탐색 메뉴바(drawer navigation) 이미지 |
| ---------|------------------ |
|1. 오른쪽과 같이 드로어 메뉴바에 총 12개의 메뉴 표시 <br/> 2. 알림 화면과 회원가입 화면은 메뉴바에 표시되지 않음.<br/>  3. 따라서 **전체적으로는 총 14개의 메뉴 존재** <br/> 4. 어플의 오른쪽 위에 있는 알림 아이콘을 직접 클릭해야만 알림 페이지로 이동이 가능.|<img src="https://user-images.githubusercontent.com/11453455/186305915-4c386931-e196-4d66-a9c3-a96e9ab4e286.png" width=350/>|

## 시연 영상
아래의 링크로 들어가면 50초 정도의 시연 영상이 있습니다.

**링크** : https://vimeo.com/742489493

## 자기 핸드폰으로 어플 실행하는 방법:
1. 안드로이드는 Expo를, iOS는 Expo Go라는 앱을 스토어에서 찾아 설치한다.
2. 컴퓨터로 **아래의 링크**에 접속한 후, **화면에 표시되는 qr코드를 핸드폰으로 스캔한다. 이때, 컴퓨터와 핸드폰이 서로 같은 와이파이에 연결되어 있어야 한다.** 이후 실행을 기다린다.
    
    **링크 :   [https://expo.dev/@agb2594/fintechAppDevelop10?serviceType=classic&distribution=expo-go](https://expo.dev/@agb2594/fintechAppDevelop10?serviceType=classic&distribution=expo-go)**
    
    * 만약 자기가 가진 것이 핸드폰밖에 없어 qr 스캔을 못하는 경우, 핸드폰으로 Expo나 Expo Go 앱을 실행한 다음, **아래의 링크**를 ‘Enter URL manually'란에 복사하여 붙여넣고 connect를 누르면 실행이 된다.
    
    **링크** : **exp://exp.host/@agb2594/fintechAppDevelop10?release-channel=default**
    
3. 앱이 실행이 되면, 즐겁게 사용해봅시다 ㅎㅎ


