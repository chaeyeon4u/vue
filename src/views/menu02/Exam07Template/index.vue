<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam07Template
    </div>
    <div class="card-body">
      <button class="btn btn-info btn-sm mr-2" @click="modalDialogTemplate=true">show ModalDialogTemplate</button>
      <button class="btn btn-info btn-sm mr-2" @click="dialogA=true">show DialogA</button>
      <button class="btn btn-info btn-sm mr-2" @click="dialogB=true">show DialogB</button>
    </div>
    <!--@close는 ModalDialogTemplate.vue의 $emit('close') 이벤트 발생시 실행-->
    <modal-dialog-template v-if="modalDialogTemplate" @close="modalDialogTemplate=false"/>
    <dialog-a v-if="dialogA" @close="dialogA=false"/>
    <dialog-b v-if="dialogB" @close="dialogB=false"/>
  </div>
</template>
<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
import DialogA from "./DialogA";
import DialogB from "./DialogB";

export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam07Template",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    ModalDialogTemplate,
    DialogA,
    DialogB
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      modalDialogTemplate: false,
      dialogA: false,
      dialogB: false
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