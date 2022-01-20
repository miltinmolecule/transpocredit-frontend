<template>
  <form @submit.prevent="continueProcess('vehicle_detail')">
    <div class="form-wrapper">
      <div class="form-title">
        <span class="-icon"><i class="vehicle-detail-icon"></i></span>
        <div class="form-info">
          <h5>Vehicle Details</h5>
          <p>Select your vehicle preference.</p>
        </div>
        <span class="close_icon" @click="goBack">
          <font-awesome-icon :icon="faTimes" />
        </span>
      </div>
      <div class="form-body">
        <div class="form-group">
          <CustomSelect
            name="vehicle_brand"
            label="Vehicle Brand"
            :options="brands"
            v-model="values.vehicle_brand"
            :error="errors.vehicle_brand"
            @selectedField="checkModels('vehicle_brand', $event)"
            @validateField="validateField('vehicle_brand')"
          />
        </div>
        <div class="form-group">
          <CustomSelect
            name="vehicle_model"
            label="Vehicle Model"
            :options="brands"
            v-model="values.vehicle_model"
            :error="errors.vehicle_model"
            @validateField="validateField('vehicle_model')"
          />
        </div>
        <div class="form-group">
          <CustomSelect
            name="vehicle_year"
            label="Vehicle year"
            :options="brands"
            v-model="values.vehicle_year"
            :error="errors.vehicle_year"
            @validateField="validateField('vehicle_year')"
          />
        </div>
      </div>
      <div class="btn-footer">
        <button class="btn btn-block btn-primary">Continue</button>
      </div>
    </div>
  </form>
</template>

<script>
import { object, string } from "yup";
import CustomSelect from "./CustomSelect.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const formSchema = object().shape({
  vehicle_year: string().required("Vehicle year is required").nullable(true),
  vehicle_model: string().required("Vehicle model is required").nullable(true),
  vehicle_brand: string().required("Vehicle brand is required").nullable(true),
});

export default {
  components: {
    CustomSelect,
    FontAwesomeIcon,
  },
  props: [],
  data() {
    return {
      disabled: false,
      faTimes,
      values: { vehicle_brand: "", vehicle_model: "", vehicle_year: "" },
      errors: { vehicle_brand: "", vehicle_model: "", vehicle_year: "" },
      brands: ["toyota", "volks", "honda"], // Brands should come from API
    };
  },
  methods: {
    /*
      * backFunc Func()
        goBack returns step
    */
    goBack() {
      this.$emit("continueProcess", "back");
    },
    /*
      * ContinueProcess Func()
        Continue process for to check form fields
          * all input fields required
    */
    continueProcess(option) {
      formSchema
        .validate(this.values, {})
        .then(() => {
          this.$emit("continueProcess", option);
        })
        .catch((err) => {
          this.errors = { ...this.errors, [err.path]: err.message };
        });
    },

    /*
      * CheckModels Func()
        Calls Api to fetch all models for this brand along with year available.
    */
    checkModels(field, value) {
      if (value === null) return;
      console.log("Brand field and value", field, value);
    },

    /* Form Validate
      * validateFields
        Check if fields has Errors
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