<script lang='ts' setup>
import { ref } from 'vue'
import VButton from './components/Button/VButton.vue'
import VAvatar from './components/Avatar/VAvatar.vue'
import VSelect from './components/Select/VSelect.vue'
import { UserIcon } from '@jonyak/icons/24/outline'

const selected = ref('')
const log = (e:any) => console.log(e)
</script>

<template>
  <div class='my-5 flex flex-col space-y-4' style='margin-bottom: 300px;'>
    <div class='m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl'>
      <v-button background-color='success' variant='primary'>
        <UserIcon class='btn-left-icon' />
        Click
      </v-button>
    </div>

    <div class='m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl'>
      <v-button :to="{ name: 'Test', query: { search: 'search' } }" background-color='success' variant='primary'>
        Click
      </v-button>
    </div>

    <div class='m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl'>
      <v-avatar text='ШК' />
    </div>

    <div class='m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl'>
      {{selected}}
      <div class='w-96 px-10'>
        <v-select
          v-model='selected'
          label-key="name"
          value-key="id"
          multiple
          searchable
          :options='[
            {
              id: 1,
              name: "Школа №1"
            },{
              id: 2,
              name: "Школа №2"
            },{
              id: 3,
              name: "Школа №3"
            },{
              id: 4,
              name: "Школа №4"
            },{
              id: 5,
              name: "Школа №5"
            },{
              id: 6,
              name: "Школа №6"
            },{
              id: 7,
              name: "Школа №7"
            },{
              id: 8,
              name: "Школа №8"
            },{
              id: 9,
              name: "Школа №9"
            },{
              id: 10,
              name: "Школа №10"
            },
          ]'
          @update:model-value="log($event)" />
      </div>
    </div>

    <div class='m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl'>

    </div>
    </div>
</template>

<style scoped></style>
