<template>
  <div class="card">
    <div class="card-header">
      Home View
    </div>
    <div class="card-body">
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    test() {
      var var1 = 1;
      var var2 = 2;
      console.log(var2);
    },
  },
};
</script>
