<template>
  <div class="get-vehicle">
    <div class="container">
      <div class="row">
        <div class="col-md-5 d-flex align-items-center">
          <div class="">
            <h2>Get Your dream Car in few Steps.</h2>
            <p class="mt-4">
              TranspoCredit is a platform designed for intending drivers to get
              a vehicle of their choice at an affordable cost and repay back on
              instalment within a specific time.
            </p>
            <div>
              <div class="stepppers-container mb-3">
                <div class="circle-wrapper">
                  <div class="custom-circle">
                    <span v-if="step === 1"><font-awesome-icon :icon="faCheck" /></span>
                  </div>
                </div>
                <p>Vehicle Details</p>
              </div>
              <div class="stepppers-container mb-3">
                <div class="circle-wrapper">
                  <div class="custom-circle">
                    <span v-if="step === 2"><font-awesome-icon :icon="faCheck" /></span>
                  </div>
                </div>
                <p>Profile Information</p>
              </div>
              <div class="stepppers-container mb-3">
                <div class="circle-wrapper">
                  <div class="custom-circle">
                    <span v-if="step === 3"><font-awesome-icon :icon="faCheck" /></span>
                  </div>
                </div>
                <p>Guarantor Information</p>
              </div>
              <div class="stepppers-container mb-3">
                <div class="circle-wrapper">
                  <div class="custom-circle">
                    <span v-if="step === 4"><font-awesome-icon :icon="faCheck" /></span>
                  </div>
                </div>
                <p>Agreement</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 d-flex justify-content-center">
          <div class="vehicle--process">
            <template v-if="step === 1">
              <VehicleDetailsForm />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VehicleDetailsForm from "../../../components/VehicleDetailsForm.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      step: 1,
      faCheck,
    };
  },
  components: {
    VehicleDetailsForm,
    FontAwesomeIcon,
  },
};
</script>

<style>
</style>