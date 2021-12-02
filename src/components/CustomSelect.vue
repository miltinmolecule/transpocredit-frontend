<template>
  <div class="form-group">
    <label v-if="label" :for="`${label}-field`">{{ label }}</label>
    <select :id="`${label}-field`" class="form-control">
      <option>Option 1...</option>
      <option>Option 2..</option>
    </select>
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