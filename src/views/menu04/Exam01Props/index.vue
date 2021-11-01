<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <!--2. child에 값 바인딩-->
      <child-a :prop1="data1"
          :prop2="data2"
          :product-no="pno"
          :product-kind="pkind"
          :product-price="pprice"/>
      <hr/>
      <!--2. child에 값 바인딩-->
      <child-b :product="product" v-bind="product"/><!--product : product-->
      <!--v-bind="product" 쓰지마라잉 "no", "kind" : product-->
      <hr/>
      <child-c :propD="'hello world~'"
               :propA="3"
               :propB="3"
               :propC="52"
               :propE="9"
               :propF="{message: 'hello, Chaeyeon'}"
               :propG="['black', 'pink', 'in', 'your', 'area']"
               :propI="5"/>
    </div>
  </div>
</template>
<script>
import ChildA from "./ChildA.vue";//Router에 따로 등록하지 않아도 된다.
import ChildB from "./ChildB.vue";
import ChildC from "./ChildC.vue";


export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01Props",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    ChildA,
    ChildB,
    ChildC,
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data1:"value1",
      data2:"value2",
      pno : "1",
      pkind: "bag",
      pprice: 1000,
      product: {
        no: 2,
        kind: "정장",
      }
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>