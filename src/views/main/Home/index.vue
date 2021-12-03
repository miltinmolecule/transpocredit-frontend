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
        <div class="row">
          <div class="col-md-12">
            <h2 class="custom-title">Hot deals</h2>
          </div>
          <div class="col-md-12">
            <div class="carousel-wrapper">
              <carousel
                class="hotdeals-carousel"
                :dots="false"
                :items="1"
                :nav="false"
              >
                <template slot="prev">
                  <span class="custom-prev">
                    <font-awesome-icon :icon="faAngleLeft" />
                  </span>
                </template>
                <div class="auto-card-view">
                  <img src="@/assets/img/car-image.png" />
                  <div class="auto-card-caption">
                    <h6>Vehicle Name</h6>
                    <p>Total Package</p>
                    <h4><span>#</span>300,000,000</h4>
                  </div>
                </div>
                <div class="auto-card-view">
                  <img src="@/assets/img/car-image.png" />
                  <div class="auto-card-caption">
                    <h6>Vehicle Name</h6>
                    <p>Total Package</p>
                    <h4><span>#</span>300,000,000</h4>
                  </div>
                </div>
                <div class="auto-card-view">
                  <img src="@/assets/img/car-image.png" />
                  <div class="auto-card-caption">
                    <h6>Vehicle Name</h6>
                    <p>Total Package</p>
                    <h4><span>#</span>300,000,000</h4>
                  </div>
                </div>
                <template slot="next">
                  <span class="custom-next">
                    <font-awesome-icon :icon="faAngleRight" />
                  </span>
                </template>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="custom-title">How Does It Works</h2>
          </div>
          <div class="col-md-6">
            <div class="card transpo-card">
              <span class="-icon"><i class="investor-icon"></i></span>
              <h6>Small investors</h6>
              <p>
                Small investors have the opportunity to partake in the business
                with a minimum of one vehicle. The vehicle must conform in terms
                of documentations, comprehensive insurance and everything that
                makes a vehicle roadworthy. We will link the vehicle registered
                to a driver that will be using the vehicle for transportation
                and repaying on weekly basis to us while we remit monthly to our
                small investors. (Note, there will be a regulated amount for the
                small investors to achieve the purpose of the project)
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card transpo-card">
              <span class="-icon"><i class="driver-icon"></i></span>
              <h6>Intending drivers</h6>
              <p>
                Intending drivers have the opportunity to choose a vehicle of
                their choice (model, year, colour etc) and go through the
                registration process to align with terms and conditions. After
                successful registration, we will look at the drivers choice of
                the vehicle first from the local small investors. If we could
                get the choice of vehicle locally, we will get it delivered to
                the driver ASAP but otherwise, we will ship in the choice of the
                vehicle which may take 1-2 months for purchase, shipment,
                clearing, registrations and handling over to the intending
                driver.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card transpo-card">
              <span class="-icon"><i class="statistics-icon"></i></span>
              <h6>Monitoring and controlling</h6>
              <p>
                All activities will be done online except in cases of
                confirmation of address, handing over of the vehicle and every
                other thing that will require us to meet with the intending
                driver or small investors. We have an app where all applications
                will be done, approved, monitored, and controlled throughout the
                period of partnering with TrasnposCredit.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card transpo-card">
              <span class="-icon"><i class="payment-icon"></i></span>
              <h6>Successful Payment</h6>
              <p>
                Ownership of the vehicle remains TranspoCredit or small
                investors until all the agreed payments have been made before we
                transfer ownership to the intending driver. Failure to complete
                payment, TranspoCredit has the right to withdraw the vehicle and
                reissue it to a serious intending driver at a reduced cost
                depending on how long it has been used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="custom-header">
              <h2>Features</h2>
              <p>
                TrasnpoCredit basically will be an online service provider that
                will benefit both the intending drivers and people (small
                investors)
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-option right">
              <div class="dot-it"></div>
              <h6>Small Investors</h6>
              <p>
                Take Ehya wherever you go so that you know what’s going on with
                your money at all times.
              </p>
            </div>
            <div class="feature-option right">
              <div class="dot-it"></div>
              <h6>Track your spending</h6>
              <p>
                Follow your plan by keeping track of your spending throughout
                the month.
              </p>
            </div>

            <div class="feature-option right">
              <div class="dot-it"></div>
              <h6>Activity statistics</h6>
              <p>
                See statistics of income and expenses and displaying the
                forecast in the next period.
              </p>
            </div>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div class="feature-option">
              <div class="dot-it"></div>
              <h6>Secure transfer</h6>
              <p>
                Take Ehya wherever you go so that you know what’s going on with
                your money at all times.
              </p>
            </div>
            <div class="feature-option">
              <div class="dot-it"></div>
              <h6>Budget that works</h6>
              <p>
                Create budgets you can actually stick to, and see how you’re
                spending your money.
              </p>
            </div>
            <div class="feature-option">
              <div class="dot-it"></div>
              <h6>Total control</h6>
              <p>
                Take a full control of your expenses. Landy will help you to do
                that anywhere anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="custom-header">
              <h2>Testimonials</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nunc vitae mauris orci morbi. Sed facilisis.
              </p>
            </div>
          </div>
          <div class="col-md-12">
            <Testimonial />
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
                <!-- <GmapMap ref="mapRef"></GmapMap> -->
              </div>
              <p>
                <span class="pin"
                  ><font-awesome-icon :icon="faMapMarker"
                /></span>
                Where to find us
              </p>
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
// import { mapState } from "vuex";
import {
  faMapMarker,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import carousel from "vue-owl-carousel";

// import { GmapMap } from "vue2-google-maps";
import Testimonial from "../../../components/Testimonial.vue";

export default {
  components: {
    // GmapMap,
    carousel,
    FontAwesomeIcon,
    Testimonial,
  },
  data() {
    return {
      faMapMarker,
      faAngleLeft,
      faAngleRight,
    };
  },
  mounted() {
    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({ lat: 1.38, lng: 103.8 });
    // });
  },
};
</script>

<style>
</style>