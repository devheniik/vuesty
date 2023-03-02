<template>
  <div class="box w-3/12">
      {{v_select_value}}
      <v-select
        v-model="v_select_value"
        multiple
        label-key="title"
        value-key="id"
        :options="[
          {
            title: 'Option 1',
            id: 1
          },{
            title: 'Option 2',
            id: 2
          },{
            title: 'Option 3',
            id: 3
          },{
            title: 'Option 4',
            id: 4
          },{
            title: 'Option 5',
            id: 5
          },{
            title: 'Option 6',
            id: 6
          },{
            title: 'Option 7',
            id: 7
          },{
            title: 'Option 8',
            id: 8
          },{
            title: 'Option 9',
            id: 9
          },{
            title: 'Option 10',
            id: 10
          },{
            title: 'Option 11',
            id: 11
          },{
            title: 'Option 12',
            id: 12
          },{
            title: 'Option 13',
            id: 13
          },{
            title: 'Option 24',
            id: 24
          },{
            title: 'Option 35',
            id: 35
          },{
            title: 'Option 45',
            id: 44
          },{
            title: 'Option 61',
            id: 61
          },{
            title: 'Option 62',
            id: 62
          },{
            title: 'Option 63',
            id: 63
          },{
            title: 'Option 64',
            id: 64
          },{
            title: 'Option 81',
            id: 81
          },{
            title: 'Option 82',
            id: 82
          },{
            title: 'Option 83',
            id: 83
          },{
            title: 'Option 84',
            id: 84
          },
        ]">

      </v-select>
  </div>


  <div class="container mx-auto h-screen space-y-9">
    <VInput v-model="text">
      <template #icon-right>
        <AcademicCapIcon class="h-4 w-4"></AcademicCapIcon>
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
  <div class="box">
    <VTable
      :headers="['ID', 'Name', 'Description', 'Date']"
      :rows="[
        { data1: { name: 'Row 4'}, data2: 'Row 1', data3: 'Row 1', data4: 'Row 1' },
        { data1: { name: 'Row 4'}, data2: 'Row 2', data3: 'Row 2', data4: 'Row 2' },
        { data1: { name: 'Row 4'}, data2: 'Row 3', data3: 'Row 3', data4: 'Row 3' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
        { data1: { name: 'Row 4'}, data2: 'Row 4', data3: 'Row 4', data4: 'Row 4' },
      ]">
      <template #data1="{data}">
        {{data.name}}
      </template>
    </VTable>
  </div>

  <div class="box">
    <v-pagination :total-pages="20" :current-page="4"></v-pagination>
  </div>

  <div class="box">
    <v-button @click="isModalOpen = true">+</v-button>
    <v-modal v-model="isModalOpen"><v-button @click="isModalOpen2 = true">+</v-button>
      <v-modal v-model="isModalOpen2">123</v-modal></v-modal>
  </div>


</template>

<script>
import axios from "axios"
import VTable from '../src/components/Table/VTable.vue'
import VInput from '../src/components/Input/VInput.vue'
import VToast from '../src/components/Toast/VToast.vue'
import VButton from '../src/components/Button/VButton.vue'
import VSelect from '../src/components/Select/VSelect.vue'
import VPagination from '../src/components/Pagination/VPagination.vue'
import VModal from "../src/components/Modal/VModal.vue"
import { AcademicCapIcon } from '@devheniik/icons/dist'
export default {
  name: "App",
  components: {VInput, VToast, VTable, VPagination, VButton, AcademicCapIcon, VModal, VSelect},
  data() {
    return {
      isModalOpen: false,
      isModalOpen2: false,
      text: null,
      v_select_value: [ 1, 2, 3, 4, 5, 8, 7, 11, 12, 10, 9, 13, 24, 35, 44, 62, 61, 63, 64, 83, 81, 82, 84 ],
    }
  },
  methods: {
    async getOptions() {
      return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
    }
  },
}
</script>

<style scoped>
@import '../src/assets/themes/main/components/select.scss';

.box {
  @apply p-32;
}
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
