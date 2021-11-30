<template>
  <div class="body">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: { Header },

}
</script>

<style>

</style>