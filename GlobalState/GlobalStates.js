import {createGlobalState }from 'react-hooks-global-state' // state를 global한 범위에서 사용하도록 해주는 라이브러리
export const {useGlobalState} = createGlobalState({activePage : "SignUp"});