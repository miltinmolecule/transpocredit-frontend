<template>
  <div class="">
    <h2>Get Your dream Car in few Steps.</h2>
    <p class="mt-4">
      TranspoCredit is a platform designed for intending drivers to get a
      vehicle of their choice at an affordable cost and repay back on instalment
      within a specific time.
    </p>
    <div>
      <div class="stepppers-container mb-3">
        <div class="circle-wrapper">
          <div class="custom-circle">
            <span v-if="stepNumber === 1"
              ><font-awesome-icon :icon="faCheck"
            /></span>
          </div>
        </div>
        <p>Vehicle Details</p>
      </div>
      <div class="stepppers-container mb-3">
        <div class="circle-wrapper">
          <div class="custom-circle">
            <span v-if="stepNumber === 2"
              ><font-awesome-icon :icon="faCheck"
            /></span>
          </div>
        </div>
        <p>Profile Information</p>
      </div>
      <div class="stepppers-container mb-3">
        <div class="circle-wrapper">
          <div class="custom-circle">
            <span v-if="stepNumber === 3"
              ><font-awesome-icon :icon="faCheck"
            /></span>
          </div>
        </div>
        <p>Guarantor Information</p>
      </div>
      <div class="stepppers-container mb-3">
        <div class="circle-wrapper">
          <div class="custom-circle">
            <span v-if="stepNumber === 4"
              ><font-awesome-icon :icon="faCheck"
            /></span>
          </div>
        </div>
        <p>Agreement</p>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faCheck,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  props: { stepNumber: Number },
};
</script>

<style>
</style>