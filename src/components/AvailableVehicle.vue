<template>
  <div class="available-vehicle">
    <h6 class="mb-4">Available Vehicle</h6>
   <div>
      <AvailableCard />
    <AvailableCard />
    <AvailableCard />
   </div>
  <AvailableModal />
  </div>
</template>

<script>
import AvailableCard from './AvailableCard.vue'
import AvailableModal from './AvailableModal.vue'
export default {
  components:{
    AvailableCard,
    AvailableModal
  }
};
</script>

<style>
</style>