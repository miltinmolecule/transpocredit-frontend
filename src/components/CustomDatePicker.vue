/*
    Custom vSelect component
    * miltin configured with yup compatible
      @search:blur,
      @option:selected (optional) for instant request
      @input as in documentation for v-model access to value

*/
<template>
  <div class="form-group">
    <label :for="`${name}-field`" :class="{ error }">{{ label }}</label>
    <datepicker
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :options="options"
      :value="value"
      format="dd MMM yyyy"
      @input="$emit('input', $event)"
      @selected="$emit('validateField', $event)"
      @closed="$emit('validateField', $event)"
      input-class="form-control"
    ></datepicker>
    <!--  @closed="$emit('selectedField', $event)" -->
    <!--  @keypress="$emit('validateField')" -->
    <!-- <p v-if="error" class="error">{{ error }}</p> -->
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: { Datepicker },
  props: {
    name: { type: String },
    options: { type: Array },
    label: { type: String },
    value: { type: Date },
    placeholder: { type: String, default: 'Select Date' },
    error: { required: true },
  },
};
</script>

<style lang="scss" scoped>
.error {
  font-size: $font-regular - 1;
  color: $red;
}
</style>
/*
    USAGE
      *html code
        <CustomSelect
            name="vehicle_brand"
            label="Vehicle Brand"
            :options="brands"
            v-model="values.vehicle_brand"
            :error="errors.vehicle_brand"
            @selectedField="checkModels('vehicle_brand', $event)"
            @validateField="validateField('vehicle_brand')" />

      *Js construct
          Validate using validationschema with yup
          object().shape({
            fields
          })
 */