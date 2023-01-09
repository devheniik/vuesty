<script setup lang="ts">
import {ref} from 'vue'
import VButton from './components/Button/VButton.vue'
import VAvatar from './components/Avatar/VAvatar.vue'
import VSelect from './components/Select/VSelect.vue'
import {UserIcon} from '@jonyak/icons/24/outline'


const selected = ref('')
</script>

<template>
  <div class="p-10 m-10 shadow-2xl flex justify-center items-center space-x-2">
    <v-button variant='primary' background-color='success'>
      <UserIcon class='btn-left-icon' />
      Click
    </v-button>
  </div>

  <div class="p-10 m-10 shadow-2xl flex justify-center items-center space-x-2">
    <v-avatar text="ШК" />
  </div>

  <div class="p-10 m-10 shadow-2xl flex justify-center items-center space-x-2">
    <v-select v-model="selected" />
  </div>


</template>

<style scoped></style>
