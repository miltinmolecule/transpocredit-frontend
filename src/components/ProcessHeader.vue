<template>
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <div class="container">
        <b-navbar-brand href="#" class="brand-logo">
          <img
            src="@/assets/img/transpocredit-logo.png"
            alt="transpocredit-logo"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav> </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto link-set">
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
};
</script>

<style>
</style>