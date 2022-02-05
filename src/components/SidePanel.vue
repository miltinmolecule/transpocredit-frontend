<template>
  <div class="col-md-5">
    <div class="sidepanel-view">
      <h2>Get Your dream Car in few Steps.</h2>
      <p class="mt-4">
        TranspoCredit is a platform designed for intending drivers to get a
        vehicle of their choice at an affordable cost and repay back on
        instalment within a specific time.
      </p>
      <div>
        <div
          class="stepppers-container mb-3"
          v-for="(stepItem, s) in steplist"
          :key="s"
        >
          <div class="circle-wrapper">
            <div class="custom-circle">
              <span v-if="stepItem.count <= stepNumber">
                <font-awesome-icon :icon="faCheck" />
              </span>
            </div>
          </div>
          <p>{{ stepItem.title }}</p>
        </div>
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
      currentStep: 1,
      steplist: [
        {
          count: 1,
          title: "Profile Information",
        },
        {
          count: 2,
          title: "Vehicle Details",
        },
        {
          count: 3,
          title: "Agreement",
        },
        {
          count: 4,
          title: "Guarantor Information",
        },
      ],
    };
  },
  components: {
    FontAwesomeIcon,
  },
  props: {
    stepNumber: Number,
  },
};
</script>
<style lang="scss" scoped>
.sidepanel-view {
  padding: 0 3em 0 0;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 860px) {
    padding-top: 4em;
    height: auto;
  }
}
</style>