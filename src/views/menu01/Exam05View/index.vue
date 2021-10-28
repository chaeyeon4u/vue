<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam05View(URL 데이터 전달, Path Variable)
    </div>
    <div class="card-body">
      <h6>params(path variable)로 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam06view/1">exam06view/1</router-link></li>
        <li><router-link v-bind:to="`/menu01/exam06view/${bno1}`">exam06view/3</router-link></li>
        <li><router-link :to="{path: `/menu01/exam06view/${bno2}`}">exam06view/5</router-link></li>
        <li><router-link :to="{name: 'menu01_exam06view', params: {bno:bno3}}">exam06view/7</router-link></li>
      </ul>

      <h6>정적 프롭 객체 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam07view">exam07view</router-link></li>
      </ul>

       <h6>정적 프롭 객체 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam08view?kind=freeboard&color=blue">exam08view</router-link></li>
        <li><router-link v-bind:to="`/menu01/exam08view?kind=${kind2}&color=${color2}`">exam08view</router-link></li>
        <li><router-link :to="{path: `/menu01/exam08view?kind=${kind1}&color=${color1}`}">exam06view/7</router-link></li>
        <li><router-link :to="{name: 'menu01_exam08view', query:{kind:kind3,color:color3}}">exam06view/5</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam05View",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data: function(){
    return{
      bno1: 3,
      bno2: 5,
      bno3: 7,
      kind1:"freeboard",
      color1: "blue",
      kind2:"ab",
      color2:"bb",
      kind3:"cb",
      color3: "db"
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
  },
  //컴포넌트가 생성될 때 실행
  created(){
    console.log(this.$route);
    console.log(this.$route.query.color1);
    console.log(this.$route.query.kind1);
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>