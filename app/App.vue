<template>
  <div class="container h-screen mx-auto space-y-9">
    <VInput v-model="text"   >
      <template #icon-right>
        <AcademicCapIcon class="w-4 h-4"></AcademicCapIcon>
      </template>

    </VInput>
    <VInput v-model="text" :required="true"></VInput>
    <VToast class="my-2" variant="primary" text="Some crazy piece of text" />
    <VToast class="my-2" variant="success" text="Some crazy piece of text" />
    <VToast class="my-2" variant="warning"  text="Some crazy piece of text" />
    <VToast class="my-2" variant="danger" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et dolores sit nostrum nemo excepturi voluptatibus, saepe, dolorem corrupti magni, incidunt nesciunt officia qui facilis rem obcaecati facere exercitationem laudantium." />
  </div>

  <div class="buttonContainer">
    <v-button>primary</v-button>
    <v-button size="big">primary</v-button>
    <v-button size="small">primary</v-button>
    <v-button color="danger">danger</v-button>
    <v-button color="secondary">secondary</v-button>
    <v-button color="light">light</v-button>
    <v-button color="info">info</v-button>
    <v-button color="neutral">neutral</v-button>
    <v-button color="tertiary">tertiary</v-button>
    <v-button><AcademicCapIcon class="icon"></AcademicCapIcon> go next</v-button>
  </div>
</template>

<script>
import VInput from '../src/components/Input/VInput.vue'
import VToast from '../src/components/Toaster/VToast.vue'
import VButton from '../src/components/Button/VButton.vue'
import {AcademicCapIcon} from '@devheniik/icons/dist'
export default {
  name: "App",
  components: {VInput, VToast, AcademicCapIcon, VButton},
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

.buttonContainer {
  width: 50%;
  @apply mx-auto mb-10 space-x-2;

}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
