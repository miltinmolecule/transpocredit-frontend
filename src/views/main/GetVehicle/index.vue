<template>
  <div class="get-vehicle">
    <div class="container">
      <div class="row">
        <SidePanel :stepNumber="step" v-if="!successful" />
        <div :class="!successful ? 'col-md-7' : 'col-md-12'">
          <div class="vehicle-process">
            <template v-if="step === 1">
              <ProfileDetailsForm @continueProcess="continueProcess($event)" />
            </template>
            <template v-if="step === 2">
              <div>
                <VehicleDetailsForm
                  v-if="!searchVehicle"
                  @continueProcess="continueProcess($event)"
                />
                <AvailableVehicle
                  v-if="searchVehicle"
                  @continueProcess="continueProcess($event)"
                />
              </div>
            </template>
            <template v-if="step === 3">
              <GuarantorsForm @continueProcess="continueProcess($event)" />
            </template>
            <template v-if="step === 4">
              <SuccessView />
            </template>
          </div>
        </div>
      </div>
    </div>
    <!-- Otp Modal Password Call -->
    <b-modal
      ref="otp-modal"
      size="md"
      no-close-on-backdrop
      no-close-on-esc
      centered
      hide-footer
      hide-header
    >
      <div class="modal-form">
        <h3>Enter Otp</h3>
        <p>Please enter the 6 digit otp sent to your phone number</p>
        <div class="">
          <CustomInput
            name="otp"
            label="OTP"
            type="password"
            v-model="values.otp"
            :error="errors.otp"
            @validateField="validateField('otp')"
            align="center"
          />
        </div>
        <button
          class="btn btn-primary btn-block"
          @click="handleOtpVerification"
        >
          {{ loading ? "Loading..." : "Confirm" }}
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import VehicleDetailsForm from "@/components/VehicleDetailsForm.vue";
import SidePanel from "@/components/SidePanel";
import ProfileDetailsForm from "@/components/ProfileDetailsForm.vue";
import AvailableVehicle from "@/components/AvailableVehicle.vue";
import GuarantorsForm from "@/components/GuarantorsForm.vue";
import SuccessView from "@/components/SuccessView.vue";
import CustomInput from "@/components/CustomInput.vue";
import * as yup from "yup";

const formSchema = yup.object().shape({
  otp: yup.string().matches(/^[0-9]+$/).test('len', val=> val.length == 6).required().nullable(),
});

export default {
  data() {
    return {
      step: 1,
      searchVehicle: false,
      successful: false,
      values: {
        otp: "",
      },
      errors: {
        otp: "",
      },
      loading: false,
    };
  },
  components: {
    VehicleDetailsForm,
    SidePanel,
    AvailableVehicle,
    ProfileDetailsForm,
    GuarantorsForm,
    SuccessView,
    CustomInput,
  },
  methods: {
    showModal() {
      this.$refs['otp-modal'].show();
    },
    handleOtpVerification() {
      this.loading = true;
      if (this.otp_error === "") return;
      setTimeout(() => {
        /* Call Endpoint */
        this.loading = false;
        this.$refs["otp-modal"].hide();
        this.step = this.step + 1;
      }, 100);
    },

    validateField(field) {
      formSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch((err) => {
          this.errors[field] = err.message
        });
    },

    /*
      * continueProcess Func(@params)
        controls view and stage data flow
        *@params is stage name (type of Strings)
    */
    continueProcess(option) {
      // console.log("option", option)
      /*
        @steps
          1.  Vehicle details
      */
      switch (option) {
        /* Profile Details Step */

        case "profile_details":
          this.$refs["otp-modal"].show();
          break;

        case "vehicle_detail":
          // Return if vehicle is available
          this.searchVehicle = true;
          if (!this.searchVehicle) {
            this.step = this.step + 1;
          }
          break;

        case "available_vehicle":
          console.log("Go to next step from here");
          break;

        /*  Continues to next step */
        case "continue":
          this.step = this.step + 1;
          break;

        /* Guarantor details successful */
        case "guarantor_details":
          this.step = this.step + 1;
          this.successful = true;
          break;

        /* Remove current step */
        case "back":
          console.log("Option");
          this.step = this.step - 1;
          break;

        /* no searched Vehicle  */
        case "close_search":
          this.searchVehicle = false;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
</style>