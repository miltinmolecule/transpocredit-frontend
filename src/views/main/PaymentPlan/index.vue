<template>
  <div class="container pay-plan">
    <div class="row">
      <div class="col-md-6">
        <div class="car-detail-wrapper">
          <div class="img-container">
            <img src="@/assets/images/svgs/available-car.svg" alt="car" />
          </div>
          <div class="car-title">
            <h4>Toyota Hatchbacks</h4>
            <p>#3,000,000</p>
          </div>
          <div class="mt-3 car-description">
            <div class="content-wrap">
              <div class="label-wrap">
                <label>Model</label>
              </div>
              <label class="plan-value">2005</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">Use type</label>
              </div>
              <label class="plan-value">Nigeria Use</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">Body</label>
              </div>
              <label class="plan-value">Sedan</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">No. Doors/Seats</label>
              </div>
              <label class="plan-value">4 / 5</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">No. of valves</label>
              </div>
              <label class="plan-value">16 Valves</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">Fuel Type/System</label>
              </div>
              <label class="plan-value">Petrol/injection</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">Transmission</label>
              </div>
              <label class="plan-value">Auto</label>
            </div>
            <div class="content-wrap">
              <div class="label-wrap">
                <label for="">Drive wheels</label>
              </div>
              <label class="plan-value">Fwd</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 offset-1">
        <div class="calculator">
          <div class="calculator--header">
            <h4>Payment Plan Calculator</h4>
            <p>Select payment plan.</p>
          </div>
          <div class="row toggle-button">
            <div class="col-md-6">
              <button
                @click="toggleSelected('weekly')"
                :class="{ selected: isSelected === 'weekly' }"
                class="btn btn-block btn-primary"
              >
                Weekly
              </button>
            </div>
            <div class="col-md-6">
              <button
                @click="toggleSelected('monthly')"
                :class="{ selected: isSelected === 'monthly' }"
                class="btn btn-block btn-primary"
              >
                Monthly
              </button>
            </div>
          </div>
          <div class="calculator--prep">
            <p>Total Amount</p>
            <p>Total amount is to include all charges and duty fees.</p>
            <div class="calculate-plan">
              <label>Weekly due</label>
              <label>#25,000.00</label>
            </div>
            <div class="calculate-plan">
              <label>No. Weeks</label>
              <label>120</label>
            </div>
            <div class="calculate-plan">
              <label>Services & Duty fee</label>
              <label>#300,000</label>
            </div>
            <div class="mt-5 total-wrap">
              <span>Total Payable Amount</span>
             <h4> #3,500,000.00</h4>
            </div>
          </div>
          <div class=" mt-5 button-footer">
            <button class="btn btn-primary">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isSelected: "" };
  },
  methods: {
    toggleSelected(val) {
      this.isSelected = val;
    },
  },
};
</script>

<style>
</style>