<template>
  <div class="custom-input">
    <label v-if="label" :for="`${label}-field`">{{ label }}</label>
    <b-form-input :id="`${label}-field`" :placeholder="placeholder" :type="type"></b-form-input>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },
    type: { type: String, default: "text" },
    label: { type: String },
    placeholder: { type: String },
  },
};
</script>

<style>
</style>