<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <button class="btn btn-info btn-sm">부모 메소드 호출</button>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Child",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      data: "child-data",
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    childMethod(){
      console.log("childMethod() 실행");
    },
    handleParentData(){
      console.log(this.$parent.data);
    },
    handleParentsData(){
      console.log(this.$parent.data);
      this.$parent.parametMethod;
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>