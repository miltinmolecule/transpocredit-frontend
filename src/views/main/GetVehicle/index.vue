<template>
  <section class="get-vehicle">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h2>Get Your dream Car in few Steps.</h2>
          <p class="mt-4">
            TranspoCredit is a platform designed for intending drivers to get a
            vehicle of their choice at an affordable cost and repay back on
            instalment within a specific time.
          </p>
          <div>
            <div class="stepppers-container mb-3">
              <div class="circle-wrapper">
                <div class="custom-circle"></div>
              </div>
              <p>Vehicle Details</p>
            </div>
            <div class="stepppers-container mb-3">
              <div class="circle-wrapper">
                <div class="custom-circle"></div>
              </div>
              <p>Profile Information</p>
            </div>
            <div class="stepppers-container mb-3">
              <div class="circle-wrapper">
                <div class="custom-circle"></div>
              </div>
              <p>Guarantor Information</p>
            </div>
            <div class="stepppers-container mb-3">
              <div class="circle-wrapper">
                <div class="custom-circle"></div>
              </div>
              <p>Agreement</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 offset-2">
        <!-- <div :style="{width: '90%'}">
           <VehicleDetailsForm />
        </div> -->
       <div v-if="true">
         <AvailableVehicle />
       </div>
       <div v-if="false">
         <ProfileDetailsForm />
       </div>
       <div v-if="false">
         <GuarantorsForm />
       </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AvailableVehicle from '../../../components/AvailableVehicle.vue';
import GuarantorsForm from '../../../components/GuarantorsForm.vue';
import ProfileDetailsForm from '../../../components/ProfileDetailsForm.vue';
// import VehicleDetailsForm from "../../../components/VehicleDetailsForm.vue";
export default {
  components: {
    AvailableVehicle,
    ProfileDetailsForm,
    GuarantorsForm
    // VehicleDetailsForm,
  },
};
</script>

<style>
</style>