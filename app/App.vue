<template>
    <div class="box w112">
      {{v_select_value}}
      <v-select
        v-model="v_select_value"
        label-key="title"
        :multiple="true"
        value-key="id"
        :options="options"
        placeholder="Select"
        :auto-filter="false"
        @search="handleSearch">

      </v-select>
      </div>
   <div class="box">
    <v-notification :count="10" @show-notifications="console.log(10)"></v-notification>
   </div>
  <div class="box">
    <v-tooltip placement="top">
      <template #tooltip>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, soluta.</p>
      </template>
      <template #component>
        Component
      </template>
    </v-tooltip>

  </div>
  <div class="box">

    <v-tooltip placement="left">
      <template #tooltip>
        Tooltip
      </template>
      <template #component>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti minus asperiores molestiae vero velit ducimus mollitia numquam exercitationem, corporis maiores, natus, similique suscipit ipsam rerum aliquid architecto! Placeat nostrum corporis animi autem vel voluptate adipisci ab in. Obcaecati assumenda aliquid consequatur tempore architecto a nobis quis alias enim quos quaerat atque debitis beatae vitae saepe, modi at. Suscipit autem porro totam qui voluptas. Fuga voluptatibus minus distinctio molestiae quidem facilis in harum. Eius voluptatum, in porro debitis quo et impedit provident commodi expedita assumenda. Quisquam modi, dicta tempore adipisci, accusamus provident quo dolor distinctio porro pariatur assumenda tenetur fugit.</p>
      </template>
    </v-tooltip>


  </div>  <div class="box">

<v-tooltip placement="right">
  <template #tooltip>
    Lorem ipsum dolor sit amet.
  </template>
  <template #component>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti minus asperiores molestiae vero velit ducimus mollitia numquam exercitationem, corporis maiores, natus, similique suscipit ipsam rerum aliquid architecto! Placeat nostrum corporis animi autem vel voluptate adipisci ab in. Obcaecati assumenda aliquid consequatur tempore architecto a nobis quis alias enim quos quaerat atque debitis beatae vitae saepe, modi at. Suscipit autem porro totam qui voluptas. Fuga voluptatibus minus distinctio molestiae quidem facilis in harum. Eius voluptatum, in porro debitis quo et impedit provident commodi expedita assumenda. Quisquam modi, dicta tempore adipisci, accusamus provident quo dolor distinctio porro pariatur assumenda tenetur fugit.
  </template>
</v-tooltip>
</div>
  <div class="box">

    <v-tooltip placement="right">
      <template #tooltip>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti minus asperiores molestiae vero velit ducimus mollitia numquam exercitationem, corporis maiores, natus, similique suscipit ipsam rerum aliquid architecto! Placeat nostrum corporis animi autem vel voluptate adipisci ab in. Obcaecati assumenda aliquid consequatur tempore architecto a nobis quis alias enim quos quaerat atque debitis beatae vitae saepe, modi at. Suscipit autem porro totam qui voluptas. Fuga voluptatibus minus distinctio molestiae quidem facilis in harum. Eius voluptatum, in porro debitis quo et impedit provident commodi expedita assumenda. Quisquam modi, dicta tempore adipisci, accusamus provident quo dolor distinctio porro pariatur assumenda tenetur fugit.
      </template>
      <template #component>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo enim blanditiis earum ea mollitia neque accusamus sapiente magni consequatur eum!
      </template>
    </v-tooltip>
  </div>
  <div class="box">

    <v-tooltip placement="bottom">
      <template #tooltip>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, soluta.</p>
      </template>
      <template #component>
        Component
      </template>
    </v-tooltip>

  </div>
  <div class="box">

<v-tooltip placement="bottom">
  <template #tooltip>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam ea impedit. Culpa commodi veniam asperiores nemo delectus nesciunt laudantium hic voluptatum. Reiciendis voluptate vero tempore incidunt aut? Modi, magnam excepturi aliquam mollitia aperiam porro corporis distinctio quaerat dolorum commodi eaque, illum pariatur totam nemo repellendus ipsum, eveniet velit possimus.</p>
  </template>
  <template #component>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odio.
  </template>
</v-tooltip>

</div>
<div class="box">

<v-tooltip placement="bottom">
  <template #tooltip>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, soluta.</p>
  </template>
  <template #component>
    Component
  </template>
</v-tooltip>

</div>
  <div class="box">
    <v-progress :ready="5" :volume="101"   />
  </div>
  <div class="box space-y-2">
    <v-alert :controls="false" >
      <template #closeIcon>
        <PaperclipIcon  class="icone"/>
      </template>
    </v-alert>
    <v-alert label='' :controls="false" >
      Some info
      <template #closeIcon>
        <PaperclipIcon  class="icone"/>
      </template>
    </v-alert>
    <v-alert @accept="tester">
      <template #closeIcon>
        <PaperclipIcon  class="icone"/>
      </template>
    </v-alert>
    <v-alert />
    <v-alert />
    <v-alert />
    <v-alert />
  </div>

  <div class="box">
    <v-button>
      <template #icon>
        <img src="../src/assets/components/Frame1455.svg">
      </template>
    </v-button>
  </div>
  <div class="box">
    <v-avatar  size="gigantic" text="No Way"></v-avatar>
  </div>
  <div class="box">
    {{ option2 }}
    <v-switch v-model="option2">
      <PaperclipIcon />
    </v-switch>

    <v-switch v-model="option2">
      <ArchiveBoxIcon />
    </v-switch>

    <v-switch v-model="option2" disabled>
      <ChevronDownIcon />
    </v-switch>
    <v-input type="number" step="0.1"></v-input>
    <v-input readonly></v-input>
    <v-input  ></v-input>

  </div>
  <div class="box">
    <v-menu></v-menu>
    <v-button color="secondary" size="small">Haaaw</v-button>
    <v-button color="secondary">Haaaw</v-button>
    <v-button color="secondary" size="big">Haaaw</v-button>
    <v-button size="big">
      <template #icon-left>
        <ChevronDownIcon/>
      </template>
      Some text
    </v-button>
    <v-button>
      <template #icon-right>
        <ChevronDownIcon/>
      </template>
      Some text
    </v-button>
    <v-button>
      <template #icon>
        <ChevronDownIcon/>
      </template>
    </v-button>
    <v-button size="small">
      <template #icon>
        <ChevronDownIcon/>
      </template>
    </v-button>
    <v-button size="big">
      <template #icon>
        <ChevronDownIcon/>
      </template>
    </v-button>
    <v-button>Hallo</v-button>
    <v-button></v-button>
  </div>

    <v-menu>
      <template #menuItems>
        <div>
          <ChevronDownIcon class="w-4"/>
           <span>item 1</span>
        </div>
        <div>
          <ChevronDownIcon class="w-4"/>
           <span>item 2</span>
        </div>
        <div>
          <ChevronDownIcon class="w-4"/>
           <span>item 3</span>
        </div>
      </template>
    </v-menu>
  <div class="box">
  <v-button @click="isModalOpen = true">+</v-button>
  <v-modal v-model="isModalOpen"  heading="Some Heading">
    <h3>Stop doing it</h3>
    <v-input></v-input>
    <v-input></v-input>
    <v-input></v-input>
    <v-input></v-input>
    <v-input></v-input>
  </v-modal>
</div>
  <!--
  <div class="box">
    <v-select
      v-model="second_select_value"
      :is-loading="isLoaded"
      label-key="title"
      value-key="id"
      :options=" options"
      placeholder="Select"
      :auto-filter="false"
      :delay="5000"
      @search="handleSearch">

    </v-select>
  </div>
  <div class="box">
    {{tree_value}}
    <v-tree-select v-model="tree_value" :data="tree" />
  </div>
  <div class="box">
    <v-select v-model="selected" :options="[{value: true, label:'yes'}, {value: false, label:'no'}]"></v-select>
  </div>
  <div class="box spacer">
    <v-badge></v-badge>
    <v-badge chip></v-badge>
    <v-badge status color="danger"></v-badge>
    <v-badge icon color="danger" />
    <v-badge icon color="success">
    </v-badge>
     <v-badge color="success" :value="true"> -->
    <div class="box spacer">
    <v-pagination
      v-model:limit="limit"
      v-model:page="page"
      v-bind="{
        current_page: 1,
        from: 10,
        last_page: 150,
        per_page: 10,
        to: 20,
        total: 50
      }"
      @change="handleP"></v-pagination>
  </div>
    <div class="box">
      {{ check }}
      <v-checkbox v-model="check" @request-server="handleRequest"></v-checkbox>
      <v-checkbox label="label" disabled></v-checkbox>
      <v-checkbox label="label" error></v-checkbox>
      {{ option2 }}
      <!-- <v-checkbox :can-change="checkCondition" label="Option 2" :model-value="option2" @change-checked="updateOption2"></v-checkbox> -->
    </div>
    <div class="box">
      <v-phone-input v-model="phone" />
      <v-phone-input v-model="nullPhone" />
      <v-phone-input v-model="undefinedPhone" />
        <!-- <v-input v-model="nullPhone"></v-input> -->
    </div>
  <div class="box spacer">
    <div>
      <v-button size="small">Primary</v-button>
    </div>
    <div>
      <v-button size="small" color="secondary">Secondary</v-button>
    </div>
    <div>
      <v-button size="small" disabled>disabled</v-button>
    </div>
    <div>
      <v-button size="small" color="light">Light</v-button>
    </div>
  </div>
  <div class="box">
    <h2>Select your favorite color:</h2>
    <v-radio-button
      v-for="color in colors"
      :key="color"
      v-model="selectedColor"
      name="favoriteColor"
      :value="color"
      :label="color"
    />
    <v-radio-button>
      <template #default>
        <div class="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quasi eveniet alias dolor neque et fugiat recusandae nobis beatae? Similique amet optio modi sed neque, vero obcaecati sit aut commodi veniam maiores quasi culpa ipsam itaque inventore veritatis unde ut explicabo! Deleniti veritatis esse provident possimus beatae sequi ipsum alias expedita itaque ipsa iure laudantium, eaque quam reprehenderit ex molestiae assumenda fuga tenetur. Porro suscipit expedita vel illo dolorem!
        </div>
      </template>
    </v-radio-button>
        <v-radio-button>
      <template #default>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid architecto quibusdam odio beatae veniam, fuga ipsam tempore et cum assumenda nemo! Adipisci molestiae distinctio, harum officia quam, blanditiis, eius temporibus impedit beatae deleniti repellat quasi. Quisquam, voluptatum. Quisquam, voluptatum.
      </template>
    </v-radio-button>
  </div>
  <div class="box">
    <v-phone-input v-model="phone" />
    <v-input></v-input>
  </div>

  <div class="box">
    <v-input type="number">input</v-input>
  </div>
  <div class="black">
    <v-avatar-group size="tiny" color="success">
      <v-avatar text="o a"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="AA AA"></v-avatar>
    </v-avatar-group>
    <v-avatar-group size="tiny" color="tertiary">
      <v-avatar text="o a"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="AA AA"></v-avatar>
    </v-avatar-group>

    <v-avatar-group size="small" color="info">
      <v-avatar text="o a"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="AA AA"></v-avatar>
    </v-avatar-group>

    <v-avatar-group size="medium" color="upgrade">
      <v-avatar text="o a"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="AA AA"></v-avatar>
    </v-avatar-group>

    <v-avatar-group size="big" color="neutral">
      <v-avatar text="o a"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="AA AA"></v-avatar>
    </v-avatar-group>

    <v-avatar-group size="huge" color="tertiary">
      <v-avatar text="o a"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar text="FP PR"></v-avatar>
      <v-avatar color="tertiary" text="FP PR"></v-avatar>
      <v-avatar color="info" text="AA AA"></v-avatar>
    </v-avatar-group>

  </div>
  <div class="box">
    <v-pagination :last_page="20" :page="page" :limit="limit"  />
  </div>
  <div class="box">
    <v-input placeholder="jljl"></v-input>
  </div>
  <div class="box">
    <v-avatar size="gigantic"></v-avatar>
  </div>
  <div class="box">
    {{ check }}
    <v-checkbox v-model="check" label="label"></v-checkbox>
    <v-checkbox label="label" disabled></v-checkbox>
    <v-checkbox label="label" error></v-checkbox>
  </div>
  <div class="box">
    <v-avatar-group>
      <v-avatar></v-avatar>
      <v-avatar></v-avatar>
      <v-avatar></v-avatar>
    </v-avatar-group>
  </div>
    <div class="box">
    <VUTable
      :tr-count="8"
      :headers="['ID', 'Name', 'Description', 'Date', '', '']"
      :rows="[
        {
          user_name: 'John Doe',
          user_id: 13123123123123123123123123,
          user_description: 'Lorem ipsum ',
          user_date: '2021-01-01',
          user_avatar: 'https://picsum.photos/200/300',
          user_avatar2: 'https://picsum.photos/200/300',
        },
        {
          user_name: 'John Doe',
          user_id: 13123123123123123123123123,
          user_description: 'Lorem ipsum ',
          user_date: '2021-01-01',
          user_avatar: 'https://picsum.photos/200/300',
          user_avatar2: 'https://picsum.photos/200/300',
        }
      ]"
      :cols="['id', 'name', 'description', 'date', 'avatar', 'menu']"
      :menu-options="['something', 'something', 'something']"
    >
      <template #id="{data}">
        {{data.user_id}}
      </template>
      <template #name="{data}">
        {{data.user_name}}
      </template>
      <template #description="{data}">
        {{data.user_description}}
      </template>
      <template #date="{data}">
        {{data.user_date}}
      </template>
      <template #avatar="{data}">
        <v-avatar :src="data.user_avatar"></v-avatar>
        <v-avatar :src="data.user_avatar2"></v-avatar>
      </template>
      <template #menu>
        <td class="v-utable__body__row__cell">
            <VMenu >
              <template #menuItems>
              <div v-for="(option, i) in menuOptions" :key="i">
                {{ option }}
              </div>
              </template>
            </VMenu>
          </td>
      </template>

    </VUTable>
  </div>


  <div class="box">
    <div class="experiment">
      <v-menu>
      <template #menuItems>
          <div>1</div>
          <div>2</div>
          <div>3</div>
      </template>
    </v-menu>
    </div>

  </div>
  <div class="box">
    <v-input></v-input>
  </div>
  <div class="box">
    <v-pagination :last_page="10" @change="logger" />
  </div>
  <!-- <div class="box">
    <v-textarea v-model="ttf" placeholder="lalalalal"></v-textarea>
  </div> -->
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



<div class="box w-3">
  {{ttx}}
  <VTextarea v-model="ttx">hello</VTextarea>

</div>
  <div class="box w-3/12">
      {{v_select_value}}
      <v-select
        v-model="v_select_value"
        label-key="title"
        :multiple="true"
        value-key="id"
        :options="options"
        placeholder="Select"
        :auto-filter="false"
        @search="handleSearch">

      </v-select>

    <!-- <v-select
      v-model="v_select_value"
      :options="[1,2,3]"
      @focus="handleFocus">

    </v-select> -->




    <!-- <v-select
      v-model="v_select_value"
      multiple
      :options="[1,2,3]"
      @focus="handleFocus">

    </v-select> -->
  </div>


  <div class="container mx-auto h-screen space-y-9">
    <VInput v-model="text">
      <template #icon-right>
<!--        <AcademicCapIcon class="h-4 w-4"></AcademicCapIcon>-->
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
  </div>
  <div class="box">
    <VTable
      :edit-action="false"
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



  <div class="box">
    <!-- <VTreeNode /> -->
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
import VTextarea from "../src/components/Textarea/VTextarea.vue"
import VAvatar from '../src/components/Avatar/VAvatar.vue'
import VAlert from '../src/components/Alert/VAlert.vue'
import VSwitch from '../src/components/Switch/VSwitch.vue'
import VMenu from '../src/components/Menu/VMenu.vue'
import VUTable from '../src/components/UTable/VUTable.vue'
import VAvatarGroup from '../src/components/AvatarGroup/VAvatarGroup.vue'
import VCheckbox from '../src/components/Checkbox/VCheckbox.vue'
import VPhoneInput from '../src/components/phone/VPhoneInput.vue'
import VRadioButton from "../src/components/Radio/VRadioButton.vue"
import VProgress from "../src/components/Progress/VProgress.vue"
import VNotification from "../src/components/Notification/VNotification.vue"
import { ChevronDownIcon, ArchiveBoxIcon, PaperclipIcon } from "@devheniik/icons"
import VTooltip from "../src/components/Tooltip/VTooltip.vue"

// import VTreeSelect from "../src/components/TreeSelect/VTreeSelect.vue"
export default {
  name: "App",
  components: {VInput, VToast, VTable, VPagination, VButton, VModal, VSelect, VTextarea, VAvatar, VAvatarGroup, VAlert, VMenu, VUTable,VCheckbox, VPhoneInput, VRadioButton, VSwitch, ChevronDownIcon, PaperclipIcon, ArchiveBoxIcon, VProgress, VTooltip, VNotification},
  data() {
    return {
      tree_value: [],
      tree: [
        {
          id: 1,
          name: 'UA',
          children: [
            {
              id: 5,
              name: 'Kyiv',
              children: [
                // {
                //   id: 11,
                //   name: 'Kyiv',
                //   children: [
                //     {
                //       id: 111,
                //       name: 'Kyiv1',
                //       children: [
                //         {
                //           id: 1111,
                //           name: 'Kyiv',
                //           children: [
                //             {
                //               id: 11111,
                //               name: 'Kyiv',
                //               children: [
                //                 {
                //                   id: 11222,
                //                   name: 'Kyiv',
                //                   children: [
                //                     {
                //                       id: 11123,
                //                       name: 'Kyiv',
                //                       children: []
                //                     },
                //                   ]
                //                 },
                //               ]
                //             },
                //           ]
                //         },
                //       ]
                //     },
                //   ]
                // },
                {
                  id: 12,
                  name: 'Borshagivka',
                  children: []
                },
                {
                  id: 13,
                  name: 'Brovaru',
                  children: []
                },
              ]
            },
            {
              id: 6,
              name: 'Odessa',
              children: []
            },
            {
              id: 9,
              name: 'Luck',
              children: []
            },
          ]
        },
        // {
        //   id: 2,
        //   name: 'RU',
        //   children: []
        // },
        // {
        //   id: 3,
        //   name: 'PL',
        //   children: [
        //     {
        //       id: 15,
        //       name: 'Warsaw',
        //       children: [
        //         {
        //           id: 16,
        //           name: 'Moodlin',
        //           children: []
        //         },
        //         {
        //           id: 17,
        //           name: 'Left side',
        //           children: []
        //         },
        //         {
        //           id: 18,
        //           name: 'Right side',
        //           children: []
        //         },
        //       ]
        //     },
        //     {
        //       id: 26,
        //       name: 'Krakow',
        //       children: []
        //     },
        //     {
        //       id: 27,
        //       name: 'Katowice',
        //       children: []
        //     },
        //   ]
        // },
      ],
      page: 1,
      limit: 10,
      meta: {
        total: 10,
        from: 1,
        to: null,
        last_page: null,
        per_page: 20,
        current_page: 1,
      },
      option2: true,
      selected: null,
      nullPhone: null,
      undefinedPhone: undefined,
      text: 'text123123',
      isModalOpen: false,
      isModalOpen2: false,
      isLoaded: false,
      options: [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "delectus aut autem",
        completed: false
    },
],
      v_select_value: [1,2,3,4,5],
      second_select_value: null,
      ttx: '123123',
      hf: 10,
      colors: ['Red', 'Green', 'Blue', 'Yellow'],
      selectedColor: '',
      check: false,
      menuOptions: [1,"Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",3,4,'Lorem ipsum dolor sit amet'],
      tableRows: [
        { id: 1232323,  age: 32, name: 'John', },
        { id: 2, name: 'Jane', age: 28 },
        { id: 3, name: 'Bob', age: 45 },
      ],
      tableHeaders: ['Name', 'Role', 'Email', 'Team'],
      phone: '+38 (093) 711-99-99',
  }
},
  // mounted() {
  //   this.getOptions()
  // },
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

    updateOption2(value) {
      console.log(value);

      this.option2 = !this.option2
    },

    tester() {
      console.log('tester')
    },

    async handleSearch(value) {
      console.log(value)
      await this.getOptions(value)
    },
    handleFocus() {
      console.log('focus')
    },
    handleEdit(row) {
      console.log('Edit', row)
    },
    handleDelete(row) {
      console.log('Delete', row)
    },
    handleRequest(isChecked) {
      setTimeout(() => {
      this.check = !this.check

      }, 2000);
    },
  }
}



</script>

<style scoped>

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

.black {
  background-color: black;
}

.spacer {
  @apply space-y-4 bg-white
}

.text-sm {
  font-size: 12px;
  margin-top: 1px
}

.experiment {
  @apply bg-white p-4;
}

.icone {
  width: 20px;
  height: 20px;
}

svg {
  stroke-width: 0px;
}

.space-y-2 > * {
  margin-top: 15px;
}

.w112 {
  width: 200px;
}
</style>
