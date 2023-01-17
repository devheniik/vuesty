import VSelect from '../components/Select/VSelect.vue'
// import generateSource from './helpers/showCode'
import {ref} from 'vue'

const selected = ref([])
const options = ref([
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
])

export default {
  title: 'Select',
  component: VSelect,
  argTypes: {
    openDefault: {
      control: 'boolean',
      defaultValue: false
    },
    multiple: {
      control: 'boolean',
      defaultValue: false
    },
    modelValue: {
      control: 'text',
      defaultValue: selected.value
    },
    options: {
      control: 'array',
      defaultValue: options.value
    },
    labelKey: {
      type: { name: 'string', required: false },
      defaultValue: 'name',
    },
    valueKey: {
      type: { name: 'string', required: false },
      defaultValue: 'id',
    },
    searchable: {
      control: 'boolean',
      defaultValue: false
    },
    placeholder: {
      type: { name: 'string', required: false },
      defaultValue: 'Select',
    },
    deselect: {
      control: 'boolean',
      defaultValue: false
    },
    searchPlaceholder: {
      type: { name: 'string', required: false },
      defaultValue: 'Search',
    },
    emptyText: {
      type: { name: 'string', required: false },
      defaultValue: 'Нет результатов',
    },
    maxShow: {
      type: { name: 'number', required: false },
      defaultValue: '2',
    },
  },
}


const Template = args => ({
  components: { VSelect },
  setup() {
    return { args }
  },
  template: `<v-select v-model="selected" :options="options" >{{ args.default }}</v-select>`,
})

export const Default = Template.bind({})

