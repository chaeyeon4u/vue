
export default {
  //모듈 이름이 namespace로
  namespaced: true,
  // state와 mutations는 반드시 정의해야함
  /* 상태 정의 */
  state: {
    count: 0,
  },
  /*상태값을 읽는 메서드 정의(Getter) */
  getters: {
    getCount(state, getters, rootState, rootGetters){
      return state.count;
    }
  },
  /*상태값을 변경하는 동기 메서드 정의(Setter) */
  mutations: {
    setCount(state, payload){
      state.count += payload;
    }
  },
  /*상태값을 변경하는 비동기 메서드 정의(Setter) */
  actions: {
    setCountByAsync(context, payload){//payload = {value:xxx, duration:3000}
      new Promise((resolve, reject) =>{
        setTimeout(() => {
          context.commit("setCount", payload.value);
          resolve(context.state.count);//data에 넘겨줌
        }, payload.duration);
      })
      .then((data) => {
        console.log("counter/count 상태 변경 성공 : ", data);
      })
      .catch((err) => {
        console.log("counter/count 상태 변경 실패 : ", err);
      });
    }
  },
}
