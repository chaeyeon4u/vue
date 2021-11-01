<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam05ForRepeatBinding
    </div>
    <div class="card-body">
      <h6>범위 반복</h6>
      <span v-for="n in 10" v-bind:key="n" class="mr-2">
        <!--require : assets은 url로 접근 불가히기 때문에 require이 붙는다.
            v-for와 v-if는 같이 사용하지 않는 것이 좋다.
            v-bind(:) 뒤에는 javascript 문법이 들어간다. 문자열 아니다. 백틱(`) 사용하면 문자열이랑 변수 동시에 사용 가능하다.-->
        <img :src="require(`@/assets/photos/photo${n}.jpg`)" height="160" v-if="n%2==0">
      </span>
    </div>

    <hr/>

    <h6>배열 항목 반복</h6>
    <div>
      <!-- photo는 그림 index는 숫자 -->
      <span v-for="(photo, index) in photos" v-bind:key="index">
        <img :src="require(`@/assets/photos/${photo}`)" height="160">
      </span>
    </div>

    <hr/>

    <h6>객체 배열 항목 반복</h6>
    <table class="table table-boardered">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Writer</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards" v-bind:key="board.bno">
          <td>{{board.bno}}</td>
          <td>{{board.btitle}}</td>
          <td>{{board.bwriter}}</td>
          <td>{{board.bdate}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
//import photoData from "../../data/photoData.js";
//import boardData from "../../data/boardData.js";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam05ForRepeatBinding",
  //추가하고 싶은 컴포넌트를 등록
  components:{
      
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      //photos : photoData.photos,
      //boards : boardData.boards,
      //board : boardData.board
      photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
      boards: [
        {bno:1, btitle:"제목1", bwriter:"글쓴이1", bdate:"2021-08-07"},
        {bno:2, btitle:"제목2", bwriter:"글쓴이2", bdate:"2021-08-08"},
        {bno:3, btitle:"제목3", bwriter:"글쓴이3", bdate:"2021-08-09"}
      ],
      board: {
        bno:4,
        btitle: "제목4",
        bcontent: "내용4",
        bwriter: "글쓴이4",
        bdate: "2021-08-10"
      }
    };
  },
  //컴포넌트 메서드 정의
  methods:{
  }
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>