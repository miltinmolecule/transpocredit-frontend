<template>
  <div class="header-wrapper">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand class="brand-logo" to="/">
        <img src="@/assets/images/svgs/logo.svg" alt="" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="showNavMenu ==='/home'">

          <b-nav-item to="#">Set for Hire</b-nav-item>
          <b-nav-item to="#">Get Vehicle</b-nav-item>
          <b-nav-item to="#">Local Dealers</b-nav-item>
          <b-nav-item to="#">Contact Us</b-nav-item>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: { },
  computed: {
    showNavMenu() {
      return this.$route.path
        }
  },
};
</script>

<style>
</style>