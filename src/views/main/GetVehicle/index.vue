<template>
  <div class="get-vehicle">
    <div class="container">
      <div class="row">
        <div class="col-md-5 d-flex align-items-center">
          <SidePanel :stepNumber="step" />
        </div>
        <div class="col-md-7 d-flex justify-content-center">
          <div class="vehicle--process">
            <template v-if="step === 1">
              <div>
                <div v-if="true">
                  <VehicleDetailsForm />
                </div>
                <div v-else>
                  <AvailableVehicle />
                </div>
              </div>
            </template>
            <template v-if="step === 2">
              <ProfileDetailsForm />
            </template>
            <template v-if="step === 3">
              <GuarantorsForm />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VehicleDetailsForm from "@/components/VehicleDetailsForm.vue";
import SidePanel from "@/components/SidePanel";
import ProfileDetailsForm from "@/components/ProfileDetailsForm.vue";
import AvailableVehicle from "@/components/AvailableVehicle.vue";
import GuarantorsForm from "@/components/GuarantorsForm.vue";

export default {
  data() {
    return {
      step: 1,
    };
  },
  components: {
    VehicleDetailsForm,
    SidePanel,
    AvailableVehicle,
    ProfileDetailsForm,
    GuarantorsForm
  },
};
</script>

<style>
</style>