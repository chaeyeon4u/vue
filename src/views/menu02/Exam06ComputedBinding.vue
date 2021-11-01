<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam06ComputedBinding 
    </div>
    <div class="card-body">
      <div>
        <p>ssn1: {{ssn1}}</p>
        <p>ssn2: {{ssn2}}</p>
        <p>date: {{date}}</p>
        <p>ssn: {{ssn1}}-{{ssn2.charAt(0) + "******"}}</p>
        <p>ssn: {{computedSsn}}</p>
        <p>ssn: {{getSsn()}}</p>
      </div>
      <button @click="changeData" class="btn btn-info btn-sm mt-2">변경</button>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam06ComputedBinding",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      ssn1:"990426",
      ssn2: "2222222",
      date: new Date(),
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    getSsn(){
      console.log("getSsn() 실행됨")
      const ssn = this.ssn1 + this.ssn2.charAt(0) + "******";
      return ssn
    },
    changeData(){
      console.log("changeData() 실행됨")
      this.date = new Date()
      this.ssn2 = "121212"
    }
  },
  computed:{
    computedSsn(){
      console.log("computedSsn() 실행됨")
      const ssn = this.ssn1 + this.ssn2.charAt(0) + "******";
      return ssn
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>