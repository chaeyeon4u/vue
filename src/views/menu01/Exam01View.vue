<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Element01View
    </div>
    <div class="card-body">
      <h6>선언적 방식 화면 이동</h6>
      <router-link class="btn btn-info btn-sm" to="/menu01/exam02view">/menu01/exam02view</router-link>
      <router-link class="btn btn-info btn-sm" v-binid:to="`/menu01/exam02view`">/menu01/exam02view</router-link>
      <router-link class="btn btn-info btn-sm" :to="{path:'/menu01/exam02view'}">/menu01/exam02view</router-link>
      <router-link class="btn btn-info btn-sm" :to="{name: '/menu01/exam02view'}">/menu01/exam02view</router-link>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Element01View",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data: function(){
    return {
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