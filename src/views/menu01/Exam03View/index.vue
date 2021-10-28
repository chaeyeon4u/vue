<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03View
    </div>
    <div class="card-body">
      <div>
        <h6>선언적 방식 Component 전환</h6>
        <router-link to="/menu01/exam03view/subacomponent" class="btn btn-info btn-sm">SubAComponent</router-link>
        <router-link to="/menu01/exam03view/subbcomponent" class="btn btn-info btn-sm">SubBComponent</router-link>  
        
        <h6>프로그램 방식 Component 전환</h6>
        <button v-on:click="goUrl('a')" class="btn btn-info btn-sm">SubAComponent</button>
        <button @click="goUrl('b')" class="btn btn-info btn-sm">SubBComponent</button>  
      </div>
      <div class="mt-2">

        <!--subacomponent, subbcomponent 는 여기 들어간다!
            router > index.html에 child가 선언되어있기 때문 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam03View",
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
    goUrl(kind){
      this.$router.push(`/menu01/exam03view/sub${kind}component`)
        .catch(()=>{})
    }
  }
}

</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>