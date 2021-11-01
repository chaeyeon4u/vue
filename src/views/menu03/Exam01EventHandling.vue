<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01EventHandling
    </div>
    <div class="card-body class">
      <div>
        <h6>event handler</h6>
        <button class="btn btn-info btn-sm mr-2" v-on:click="$require(HandleBtn1)">button1</button>
        <button class="btn btn-info btn-sm mr-2" @click="HandleBtn2('vue is good', $event)" name="btn2">button2</button>
        <button class="btn btn-info btn-sm mr-2" @click="HandleBtn2('vue is good', $event)" name="btn3">button3</button>

        <hr/>
        <!-- spa는 깜빡이면 안된다. -->
        <a href="/" @click.prevent="handleLink1($event)">링크1</a>
        <hr/>

        <form>
          <div class="d-flex align-items-center justify-content-center">
            <input type="submit" valud="제출" class="btn btn-info btn-sm mr2"/>
            <button class="btn btn-info btn-sm mr2"></button>
            <input type="image" :src="require(`@/assets/logo.png`)"/>
            <div type="image" @click:ctrl="handleLink3()" :src="require(`@/assets/logo.png`)"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam01EventHandling",
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
    HandleBtn1(){
      console.log("handleBtn1 실행");
    },
    HandleBtn2(arg, event){//event 객체의 사용
      console.log("handleBtn2 실행");
      console.log("arg : ", arg);
      console.log("event : ", event);

      if(event.target.name === "btn2"){
        console.log("btn2 클릭됨");
      }else if(event.target.name === "btn3"){
        console.log("btn3 클릭됨");
      }
    },
    handleLink1(event){
      event.preventDefault();
      console.log("handleLink1 실행");
    },
    handleLink3(){
      console.log("handleLink3()");
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>