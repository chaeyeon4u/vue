<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      ChildA
    </div>
    <div class="card-body">
      <p>prop1 : {{prop1}}</p>
      <p>prop2 : {{prop2}}</p>
      <p>productNo : {{productNo}}</p>
      <p>productKind : {{productKind}}</p>
      <p>productPrice : {{productPrice}}</p>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"ChildA",
  //추가하고 싶은 컴포넌트를 등록
  components:{
  },
  //컴포넌트 데이터 정의
  data() {
    return {
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
  },
  props:[//1. 부모에게 받고싶은 값, (부모가 전달해주는 값)
    "prop1",
    "prop2",
    "productNo",
    "productKind",
    "productPrice"
  ]
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>