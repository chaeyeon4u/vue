<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03Inject
    </div>
    <div class="card-body">
      <p>data1: {{data1}}</p>
      <p>data2: {{data2}}</p>
      <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
      <hr/>
      <child-a/>
    </div>
  </div>
</template>
<script>
import ChildA from "./ChildA.vue";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam03Inject", 
  //추가하고 싶은 컴포넌트를 등록
  components:{
    ChildA,
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data1: "top-parent-data1",
      data2: "top-parent-data2",
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    changeData(){
      this.data1 = "top-parent-data1_changed";
      this.data2 = "top-parent-data2_changed";
    },
  },
  //자손 컴포넌트가 사용할 수 있는 데이터 정의(not reactive... 아쉽....)
  provide(){
    return {
      provideData1: this.data1, 
      provideData2: this.data2, 
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>