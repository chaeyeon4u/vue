<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02EventEmit
    </div>
    <div class="card-body">
      <p class="mb-2">counter: {{counter}}</p>
      <!--child에서 이벤트 발생시 함수 실행
        counter는 부모->자식으로 렌더링될 때 전달되는 변수-->
      <child @child-event-1="handleChildEvent1"
             @child-event-2="handleChildEvent2"
             :counter="counter"
             @counter-increament="handleCounterIncreament"
             @counter-decreament="handleCounterDecreament"/>
    </div>
  </div>
</template>
<script>
import ChildC from '../Exam01Props/ChildC.vue';
import Child from "./Child.vue";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam02EventEmit",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    Child, 
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      counter: 0
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    handleChildEvent1(arg){
      console.log(arg);
    },
    handleChildEvent2(arg1, arg2){
      console.log(arg1);
      console.log(arg2);
    },
    handleCounterIncreament(value){
      this.counter += value;  //데이터가 바뀌면 다시 렌더링되어 자식쪽으로 바인딩된다
    },
    handleCounterDecreament(){
      if(this.counter > 0){
        this.counter -= 5;
      }
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>