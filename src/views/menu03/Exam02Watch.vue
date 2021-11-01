<!-- 컴포넌트 UI 정의
    주의할 점 : 루트 Element가 하나만 있어야한다. -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Watch
    </div>
    <div class="card-body">
      <div class="form-group row">
          <label class="col-sm-2 col-form-label">UserId</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="userId">
          </div>
      </div>
      <hr/>
      <form>      
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.name">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Company</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="product.company">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Price</label>
          <div class="col-sm-10">
            <input type="number" :class="`form-control ${bgColor}`" v-model.number="product.price">
          </div>
        </div>
      </form> 
      <hr/>
      <button @click="handleButton" class="btn btn-info btn-sm">product 객체 변경</button>    
    </div>
  </div>
</template>
<script>
export default {
  //component의 대표 이름(devTools에 나오는 이름)
  name:"Exam02Watch",
  //추가하고 싶은 컴포넌트를 등록
  components:{
    
  },
  //컴포넌트 데이터 정의
  data() {
    return {
      userId: "user1", 
      product: {
        name: "정장",
        company: "한섬",
        price: 100000
      },
      bgColor: "",
    };
  },
  //컴포넌트 메서드터 정의
  methods:{
    handleButton(){
      this.product = {
        name: "정장1",
        company: "한섬1",
        price: 500000
      };
    },
    
  },
  //computed : 새로운 속성을 만드는 목적
  watch: {//데이터 변경시 감시
    userId(newValue, oldVlaue){
      console.log("newValue : ", newValue);
      console.log("oldVlaue : ", oldVlaue);
      console.log("userId : ", this.userId);
    },
    product: {//oldValue 얻을 수 없다!
      deep: true,
      handler(newValue, oldVlaue){
        console.log("newValue : ", newValue);
        console.log("oldVlaue : ", oldVlaue);
        console.log("userId : ", this.userId);
      }
    },
    "product.name"(newValue, oldVlaue){
        console.log("newValue : ", newValue);
        console.log("oldVlaue : ", oldVlaue);
        console.log("product.name : ", this.product.name);
    },
    "product.price"(newValue, oldVlaue){
      if(newValue < 0){
        this.bgColor = "bg-danger";
      }else if(newValue <= 100000){
        this.bgColor = "bg-success";
      }else{
        this.bgColor = "bg-primary";
      }
    }
  },
}
</script>
<!--scoped : 지역변수, 없으면 전역 style이 된다. 붙이는게 좋다
    컴포넌트 스타일-->
<style scoped>

</style>