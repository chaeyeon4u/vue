import Vue from 'vue'
import Vuex from 'vuex'

import counter from "./counter";

import axiosConfig from "@/apis/axiosConfig";

Vue.use(Vuex)

export default new Vuex.Store({
  // state와 mutations는 반드시 정의해야함
  /* 루트 상태 정의 */
  state: {
    userId: "",
    authToken: "",
  },
  /* 루트 상태값을 읽는 메서드 정의(Getter) */
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state){
      return state.authToken;
    }
  },
  /* 루트 상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setuthToken(state, payload){
      state.authToken = payload;
    }
  },
  /* 루트 상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {
    setTestByAsync(context, payload){
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration);
      }).then((data)=>{
        console.log("성공", data);
      }).catch((error)=>{
        console.log("실패", error);
      })
    },
    
    setUserIdByAsync(context, payload) { // payload = {userId:xxx, duration:3000, ...}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setUserId", payload.userId); // mutations을 이용해 상태 변경
          resolve(context.state.userId); // -> then(data)로 전달됨
        }, payload.duration);
      })
      .then((data) => { // 성공하면
        console.log(`userId 상태 변경 성공: ${data}`);
      })
      .catch((err) => { // 실패하면
        console.log("userId 상태 변경 실패: ", err);
      });
    },

    saveAuth(context, payload){//payload = {userId:xxx, authToken:xxx}
      //상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setuthToken", payload.authToken);
      //브라우저 리프래쉬때 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);
      //로그인 성공 후에 모든 요청은 요청 헤더에 Authrozation을 추가하도록 설정
      axiosConfig.addAuthHeader(payload.authToken);
    },

    loadAuth(context, payload){
      //세션 스토리지에 저장된 내용
      context.commit("setUserId", sessionStorage.getItem("userId") || "");
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");
      if(context.state.authToken !== ""){
        axiosConfig.addAuthHeader(payload.state.authToken);
      }
    },

    deleteAuth(context, payload){
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      axiosConfig.removeAuthHeader();
    }
  },
  /* 루트가 아닌 자식 상태를 정의한 모듈을 가져오기 */
  modules: {
    counter
  }
})
