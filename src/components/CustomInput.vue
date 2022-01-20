<template>
  <div class="form-group">
    <label v-if="name" :for="`${name}-field`" :class="{ error }">{{ label }}</label>
    <input
      :style="{'text-align' : align }"
      :id="`${name}-field`"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keypress="$emit('validateField')"
      @blur="$emit('validateField')"
      class="form-control"
    />
    <!-- <p v-if="error" class="error">{{ error }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String },   
    type: { type: String, default: "text" },
    label: { type: String },
    value: { type: [String, Number, Object] },
    align: { type: String, default: 'left'},
    placeholder: { type: String },
    error: { type: String }
  },
};
</script>

<style lang="scss" scoped>
.error {
  font-size: $font-regular - 1;
  color: $red;
}
</style>