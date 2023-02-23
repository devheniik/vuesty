<template>
  <div class="container h-screen mx-auto my-auto">
    <VInput v-model="text" >
      <template #icon-right>
        <AcademicCapIcon class="w-4 h-4"></AcademicCapIcon>
      </template>
    </VInput>
    <!-- !valid && invalid && applyColorToLeftIcon && !disabled -->
  </div>
</template>

<script>
import VInput from '../src/components/Input/VInput.vue'
import {AcademicCapIcon} from '@devheniik/icons/dist'
export default {
  name: "App",
  components: {VInput, AcademicCapIcon},
  data() {
    return {
      text: null,
    }
  },
};
</script>

<style scoped>
.container {
  width: 30%;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
