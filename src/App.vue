<script setup lang="ts">
import { ref } from 'vue'
import VButton from './components/Button/VButton.vue'
import VAvatar from './components/Avatar/VAvatar.vue'
import VSelect from './components/Select/VSelect.vue'
import VBadge from './components/Badge/VBadge.vue'
import VAlert from './components/Alert/VAlert.vue'
import { UserIcon } from '@jonyak/icons/24/outline'

const selected = ref('')
</script>

<template>
  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-button background-color="success">
      <UserIcon class="btn-left-icon" />
      Click
    </v-button>
  </div>

  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-avatar text="ШК" />
  </div>

  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-select v-model="selected" />
  </div>

  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-badge variant-color="success" status> Label </v-badge>
    <v-badge variant-color="success"> Label </v-badge>
    <v-badge variant-color="danger" status> Label </v-badge>
    <v-badge variant-color="danger"> Label </v-badge>
    <v-badge variant-color="danger" closeable> Label </v-badge>
  </div>

  <div class="m-10 flex flex-col items-center justify-center space-y-5 bg-gray-50 p-10 shadow-2xl">
    <v-alert
    variant-color="primary"
    label="Label primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam aliquid reiciendis minus amet vel
      exercitationem sequi, nobis rerum ad.
    </v-alert>

    <v-alert
    variant-color="warning"
    label="Label warning"
    ok-button="Yes"
    cancel-button="No">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam minima atque possimus exercitationem
      repellendus adipisci tenetur aliquid ab optio in odio distinctio placeat, suscipit recusandae, est nulla dicta
      nemo fugiat nobis dolores debitis quisquam. Temporibus excepturi illo assumenda culpa velit fuga, accusantium
      dicta ipsam totam, deserunt accusamus iste qui.
    </v-alert>

    <v-alert
    variant-color="success"
    label="Label success"
    :controls="false" />

    <v-alert
    variant-color="danger"
    label="Label danger"
    :controls="false">
     Lorem ipsum dolor sit amet.
    </v-alert>
  </div>
</template>

<style scoped></style>
