<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam04Ref
    </div>
    <div class="card-body">
      <button class="btn btn-info btn-sm mr-2" @click="handleChildData">자식 데이터 읽기</button>
      <button class="btn btn-info btn-sm mr-2" @click="handleChildChildmeCh">자식 메소드 호출</button>
      <hr/>
      <h4></h4>
      <child ref="childRef"/>
      <input type="text" ref="childRef" class="m-2"/>
      <button class="btn btn-info btn-sm mr-2" @click="handlefocus">요소 포커스 주기</button>
      <button class="btn btn-info btn-sm mr-2" @click="handleInputValue">요소의 값 변경</button>
      <hr/>
    </div>
  </div>
</template>
<script>
import Child from "./Child.vue";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam04Ref", 
  //추가하고 싶은 컴포넌트를 등록
  components:{
    Child, 
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data: "parent-data"
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    parentMethod(){
      console.log("parentMethod() 실행");
    },
    handleChildData(){
      console.log(this.$refs.childRef.data);
    }, 
    handleChildMethod(){
      this.$refs.childRef;
    },
    handlefocus(){
      this.$refs.inputRef;
    },handleInputValue(){
      this.$refs.inputRef.value += "a";
    }

  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>