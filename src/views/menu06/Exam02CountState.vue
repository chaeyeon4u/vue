<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02CountState
    </div>
    <div class="card-body">
      <h6>[counter State 읽기]</h6>
      <p>counter/count 단방향 바인딩 : {{$store.state.counter.count}}</p>
      <p>counter/count 단방향 바인딩 : {{$store.getters["counter/getCount"]}}</p>
      <p>counter/count 단방향 바인딩(rendering 될 때마다 실행) : {{getCount()}}</p>
      <p>counter/count 단방향 바인딩(데이터 변할 때마다 실행) : {{computedCount}}</p>
      <p>counter/count 양방향 바인딩 : <input type="text" v-model.number="$store.state.counter.count"/></p>
      
      <hr/>

      <h6>[counter State 변경]</h6>
      <p>Component value 양방향 바인딩 : <input type="text" v-model.number="value"/></p>
      <div class="mt-2">
        <button class="btn btn-info btn-sm mr-2" @click="changeCountByMutation">counter/count 변경(mutation 동기 방식 이용)</button>
        <button class="btn btn-info btn-sm mr-2" @click="changeCountByAction">counter/count 변경(action 동기 방식 이용)</button>
        <!--<button class="btn btn-info btn-sm mr-2" @click="changeCountByActionTest">counter/count Test</button>-->
      </div>

    </div>
  </div>
</template>
<script>

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam02CountState",
  //추가하고 싶은 컴포넌트를 등록
  components:{
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      value:"",
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    getCount(){
      return this.$store.state.counter.count;
      //return this.$store.getters["counter/getCount"];
    },
    changeCountByMutation(){
      this.$store.commit("counter/setCount", this.value);
    },
    changeCountByAction(){
      this.$store.dispatch("counter/setCountByAsync", {value: this.value, duration:3000});
    },
    /*changeCountByActionTest(){
      this.$store.commit("counter/setCount", this.value);
    }*/
  },
  computed:{
    computedCount(){
      //return this.$store.state.counter.count;
      return this.$store.getters["counter/getCount"];
    }
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>