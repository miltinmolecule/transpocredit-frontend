<template>
  <div class="form-wrapper">
    <div class="mb-5 profile-form-title">
      <div class="head-wrap">
        <span class="-icon"><i class="guarantor-icon"></i></span>
        <div>
          <h5>Guarantor Details</h5>
          <p>Fill your guarantor details.</p>
        </div>
      </div>
    </div>
    <form class="">
      <div class="guarantor">
        <p>Guarantor One</p>
        <CustomInput placeholder="Enter fullname" label="Full name" />
        <CustomInput placeholder="Enter email" label="Email" />
      </div>
      <div class="guarantor">
        <p>Guarantor Two</p>
        <CustomInput placeholder="Enter fullname" label="Full name" />
        <CustomInput placeholder="Enter email" label="Email" />
      </div>
      <div>
        <b-button class="" block variant="primary">Continue</b-button>
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