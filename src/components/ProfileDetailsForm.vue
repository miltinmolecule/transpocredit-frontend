<template>
  <form @submit.prevent="continueProcess('profile_details')">
    <div class="form-wrapper">
      <div class="profile-form-title">
        <div class="head-wrap">
          <span class="-icon"><i class="profile-icon"></i></span>
          <div>
            <h5>Profile Details</h5>
            <p>Complete your profile details.</p>
          </div>
        </div>
        <div class="img-field" :class="{ error: errors.profile_photo }">
          <input
            class="file-input"
            type="file"
            name="profile_photo"
            @change="fileChange"
            accept="image/*"
          />
          <img :src="previewImage" v-if="previewImage" alt="profile_image" />
          <span v-else
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
      <div class="form-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                name="surname"
                label="Surname"
                v-model="values.surname"
                @validateField="validateField('surname')"
                :error="errors.surname"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                name="other_names"
                label="Other names"
                v-model="values.other_names"
                @validateField="validateField('other_names')"
                :error="errors.other_names"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <CustomDatePicker
                name="dob"
                label="DOB"
                v-model="values.dob"
                @validateField="validateField('dob')"
                :error="errors.dob"
              />
              <!--   @selectedField="validateField('dob')" -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <CustomSelect
                name="state"
                label="State"
                :options="nigerian_states"
                v-model="values.country_state"
                :error="errors.country_state"
                @validateField="validateField('country_state')"
              />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                name="phone"
                label="Phone"
                v-model="values.phone"
                @validateField="validateField('phone')"
                :error="errors.phone"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                name="email"
                label="Email"
                v-model="values.email"
                @validateField="validateField('email')"
                :error="errors.email"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <CustomInput
            name="address"
            label="Address"
            v-model="values.address"
            @validateField="validateField('address')"
            :error="errors.address"
          />
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                label="License ID"
                name="license_file"
                type="file"
                v-model="values.license_file"
                @validateField="validateField('license_file')"
                :error="errors.license_file"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                label="Utility Id"
                name="utility_file"
                type="file"
                v-model="values.utility_file"
                @validateField="validateField('utility_file')"
                :error="errors.utility_file"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                label="Password"
                name="password"
                type="password"
                v-model="values.password"
                @validateField="validateField('password')"
                :error="errors.password"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <CustomInput
                label="Confirm Password"
                name="c_password"
                type="password"
                v-model="values.c_password"
                @validateField="validateField('c_password')"
                :error="errors.c_password"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="btn-footer">
        <b-button
          type="submit"
          class="profile-form-footer"
          block
          variant="primary"
          >Continue</b-button
        >
      </div>
    </div>
  </form>
</template>
<script>
import CustomInput from "./CustomInput.vue";
import * as yup from "yup";
import CustomSelect from "./CustomSelect.vue";
import CustomDatePicker from "./CustomDatePicker.vue";

const formSchema = yup.object().shape({
  utility_file: yup.string().required("utility doc is required").nullable(),
  license_file: yup.string().required("license doc is required").nullable(),
  email: yup
    .string()
    .email("Should be type of email")
    .required("Email address is required")
    .nullable(),
  phone: yup.string().required("Phone number is required").nullable(),
  country_state: yup.string().required("State is required").nullable(),
  dob: yup.string().required("Dob is required").nullable(),
  address: yup.string().required().nullable("Address is required").nullable(),
  other_names: yup.string().required("Others required").nullable(),
  surname: yup.string().required("Surname is required").nullable(),
  profile_photo: yup.string().required("Profile photo is required."),
  password: yup.string().required("Password is required").nullable(),
  c_password: yup.string().required("Password is required").nullable(),
});

export default {
  components: {
    CustomInput,
    CustomSelect,
    CustomDatePicker,
  },
  data() {
    return {
      previewImage: "",
      loading: false,
      otp: "",
      values: {
        profile_photo: "",
        surname: "",
        other_names: "",
        phone: "",
        utility_file: "",
        address: "",
        email: "",
      },
      errors: {
        profile_photo: "",
        surname: "",
        other_names: "",
        phone: "",
        utility_file: "",
        address: "",
        email: "",
      },
      nigerian_states: ["lagos", "ibadan", "abuja"],
    };
  },
  methods: {
    /*
      * ContinueProcess Func(x)
        Continue process for to check form fields
          * all input fields required
    */
    showModal() {
      this.$emit("showModal");
    },
    continueProcess(option) {
      /* Create payload from values */
      const payload = {
        surname: this.values.surname,
        other_names: this.values.other_names,
        email: this.values.email,
        phone: this.values.phone,
        address: this.values.address,
        license_file: this.values.license_file,
        profile_photo: this.values.profile_photo,
        utility_file: this.values.utility_file,
      };

    
      console.log("option", option, payload);
      console.log(this.$store);
      console.log(this.values);
      // this.loading = true;
      // formSchema
      //   .validate(this.values, { abortEarly: false })
      //   .then(() => {
      //     /* Call Endpoint for the Otp Verification */

      //     // Verify Otp
      //     console.log(this.$store, option);

      //     // Goto next Step
      //     // this.$emit("continueProcess", option);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     err.inner.forEach((e) => {
      //       this.errors = { ...this.errors, [e.path]: e.message };
      //     });
      //   });
    },

    /*
      * fileChange Func(x)
        accepts file name
        create preview image
        add update file for upload
    */
   
    fileChange(file) {
      const filePath = file.target;

      const photoData = new FormData();

      photoData.append(
        filePath.name,
        filePath.files[0],
        filePath.files[0].name
      );

      this.previewImage = URL.createObjectURL(filePath.files[0]);
      this.values = { ...this.values, profile_photo: this.previewImage };
      if (this.previewImage !== "") {
        this.errors = { ...this.errors, profile_photo: "" };
      }
    },

    validateField(field) {
      // console.log("Error checker", field);
      formSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          console.log(err);
          this.errors[field] = err.message;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.img-field {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: solid 1px $primary-color;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 0;
  }
}
</style>