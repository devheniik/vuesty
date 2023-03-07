<template>
  <div class="box">
    <v-input></v-input>
  </div>
  <div class="box">
    <v-pagination :last_page="10" @change="logger" />
  </div>
  <div class="box">
    <v-textarea v-model="ttf" error placeholder="lalalalal"></v-textarea>
  </div>
  <div class="box">
    <v-alert></v-alert>
  </div>
  <div class="box">
    <VToast
    class="my-2"
    variant="primary"
    text="Some crazy piece of text" />
  </div>

<v-avatar size="tiny"></v-avatar>
<v-avatar size="gigantic"></v-avatar>
<v-avatar size="huge"></v-avatar>
<v-avatar size="medium"></v-avatar>
<v-avatar size="small"></v-avatar>


<div class="box">
  <v-input></v-input>
  <v-select></v-select>
</div>

<div class="box">
  <v-button @click="isModalOpen = true">+</v-button>
  <v-modal v-model="isModalOpen">
    <v-input></v-input>
    <v-input></v-input>
    <v-input></v-input>
    <v-input></v-input>
    <v-input></v-input>
  </v-modal>
</div>

<div class="box w-3">
  {{ttx}}
  <VTextarea v-model="ttx">hello</VTextarea>

</div>
  <div class="box w-3/12">
      {{v_select_value}}
      <v-select
        v-model="v_select_value"
        :is-loading="isLoaded"
        label-key="title"
        multiple
        value-key="id"
        :options=" options"
        placeholder="Select"
        :auto-filter="false"
        :delay="5000"
        @search="handleSearch">

      </v-select>

    <v-select
      v-model="v_select_value"
      multiple
      :options="[1,2,3]"
      @focus="handleFocus">

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
    <VToast class="my-2" variant="danger" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus et dolores sit nostrum nemo excepturi voluptatibus, saepe, dolorem corrupti magni, incidunt nesciunt officia qui facilis rem obcaecati facere exercitationem laudantium." @shown="shown" />
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
      ]"
      :cols="['data1', 'data2', 'data3', 'data4']"
    >
      <template #data1="{data}">
        {{data.name}}
      </template>
    </VTable>
  </div>

  <div class="box">
    <v-pagination
      v-model:limit="limit"
      v-model:page="page"
      v-bind="{
        current_page: 2,
        from: 10,
        last_page: 5,
        per_page: 10,
        to: 20,
        total: 50
      }"
      @change="handleP"></v-pagination>
  </div>

  <!-- <div class="box">
    <v-button @click="isModalOpen = true">+</v-button>
    <v-modal v-model="isModalOpen"><v-button @click="isModalOpen2 = true">+</v-button>
      <v-modal v-model="isModalOpen2">123</v-modal></v-modal>
  </div> -->


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
import VTextarea from "../src/components/Textarea/VTextarea.vue"
import VAvatar from '../src/components/Avatar/VAvatar.vue'
import VAlert from '../src/components/Alert/VAlert.vue'
import { AcademicCapIcon } from '@devheniik/icons/dist'
export default {
  name: "App",
  components: {VInput, VToast, VTable, VPagination, VButton, AcademicCapIcon, VModal, VSelect, VTextarea, VAvatar, VAlert},
  data() {
    return {
      page: 1,
      limit: 10,
      text: 'text123123',
      isModalOpen: false,
      isModalOpen2: false,
      isLoaded: false,
      options: [],
      v_select_value: null,
      ttx: '123123',
      hf: 10,
    }
  },
  mounted() {
    this.getOptions()
  },
  methods: {
    handleP(value) {
      console.log(value)
    },
    shown() {
      console.log('shown')
    },
    async getOptions(text) {
      this.isLoaded = true
      this.options = (await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')).data

      if (text) {
        this.options = this.options.filter(option => option.title.includes(text))
      }

      this.isLoaded = false
    },

    logger(dat) {
      this.hf = dat
      console.log(dat);
      console.log(this.hf)
    },

    async handleSearch(value) {
      console.log(value)
      await this.getOptions(value)
    },
    handleFocus() {
      console.log('focus')
    },
  }
}
</script>

<style scoped>
@import '../src/assets/themes/main/components/select.scss';

.box {
  @apply p-10 m-5 bg-neutral-100;
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
