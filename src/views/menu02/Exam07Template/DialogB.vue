<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <modal-dialog-template>
    <template v-slot:header>
      로그인
    </template>

    <template v-slot:body>
      <form>
        <div class="form-group">
          <label >Email address</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" autocomplete="email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control"  autocomplete="new-password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input">
          <label class="form-check-label">Check me out</label>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <button class="btn btn-info btn-sm" @click="$emit('close')">로그인</button>
      <button class="btn btn-info btn-sm" @click="$emit('close')">취소</button>
    </template>
  </modal-dialog-template>
</template>
<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"DialogB",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    ModalDialogTemplate
    
  },
  //컴포넌트 데이터 정의
  data() {
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

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

</style>