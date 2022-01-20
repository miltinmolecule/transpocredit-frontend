<template>
  <div class="available-vehicle">
    <h6 class="custom-heading">Available Vehicle</h6>
    <div>
      <AvailableCard />
      <AvailableCard />
      <AvailableCard />
       <div class="btn-footer">
        <button class="btn btn-cancel" @click="$emit('continueProcess', 'close_search')">
          Back
        </button>
        <button class="btn btn-primary" @click="$emit('continueProcess', 'continue')">
          Continue
        </button>
      </div>
    </div>
    <AvailableModal />
  </div>
</template>

<script>
import AvailableCard from "./AvailableCard.vue";
import AvailableModal from "./AvailableModal.vue";
export default {
  components: {
    AvailableCard,
    AvailableModal,
  },
};
</script>
<style lang="scss" scoped>
.custom-heading {
  font-weight: 500;
  font-family: Poppins;
  color: $dark-text;
  opacity: 0.7;
  margin-bottom: 20px;
}
</style>