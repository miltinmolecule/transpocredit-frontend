<template>
  <div class="form-wrapper">
    <div class="mb-5 form-title">
       <span class="-icon"><i class="vehicle-detail-icon"></i></span>
      <h5>Vehicle Details</h5>
    </div>
    <form class="">
      <CustomInput placeholder="Select vehicle brand" label="Vehicle Brand" />
      <CustomInput label="Vehicle Model" placeholder="Select vehicle model" />
      <CustomInput label="Vehicle Year" placeholder="Select vehicle year" />
      <div class="btn-footer">
        <button class="btn btn-block btn-primary">Continue</button>
      </div>
    </form>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  components: {
    CustomInput,
  },
};
</script>

<style>
</style>