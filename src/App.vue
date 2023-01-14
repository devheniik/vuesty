<script setup lang="ts">
import { ref } from 'vue'
import VSelect from './components/Select/VSelect.vue'
import VAvatarGroup from './components/Avatar/VAvatarGroup.vue'
import VButton from './components/Button/VButton.vue'
import VAvatar from './components/Avatar/VAvatar.vue'
import VBadge from './components/Badge/VBadge.vue'
import VAlert from './components/Alert/VAlert.vue'
import VNotification from './components/Notification/VNotification.vue'
import VAccordion from './components/Accordion/VAccordion.vue'
import VPagination from './components/Pagination/VPagination.vue'
import VTimeline from './components/Timeline/VTimeline.vue'
import VMenu from './components/Menu/VMenu.vue'
import VTabs from './components/Tabs/VTabs.vue'
import { UserIcon } from '@jonyak/icons/24/outline'
import { MenuItem, TabPanel, Tab } from '@headlessui/vue'

const selected = ref(null)

const test = ['20.08', '30.05', '40.05', '59.81', '04,03']

const categories = ref({
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})
</script>

<template>
  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-button background-color="success">
      <UserIcon class="btn-left-icon" />
      Click
    </v-button>
  </div>

  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-tabs>
      <template #default>
        <Tab v-for="category in Object.keys(categories)" :key="category" v-slot="{ selected }" as="template">
          <button
            :class="[
              'w-full border-b-2 border-transparent py-2.5  text-base font-medium  leading-5 outline-none',
              selected ? 'border-b-primary-500' : 'text-blue-100 ',
            ]">
            {{ category }}
            <span class="tag tag-primary" :class="{ 'bg-primary-500 text-white': selected }">Label</span>
          </button>
        </Tab>
      </template>
      <template #panels>
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-offset-blue-400 ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
          ]">
          <ul>
            <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 hover:bg-gray-100">
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="['absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2']" />
            </li>
          </ul>
        </TabPanel>
      </template>
    </v-tabs>
  </div>

  <div class="my-10 mx-auto p-10 shadow-2xl">
    <v-menu>
      <template #menuItems>
        <MenuItem>
          <a href="#"> Documentation </a>
        </MenuItem>
        <MenuItem disabled>
          <span class="opacity-75">Invite a friend (coming soon!)</span>
        </MenuItem>
      </template>
    </v-menu>
  </div>

  <div class="m-10 flex flex-col items-center space-y-5 p-10 shadow-2xl">
    <v-timeline :time-line="test"></v-timeline>
  </div>

  <div class="m-10 flex flex-col items-center space-y-5 p-10 shadow-2xl">
    <v-pagination :total-pages="32" />
    <v-pagination :total-pages="4" />
    <v-pagination :total-pages="1" />
    <v-pagination :total-pages="6" />
    <v-pagination :total-pages="122" />
  </div>

  <div class="m-10 flex flex-col items-center justify-center p-10 shadow-2xl">
    <v-accordion label="title"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt temporibus in fuga culpa. Esse rem
      dolor velit praesentium accusamus ullam deserunt illum! Corporis id, vel vitae quasi vero esse dolorem impedit
      reiciendis tempore molestias est cupiditate quisquam minus dolor aliquid ratione ea consectetur magni ipsa
      facilis! Soluta, porro nesciunt.</v-accordion
    >
    <v-accordion
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium incidunt temporibus in fuga culpa. Esse rem
      dolor velit praesentium accusamus ullam deserunt illum! Corporis id, vel vitae quasi vero esse dolorem impedit
      reiciendis tempore molestias est cupiditate quisquam minus dolor aliquid ratione ea consectetur magni ipsa
      facilis! Soluta, porro nesciunt.</v-accordion
    >
    <v-accordion label="Label">Lorem ipsum dolor sit amet.</v-accordion>
    <v-accordion label="title"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ipsum voluptatem dolores! Quasi animi omnis quis?
      Enim voluptas corporis officiis hic repellat quaerat pariatur praesentium? Doloremque aspernatur eveniet corrupti
      quaerat qui ipsum sapiente odio, eos voluptatem repudiandae enim laudantium possimus deleniti molestiae quasi
      accusamus dignissimos vitae consequuntur. Dolore, incidunt! Excepturi expedita placeat repellat distinctio cumque
      nam unde voluptas neque molestias. Ea aut ducimus debitis nobis iste optio sit enim est incidunt. Numquam illo
      officiis quidem, placeat sequi tenetur voluptatum esse sunt ipsa laboriosam ut? Beatae, deleniti nisi officiis
      blanditiis delectus vel repellat ipsa. Quasi deserunt aliquam voluptatem odit eos et!</v-accordion
    >
  </div>

  <div class="m-10 flex items-center justify-center space-x-5 p-10 shadow-2xl">
    <v-notification :number="2" />
    <v-notification :number="20" />
    <v-notification :number="137" />
    <v-notification :number="4981" />
    <v-notification />
  </div>

  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-avatar text="ГВ" />
    <v-avatar src="src/assets/components/avatar.svg" size="small" />
    <v-avatar src="src/assets/components/avatar.svg" size="medium" />
    <v-avatar src="src/assets/components/avatar.svg" size="big" status="success" />
    <v-avatar src="src/assets/components/avatar.svg" size="large" status="warning" />
    <v-avatar src="src/assets/components/avatar.svg" size="huge" status="primary" />
    <v-avatar src="src/assets/components/avatar.svg" size="gigantic" status="danger" />
  </div>

  <div class="m-10 flex items-center justify-center space-x-2 p-10 shadow-2xl">
    <v-avatar-group size="gigantic">
      <v-avatar src="src/assets/components/avatar.svg" />
      <v-avatar src="src/assets/components/avatar.svg" />
      <v-avatar src="src/assets/components/avatar.svg" />
      <v-avatar src="src/assets/components/avatar.svg" />
      <v-avatar src="src/assets/components/avatar.svg" />
      <v-avatar src="src/assets/components/avatar.svg" />
    </v-avatar-group>
  </div>

  <div class="m-10 flex flex-col items-center justify-center space-y-4 p-10 shadow-2xl">
    <div class="flex items-center justify-center space-x-2">
      <v-badge label="Label" variant-color="success" status />
      <v-badge label="Label" variant-color="success" />
      <v-badge label="Label" variant-color="danger" status />
      <v-badge label="Label" variant-color="danger" />
      <v-badge variant-color="danger" label="Other Label" />
      <v-badge label="Label" variant-color="success" icon><UserIcon /></v-badge>
    </div>
    <div class="space-x-2">
      <v-badge label="Label" variant-color="success" chip />
      <v-badge label="Label" variant-color="danger" chip />
      <v-badge label="Label" variant-color="warning" chip />
      <v-badge label="Label" variant-color="primary" chip />
    </div>
  </div>

  <div class="m-10 flex flex-col items-center justify-center space-y-5 bg-gray-50 p-10 shadow-2xl">
    <v-alert variant-color="primary" label="Label primary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aperiam aliquid reiciendis minus amet vel
      exercitationem sequi, nobis rerum ad.
    </v-alert>

    <v-alert variant-color="warning" label="Label warning" ok-button="Yes" cancel-button="No">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam minima atque possimus exercitationem
      repellendus adipisci tenetur aliquid ab optio in odio distinctio placeat, suscipit recusandae, est nulla dicta
      nemo fugiat nobis dolores debitis quisquam. Temporibus excepturi illo assumenda culpa velit fuga, accusantium
      dicta ipsam totam, deserunt accusamus iste qui.
    </v-alert>

    <v-alert variant-color="success" label="Label success" :controls="false" />

    <v-alert variant-color="danger" label="Label danger" :controls="false"> Lorem ipsum dolor sit amet. </v-alert>
  </div>

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

<style scoped></style>
