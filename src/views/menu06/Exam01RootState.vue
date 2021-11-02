<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01RootState
    </div>
    <div class="card-body">
      <h6>[Root State 읽기]</h6>
      <p>userId 단방향 바인딩 : {{$store.state.userId}}</p>
      <p>userId 단방향 바인딩 : {{$store.getters.getUserId}}</p>
      <p>userId 단방향 바인딩(rendering 될 때마다 실행) : {{getUserId()}}</p>
      <p>userId 단방향 바인딩(데이터 변할 때마다 실행) : {{computedUserId}}</p>
      <p>userId 양방향 바인딩 : <input type="text" v-model="$store.state.userId"/></p>
      <hr/>

      <h6>[Root State 변경]</h6>
      <p>Component userId 양방향 바인딩 : <input type="text" v-model="userId"/></p>
      <div class="mt-2">
        <button class="btn btn-info btn-sm mr-2" @click="changeUserIdByMutation">userId 변경(mutation 동기 방식 이용)</button>
        <button class="btn btn-info btn-sm mr-2" @click="changeUserIdByAction">userId 변경(action 비동기 방식 이용)</button>
      </div>

      <child class="mt-2"/>
    </div>
  </div>
</template>
<script>
import Child from "./Child.vue";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01RootState",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    Child,
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      userId:"",
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    getUserId(){
      //return this.$store.state.userId;
      //return this.$store.getters.getUserId;
      return this.$store.getters["getUserId"];
    },
    changeUserIdByMutation(){
      this.$store.commit("setUserId", this.userId);
    },
    changeUserIdByAction(){
      this.$store.dispatch("setUserIdByAsync", {userId: this.userId, duration:3000});
    },
  },
  computed:{
    computedUserId(){
      //return this.$store.state.userId;
      //return this.$store.getters.getUserId;
      return this.$store.getters["getUserId"];
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>