<template>
  <div>
    <h5>Hello World</h5>
    <router-link to="/" exact>Go To Landing</router-link>
    <p>Hello Word Component:</p>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Dashboard",
  components: {
    HelloWorld,
  },
};
</script>

<style lang=""></style>
