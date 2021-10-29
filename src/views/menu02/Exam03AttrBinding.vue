<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03AttrBinding
    </div>
    <div class="card-body">
      <p>
        <!--데이터 속성명으로 바인딩 하고싶으면 v-bind: 또는 : , @ 를 써라.
          ``는 문자열이 있을 경우 사용-->
        <img v-bind:src="require(`@/assets/photos/${imgName1}`)" height="160px" class="mr-2"/>
        <img :src="require(`@/assets/photos/${imgName2}`)" height="160px" class="mr-2"/>
      </p>
      <div>
        <!--데이터 속성명으로 바인딩 하고싶으면 v-bind: 또는 : , @ 를 써라.-->
        <p v-bind:class="className">아름다운 풍경</p>
        <p :style="css">가을에는 Vue를 공부하고 싶어요.</p>
        
      </div>
      <hr/>
      <button class="btn btn-info btn-sm" v-on:click="changData">변경</button>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam03AttrBinding",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      imgName1: "photo1.jpg",
      imgName2: "photo2.jpg",
      className: "class1",
      css: "color:blue",
      toggle: true,
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    change(){
      this.imgName1 = (this.imgName1==="photo1.jpg")? "photo2.jpg": "photo1.jpg";
      this.imgName2 = (this.imgName2==="photo2.jpg")? "photo1.jpg": "photo2.jpg"; 
      this.className = (this.className==="class1") ? "class2": "class1";
      this.css = (this.css==="color:blue")? "color:red" : "color:blue";
    },
    changData(){
      if(this.toggle) {
        this.imgName1 = "photo3.jpg";
        this.imgName2 = "photo4.jpg";
        this.className = "class2";
        this.css = "color: red;";
      } else {
        this.imgName1 = "photo1.jpg";
        this.imgName2 = "photo2.jpg";
        this.className = "class1";
        this.css = "color: blue";
      }
      this.toggle = !this.toggle;
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>
.class1{
  color: red;
}
.class2{
  color: blue;
}
</style>