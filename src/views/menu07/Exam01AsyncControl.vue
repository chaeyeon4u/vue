<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01AsyncControl
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">비동기 작업1</button>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">비동기 작업2</button>
      </div>

      <div v-if="loading" class="mt-3">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div v-if="!loading" class="mt-3">
        처리결과 {{result}}
      </div>

    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01AsyncControl",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      loading: false,
      result: ""
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    work(){
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("점심 먹으러 갑시다.");
        }, 3000);
      });
      return promise;
    },
    handleBtn1(){
      this.loading=true;

      this.work()
      .then((result)=>{
        this.result = result;
      })
      .catch((err)=>{
        console.log("처리 결과 : ", err);
      })
      .finally(()=>{
        this.loading = false;
      });
    },
    async handleBtn2(){
      this.loading=true;
      try{
        //work : 비동기, await는 동기 -> 비동기를 동기로 바꾼다.
        const result = await this.work();
        this.result = result;
      }catch(err){//
      }finally{
        this.loading=false;
      }
    }
    
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>