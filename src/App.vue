<script setup lang="ts">
import { ref } from 'vue'
import VSelect from './components/Select/VSelect.vue'

const selected = ref(null)

  </script>
<template>
  <div class="m-10 flex flex-col items-center justify-center space-y-5 bg-gray-50 p-10 shadow-2xl">
    <div class="w-96 px-10">
      <v-select
        v-model="selected"
        label-key="name"
        value-key="id"
        multiple
        searchable
        :options="[
          {
            id: 1,
            name: 'Школа №1',
          },
          {
            id: 2,
            name: 'Школа №2',
          },
          {
            id: 3,
            name: 'Школа №3',
          },
          {
            id: 4,
            name: 'Школа №4',
          },
          {
            id: 5,
            name: 'Школа №5',
          },
          {
            id: 6,
            name: 'Школа №6',
          },
          {
            id: 7,
            name: 'Школа №7',
          },
          {
            id: 8,
            name: 'Школа №8',
          },
          {
            id: 9,
            name: 'Школа №9',
          },
          {
            id: 10,
            name: 'Школа №10',
          },
        ]" />
    </div>
  </div>

  <div class="mb-32"></div>
</template>

<style scoped>

</style>
