<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam04View(이름 있는 뷰)
    </div>
    <div class="card-body">
      <div class="d-flex flex-column container-fluid">
        <router-view ></router-view>
        <router-view name="rv1" class="mb-2"></router-view>
        <router-view name="rv2" class="mb-2"></router-view>
      </div>

      <div class="card-body">
        <sub-a-component/>
        <sub-b-component/>
        <sub-c-component/>
      </div>
    </div>
    
  </div>
</template>
<script>
//경로 @는 절대경로(src 다음부터)
import SubAComponent from '@/components/menu01/SubAComponent.vue';
import SubBComponent from '@/components/menu01/SubBComponent.vue';
import SubCComponent from '@/components/menu01/SubCComponent.vue';

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam04View",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    SubAComponent,
    SubBComponent,
    SubCComponent
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