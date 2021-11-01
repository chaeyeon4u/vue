<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      ChildB
    </div>
    <div class="card-body">
      <p>product.no: {{product.no}}</p>
      <p>product.kind: {{product.kind}}</p>
      <p>no: {{no}}</p>
      <p>kind: {{kind}}</p>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"ChildB",
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
  //1. 부모에게 받고 싶은 값(객체로 받기, 객체의 속성으로 받기)
  props: [ "product", "no", "kind" ],
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>