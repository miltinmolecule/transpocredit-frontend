<template>
  <div class="body">
    <HeaderView />
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h6>Explore New</h6>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">How it works</a></li>
              <li><a href="">Sign Up</a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h6>Contact Us</h6>
            <ul>
              <li><a href="">800-987-9001</a></li>
              <li><a href="">Support@Noacreative.co</a></li>
            </ul>
            <address>
              5, Alhaji Shodeke street, <br />
              cement Ikeja, <br />
              Lagos, Nigeria.
            </address>
            <ul class="social-media-links">
              <li>
                <a href="">
                  <font-awesome-icon :icon="faFacebookSquare" />
                </a>
              </li>
              <li>
                <a href="">
                  <font-awesome-icon :icon="faInstagramSquare" />
                </a>
              </li>
              <!-- <li>
                <a href="">
                  <font-awesome-icon :icon="faAngleLeft" />
                </a>
              </li> -->
            </ul>
          </div>
          <!-- <div class="col-md-3">
            <h6>News Letters</h6>
            <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
          </div> -->
          <div class="col-md-4">
            <h6>About Us</h6>
            <ul>
              <li><a href="">Terms of Services</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <p>© 2021 Transpocredit. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import HeaderView from "../components/HeaderView.vue";
export default {
  components: { HeaderView, FontAwesomeIcon },
  data() {
    return {
      faFacebookSquare,
      faInstagramSquare,
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  main {
    flex: 1;
  }
}
</style>