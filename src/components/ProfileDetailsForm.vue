<template>
  <div class="form-wrapper">
    <div class="mb-5 profile-form-title">
      <div class="head-wrap">
       <span class="-icon"><i class="profile-icon"></i></span>
        <div>
          <h5>Profile Details</h5>
          <p>Complete your profile details.</p>
        </div>
      </div>
      <div class="img-field">
        <input class="file-input" type="file" />
        <span
          ><svg
            width="15"
            height="15"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4663 23.5777C14.4671 23.7848 14.3853 23.9836 14.2389 24.13C14.0925 24.2764 13.8937 24.3582 13.6866 24.3574H12.1493C11.9423 24.3582 11.7435 24.2764 11.5971 24.13C11.4507 23.9836 11.3688 23.7848 11.3697 23.5777L11.3697 13.8267L1.61856 13.8267C1.41153 13.8275 1.21273 13.7456 1.06633 13.5992C0.919937 13.4528 0.838068 13.254 0.838917 13.047L0.838917 11.5097C0.838068 11.3026 0.919937 11.1038 1.06633 10.9574C1.21273 10.811 1.41153 10.7292 1.61856 10.73L11.3697 10.73L11.3697 0.978934C11.3688 0.771899 11.4507 0.573099 11.5971 0.426703C11.7435 0.280306 11.9423 0.198437 12.1493 0.199286H13.6866C13.8937 0.198437 14.0925 0.280306 14.2389 0.426703C14.3853 0.573099 14.4671 0.771899 14.4663 0.978934L14.4663 10.73L24.2174 10.73C24.4244 10.7292 24.6232 10.811 24.7696 10.9574C24.916 11.1038 24.9979 11.3026 24.997 11.5097L24.997 13.047C24.9979 13.254 24.916 13.4528 24.7696 13.5992C24.6232 13.7456 24.4244 13.8275 24.2174 13.8267L14.4663 13.8267L14.4663 23.5777Z"
              fill="#9D9D9D"
            />
          </svg>
        </span>
      </div>
    </div>
    <form class="profile-form">
      <div class="row">
        <div class="col-md-6">
          <CustomInput label="Surname" />
        </div>
        <div class="col-md-6">
          <CustomInput label="Other names" />
        </div>
        <div class="col-md-6">
          <CustomInput label="DOB" />
        </div>
        <div class="col-md-6">
          <CustomInput label="State" />
        </div>
        <div class="col-md-6">
          <CustomInput label="Phone" />
        </div>
        <div class="col-md-6">
          <CustomInput label="Email" />
        </div>
      </div>
      <CustomInput label="Address" />
      <div class="row">
        <div class="col-md-6">
          <CustomInput label="License ID" type="file" />
        </div>
        <div class="col-md-6">
          <CustomInput label="Utility Id" type="file" />
        </div>
      </div>
      <div>
        <b-button class="profile-form-footer" block variant="primary"
          >Continue</b-button
        >
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