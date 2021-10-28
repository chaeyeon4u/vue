<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Directives
    </div>
    <div class="card-body">
      <div>
        <img src="@/assets/photos/photo1.jpg" width="300px"/>
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" width="300px"/>
      </div>
      <hr/>
      <button class="btn btn-info btn-sm" @click="changeData">변경</button>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01Directives",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data: function(){
    return {
      photoFileName: "photo2.jpg"
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    changeData(){
     if(this.photoFileName === "photo2.jpg"){
       this.photoFileName = "photo3.jpg";
     }else{
       this.photoFileName = "photo2.jpg";
     }
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>