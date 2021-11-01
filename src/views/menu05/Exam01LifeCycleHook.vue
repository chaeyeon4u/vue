<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01LifeCycleHook
    </div>
    <div class="card-body">
      <p>data : {{data}}</p>
      <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
    </div>
    <hr/>
    <!-- 자식 컴포넌트에 데이터 전달!! -->
    <child :data="data"/>
  </div>
</template>
<script>
import Child from "./Child.vue";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01LifeCycleHook",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    Child
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data: "",
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    changeData(){
      this.data += Math.floor(10*Math.random());
    }
  },
  //LifeCycleHook 정의
  beforeCreate(){
    console.log("beforeCreate state");
  },
  created(){
    console.log("created state");
  },
  beforeMount(){  
    console.log("beforeMount state"); 
  },
  mounted(){
    console.log("mounted state"); 
  },
  beforeUpdate(){//prop변경, component rerendering
    console.log("beforeUpdate state");
  },
  updated(){
    console.log("updated state");
  },
  beforeDestroy(){
    console.log("beforeDestroy state");
  },
  destroyed(){
    console.log("destroyed state");
  },
  
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>