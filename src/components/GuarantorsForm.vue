<template>
  <form class="" @submit.prevent="continueProcess('guarantor_details')">
    <div class="form-wrapper">
      <div class="profile-form-title">
        <div class="head-wrap">
          <span class="-icon"><i class="guarantor-icon"></i></span>
          <div>
            <h5>Guarantor Details</h5>
            <p>Fill your guarantor details.</p>
          </div>
        </div>
      </div>

      <div class="form-body">
        <div class="guarantor">
          <p>Guarantor One</p>
          <CustomInput
            name="g_one_fullname"
            label="Full name"
            v-model="values.g_one_fullname"
            @validateField="validateField('g_one_fullname')"
            :error="errors.g_one_fullname"
          />
          <CustomInput
            name="g_one_email"
            label="Email"
            v-model="values.g_one_email"
            @validateField="validateField('g_one_email')"
            :error="errors.g_one_email"
          />
        </div>
        <div class="guarantor">
          <p>Guarantor Two</p>
          <CustomInput
            name="g_two_fullname"
            label="Full name"
            v-model="values.g_two_fullname"
            @validateField="validateField('g_two_fullname')"
            :error="errors.g_two_fullname"
          />
          <CustomInput
            name="g_two_email"
            label="Email"
            v-model="values.g_two_email"
            @validateField="validateField('g_two_email')"
            :error="errors.g_two_email"
          />
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
import * as yup from "yup";
import CustomInput from "./CustomInput.vue";

const formSchema = yup.object().shape({
  g_one_fullname: yup.string().required("Fullname is required.").nullable(),
  g_one_email: yup
    .string()
    .email("Must be valid email")
    .required("Email is required.")
    .nullable(),
  g_two_fullname: yup.string().required("Fullname is required").nullable(),
  g_two_email: yup
    .string()
    .email("Must be valid email")
    .required("Fullname is required")
    .nullable(),
});
export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      values: {
        g_one_fullname: "",
        g_one_email: "",
        g_two_fullname: "",
        g_two_email: "",
      },
      errors: {
        g_one_fullname: "",
        g_one_email: "",
        g_two_fullname: "",
        g_two_email: "",
      },
    };
  },
  methods: {
    continueProcess(option) {
      formSchema
        .validate(this.values, { abortEarly: false })
        .then(() => {
          /* Call API then continue to sucess */
          this.$emit("continueProcess", option);
        })
        .catch((err) => {
          err.inner.forEach(e => {
            this.errors = {...this.errors, [e.path]: e.message }
          });
        });
    },

    /*
    * ValidateField Func(x)
      Validate fields using Yup
  */
    validateField(field) {
      formSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[field] = err.message;
        });
    },
  },
};
</script>

<style>
</style>