<template>
  <div class="wrap-main-content">
    <section>
      <div class="container">
        <div class="about-content">
          <div class="row">
            <div class="col-md-6">
              <h2>About Transpocredit</h2>
              <p>
                TranspoCredit is a project designed to reduce the unemployment
                rate within the country Nigeria by at least 3-5% by enabling
                people that are interested in transport business and repaying at
                an agreed instalment for a period of 1 to 3yrs when the total
                cost incurred on the vehicle would have been paid before the
                driver can fully have the right ownership of the vehicle.
              </p>
              <p>
                TranspoCredit is a platform designed to reach out to intending
                drivers and unemployed that are willing to go into the
                transportation business by getting a vehicle of their choice at
                an affordable cost and repay back on instalment within a
                specific time.
              </p>
            </div>
            <div class="col-md-6">
              <div class="img-wrap">
                <img
                  src="@/assets/img/transpo-section-bg.png"
                  alt="transpo-sectioning-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="action-view">
          <h2>Act Quickly</h2>
          <p>
            We love what we do and we do what our clients love & work with great
            clients all over the world to create thoughtful and purposeful
            websites
          </p>
          <p><i>COMING SOON...</i></p>
          <div class="btn-set">
            <a href="">
              <img src="@/assets/img/app-store-icon.png" alt="app-store-icon" />
            </a>
            <a href="">
              <img
                src="@/assets/img/google-play-icon.png"
                alt="google-play-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h3>Contact Us</h3>
          </div>
          <div class="col-md-6">
            <div class="form-container">
              <form action="">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="phone_no">Phone No.</label>
                  <input type="text" id="phone_no" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="text" id="email" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    rows="5"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary">SEND</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map-view">
              <div class="map-container">
                <GmapMap ref="mapRef"></GmapMap>
              </div>
              <p>
                <span><font-awesome-icon :icon="faMapPin" /></span>
                Where to find us</p>
              <div class="row">
                <div class="col-md-6">
                  <address>
                    492 Hudson Track Apt. <br />
                    708 763 Lang Meadows
                  </address>
                </div>
                <div class="col-md-6">
                  <ul class="vert-list">
                    <li><a href="">971-114-0510</a></li>
                    <li><a href="">766-997-6382</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { GmapMap } from 'vue2-google-maps'
export default {
  components: {
    GmapMap,
    FontAwesomeIcon
  },
  data() {
    return {
      faMapPin
    }
  },
  mounted () {
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 1.38, lng: 103.80})
    })
  }
};
</script>

<style>
</style>