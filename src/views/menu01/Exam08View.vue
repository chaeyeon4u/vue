<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam08View
    </div>
    <div class="card-body">
      <!--data 얻는법 1-->
      <div>kind: {{$route.query.kind}}</div>
      <div>color: {{$route.query.color}}</div>
      <!--data 얻는법 2-->
      <div>kind: {{kind}}</div>
      <div>color: {{color}}</div>

      <hr/>
      <button @click="goHome">홈으로 이동</button>
      <button @click="goBack">뒤로 이동</button>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam08View",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data: function(){
    return {
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    goHome(){
      this.$router.push("/");
    },
    goBack(){
      this.$router.go(-1);
    },
  },
  //컴포넌트가 생성된 후 실행되는 메서드
  props: ["kind", "color"],
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>