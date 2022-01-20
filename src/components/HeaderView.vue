<template>
  <header class="app-header">
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <div class="container">
        <b-navbar-brand to="/" class="brand-logo">
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
            <b-nav-item href="#">Set for Hire</b-nav-item>
            <b-nav-item to="/get-vehicle">Get Vehicle</b-nav-item>
            <b-nav-item href="#" class="btn btn-primary">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <div class="banner-view">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="banner-caption">
              <h1>Get Your dream Car.</h1>
              <p>
                TranspoCredit is a platform designed for intending drivers to
                get a vehicle of their choice at an affordable cost and repay
                back on instalment within a specific time.
              </p>
              <div class="btn-cap">
                <button class="btn btn-primary">Contact Us</button>
                <a href="">learn more
                  <span><font-awesome-icon :icon="faArrowRight" /></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="banner-images">
              <img src="@/assets/img/car-image.png" alt="car-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default {
  components: { FontAwesomeIcon},
  data() {
    return {
      faArrowRight
    }
  }
};
</script>

<style>
</style>