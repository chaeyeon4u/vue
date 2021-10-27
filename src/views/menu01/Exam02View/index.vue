<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02View
    </div>
    <div class="card-body">
        <sub-a-component/>
        <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
        <button class="btn btn-info btn-sm  mr-2" @:click="goUrl">/menu01/exam01view</button>
        <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
        <button class="btn btn-info btn-sm  mr-2" @:click="goUrl">/menu01/exam01view</button>
    </div>
  </div>
</template>
<script>
import SubAComponent from "./SubAComponent";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam02View",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    SubAComponent,
  },
  //컴포넌트 데이터 정의
  data: function(){
    return {
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    //현재 url과 다른 경로로 이동할 경우 dbURL()
    //goUrl: function() {},
    //goUrl: ()=> {}
    goUrl() {
      this.$router.push("/menu01/exam01View")
        .catch(()=>{})//현 component의 router속성
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>