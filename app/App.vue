<template>
  <div class="container h-screen mx-auto space-y-9">
    <VInput v-model="text"   >
      <template #icon-right>
        <AcademicCapIcon class="w-4 h-4"></AcademicCapIcon>
      </template>

    </VInput>
    <VToaster class="my-2" variant="primary" text="Some crazy piece of text" />
    <VToaster class="my-2" variant="success" text="Some crazy piece of text" />
    <VToaster class="my-2" variant="warning"  text="Some crazy piece of text" />
    <VToaster class="my-2" variant="danger" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et dolores sit nostrum nemo excepturi voluptatibus, saepe, dolorem corrupti magni, incidunt nesciunt officia qui facilis rem obcaecati facere exercitationem laudantium." />
  </div>
</template>

<script>
import VInput from '../src/components/Input/VInput.vue'
import VToaster from '../src/components/Toaster/VToaster.vue';
import {AcademicCapIcon} from '@devheniik/icons/dist'
export default {
  name: "App",
  components: {VInput, VToaster, AcademicCapIcon},
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
  flex-direction: column;
  align-items: center;
}
</style>
