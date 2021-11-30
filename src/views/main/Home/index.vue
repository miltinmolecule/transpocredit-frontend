<template>
  <div class="custom-wrapper">
    <section class="banner-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex align-items-center">
            <div class="title-wrapper">
              <h2>Get Your dream Car.</h2>
              <p>
                TranspoCredit is a platform designed for intending drivers to
                get a vehicle of their choice at an affordable cost and repay
                back on instalment within a specific time.
              </p>
              <div class="button--group">
                <button class="btn btn-primary">Download App</button>
                <button class="btn btn-outline">
                  Learn More
                  <span>
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 0.929688L9.5 2.42969L14.0703 7H0V9H14.0703L9.5 13.5703L11 15.0703L18.0703 8L11 0.929688Z"
                        fill="#FFC5C0"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section :style="{height: '400px'}">
      <div class="abt-wrapper mt-5">
        <div class="container">
          <div class="row abt-wrapper--bg">
            <div class="col-md-4">
              <h2>About Transpocredit</h2>
              <p class="mt-4">
                TranspoCredit is a project designed to reduce the unemployment
                rate within the country Nigeria by at least 3-5% by enabling
                people that are interested in transport business and repaying at
                an agreed instalment for a period of 1 to 3yrs when the total
                cost incurred on the vehicle would have been paid before the
                driver can fully have the right ownership of the vehicle.
                TranspoCredit is a platform designed to reach out to intending
              </p>
              <p>
                TranspoCredit is a platform designed to reach out to intending
                drivers and unemployed that are willing to go into the
                transportation business by getting a vehicle of their choice at
                an affordable cost and repay back on instalment within a
                specific time .
              </p>
            </div>
            <div class="col-md-8 position-relative">
              <div class="img-wrap">
                <img src="@/assets/images/about-bg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hot-deal">
      <!-- <div class="container"> -->
        <carousel
          :autoplay="true"
          :autoplaySpeed="2000"
          :items="4"
          :nav="false"
          :loop="true"
          :margin="15"
          :dots="false"
        >
          <div class="carousel-item">
            <img src="@/assets/images/car1.png" alt="img" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/car1.png" alt="img" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/car1.png" alt="img" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/car1.png" alt="img" />
          </div>
        </carousel>
      <!-- </div> -->
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: {
    carousel,
  },
};
</script>

<style>
</style>