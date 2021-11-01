<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <modal-dialog-template>
    <template v-slot:header>
      DialogA
    </template>
    <template v-slot:body>
      <p> DialogA 내용입니다. </p>
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
  name:"DialogA",
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

</style>