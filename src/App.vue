<template>
  <div id="app">
      <MainHeader></MainHeader> 
        <main>
          <router-view/>
        </main>
      <MainFooter></MainFooter> 
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>
