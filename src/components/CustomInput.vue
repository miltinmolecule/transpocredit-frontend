<template>
  <div class="form-group">
    <label v-if="label" :for="`${label}-field`">{{ label }}</label>
    <input
      :id="`${label}-field`"
      :placeholder="placeholder"
      :type="type"
      class="form-control"
    />
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