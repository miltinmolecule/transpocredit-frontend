<template>
  <div class="">
    <ProcessHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import ProcessHeader from '../components/ProcessHeader.vue';
export default {
  components: { ProcessHeader },
};
</script>
<style lang="scss" scoped>
  main {
    height: calc(100vh - 75px);
  }
</style>