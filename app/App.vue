<template>
  <div class="">
    <div class="box">
      <!-- <v-menu>
        <template #menuItems>
          <span v-if="!ttx">1</span>
          <div  v-if="!hf"><span>2</span></div>
        </template>
      </v-menu>
      <v-switch v-model="option2"/>
      <v-switch v-model="option2" is-small alternative-color />
    <v-button color="secondary">hallo</v-button>
    <v-alert label="Some label" >And a lots of diferenet text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt voluptates ullam dolorum possimus corporis adipisci harum recusandae debitis tenetur tempora voluptate vel illo reiciendis consectetur expedita eveniet, sit magnam ad error, nobis itaque est. Cupiditate, quisquam libero quod sed consequatur vitae minus modi culpa quos obcaecati beatae blanditiis esse, ratione recusandae eum voluptatibus error commodi itaque sequi enim quibusdam. Iure, officia fugiat. Libero at assumenda sed dignissimos a, ducimus ullam enim. Harum ea atque asperiores aut dicta quam sapiente, non obcaecati architecto laborum accusantium libero placeat modi at molestias, porro rerum. Labore nihil minima necessitatibus praesentium recusandae suscipit laudantium aliquam.</v-alert>-->
       <v-progress
       :ready="800.239"
       units="$"
       show-units-in-price
       ready-label="Готово"
       lost="119.331"
       volume-label="Повний побем"
       remove-hidden-overflow
       is-shipping
       three-decimals
       estimated-load="2000.291"
       estimated-unload="1000.092"
       loaded="1200.98"
       >
        <template #ready>
          <v-tooltip>
            <template #component><img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Linecons_small-cloud.svg" /></template>
            <template #tooltip>Готово</template>
          </v-tooltip>
        </template>
      </v-progress>
     <button @click="startProcessing">modal1</button>
      <v-modal v-model="isModalOpen" heading="someLabel" is-slide >
      <div v-if="!isProcessing" class="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore dolore, iste laudantium, aliquam officiis omnis ipsum a beatae in nam voluptatum delectus, aliquid doloribus eos? Corrupti dolorum, maxime officia fuga magni alias. Ullam impedit cum ab a maxime sequi. Consectetur voluptatum nisi at aliquid quibusdam totam perferendis atque repellendus.</div>
    </v-modal>
    <v-modal v-model="isModalOpen1" heading="someLabel"  >
      <div class="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore dolore, iste laudantium, aliquam officiis omnis ipsum a beatae in nam voluptatum delectus, aliquid doloribus eos? Corrupti dolorum, maxime officia fuga magni alias. Ullam impedit cum ab a maxime sequi. Consectetur voluptatum nisi at aliquid quibusdam totam perferendis atque repellendus.</div>
    </v-modal>
    <button @click="isModalOpen1 = !isModalOpen1">modal2</button>
    </div>
    <button @click="isSelectOpen = true">open select</button>
    <div v-if="isSelectOpen" class="w112">
          <v-select
          v-model="v_select_value"
          label-key="title"
          :multiple="true"
          value-key="id"
          :options="options"
          placeholder="Select"
          :auto-filter="false"
          :invalid="!v_select_value.length"
          @search="handleSearch" />

        </div>
  </div>
  <v-select
          v-model="v_select_value"
          label-key="title"
          :multiple="true"
          value-key="id"
          :options="[]"
          placeholder="Select"
          :auto-filter="false"
          :invalid="!v_select_value.length"
          @search="handleSearch" />

      <!-- <div class="box">
        <v-checkbox>
          Hallo
        </v-checkbox>
      {{ check }}
      <v-checkbox v-model="check" @request-server="handleRequest"></v-checkbox>
      <v-checkbox label="label" disabled></v-checkbox>
      <v-checkbox label="label" error></v-checkbox>
      {{ option2 }}
    </div>
  <v-modal v-model="isModalOpen" heading="someLabel" is-slide >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore dolore, iste laudantium, aliquam officiis omnis ipsum a beatae in nam voluptatum delectus, aliquid doloribus eos? Corrupti dolorum, maxime officia fuga magni alias. Ullam impedit cum ab a maxime sequi. Consectetur voluptatum nisi at aliquid quibusdam totam perferendis atque repellendus.
  </v-modal>
  <v-button @click="isModalOpen = !isModalOpen">here</v-button>
  {{ !v_select_value.length }}
        <div class="w112">
          <v-select
          v-model="v_select_value"
          label-key="title"
          :multiple="true"
          value-key="id"
          :options="options"
          placeholder="Select"
          :auto-filter="false"
          :invalid="!v_select_value.length"
          @search="handleSearch" />

        </div>

        <div class="w112">
          <v-input v-model="page" :_invalid="!page" />
          <v-button @click="decreasePage">decreasePage</v-button>

        </div>
      <div class="box">
        <v-button @click="handleP(1)"></v-button>
      </div>
    <div class="box">
    <v-progress
    :ready="'1700'" :volume="'2000'" price="9021"
     units="kg"    />
  </div>
  <div class="box">
    <v-input v-model="phone" />
    <v-input v-model="phone" />
    <v-input v-model="phone" disabled />
    <v-input v-model="phone" readonly/>
    <v-input v-model="phone" type="number"/>
  </div>


  <v-badge icon-right>
    <PaperclipIcon  class="icone"/>
  </v-badge>
  <v-badge chip></v-badge>
  <v-badge status color="danger"></v-badge>
  <v-badge has-border icon color="danger" />
  <v-badge icon color="success" />
  <v-input v-model="hf" disabled></v-input>
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
    <v-notification :count="1" @show-notifications="console.log(10)"></v-notification>
    <v-notification :count="100" @show-notifications="console.log(10)"></v-notification>
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
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, w100soluta.</p>
  </template>
  <template #component>
    Component
  </template>
</v-tooltip>

</div>
  <div class="box">
    <v-progress :ready="'2100'" :volume="'2000'" :loaded="15" payment units="kg"   />
  </div>
  <div class="box space-y-2">
    <v-alert :controls="false" >
      <template #closeIcon>
        <PaperclipIcon  class="icone"/>
      </template>
    </v-alert>
    <v-alert width="w100" label='' :controls="false" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati recusandae at veniam labore sunt architecto deleniti illum tenetur voluptatem, reprehenderit dolorem mollitia aspernatur laborum quo natus, eum fuga possimus est laudantium dolore dicta aut modi? Suscipit odit minima expedita, molestias quos atque, fugiat dignissimos omnis aliquid aliquam perferendis, dolor maxime?
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
    <v-avatar  size="big" status="primary" text="No Way"></v-avatar>
    <v-avatar  size="huge" status="warning" text="Y Iy"></v-avatar>
    <v-avatar  size="large" status="primary" text="No Way"></v-avatar>
    <v-avatar   status="primary" text="No Way"></v-avatar>
    <v-avatar color="warning"  size="gigantic" status="primary" text="No Way"></v-avatar>
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

    <v-menu vertical>
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
</div> -->
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

      <!-- <v-phone-input v-model="phone" />
      <v-phone-input v-model="nullPhone" /> -->
      <!-- <v-button @click="addOneToPhone">+1</v-button>
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
    <h2>Select your favorite color:</h2> -->
    <!-- <v-radio-button
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
    </v-radio-button> -->
  <!-- <div class="black">
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
      <v-avatar status="primary" text="AA AA"></v-avatar>
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
        disabled
        placeholder="Select"
        :auto-filter="false"
        @search="handleSearch">

      </v-select>

  </div>


  <div class="container mx-auto h-screen space-y-9">
    <span @click="changeTextValue">CLickMe TO Change vinput</span>
    <VInput v-model="text">
      <template #icon-right>
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
  </div> -->


</template>

<script>
import axios from "axios"
// import VTable from '../src/components/Table/VTable.vue'
// import VInput from '../src/components/Input/VInput.vue'
// import VToast from '../src/components/Toast/VToast.vue'
  import VButton from '../src/components/Button/VButton.vue'
 import VSelect from '../src/components/Select/VSelect.vue'
// import VPagination from '../src/components/Pagination/VPagination.vue'
// import VModal from "../src/components/Modal/VModal.vue"
// import VTextarea from "../src/components/Textarea/VTextarea.vue"
// import VAvatar from '../src/components/Avatar/VAvatar.vue'
import VAlert from '../src/components/Alert/VAlert.vue'
import VSwitch from '../src/components/Switch/VSwitch.vue'
 import VMenu from '../src/components/Menu/VMenu.vue'
// import VUTable from '../src/components/UTable/VUTable.vue'
// import VAvatarGroup from '../src/components/AvatarGroup/VAvatarGroup.vue'
import VCheckbox from '../src/components/Checkbox/VCheckbox.vue'
// import VPhoneInput from '../src/components/phone/VPhoneInput.vue'
// import VRadioButton from "../src/components/Radio/VRadioButton.vue"
import VProgress from "../src/components/Progress/VProgress.vue"
// import VCheckbox from "../src/components/Checkbox/VCheckbox.vue"
// import VNotification from "../src/components/Notification/VNotification.vue"
// import VBadge from "../src/components/Badge/VBadge.vue"
import VModal from "../src/components/Modal/VModal.vue"
import { ChevronDownIcon, ArchiveBoxIcon, PaperclipIcon } from "@devheniik/icons"
import VTooltip from "../src/components/Tooltip/VTooltip.vue"
// import VInputTest from "../src/components/Input/VInputTest.vue"

// import VTreeSelect from "../src/components/TreeSelect/VTreeSelect.vue"
export default {
  name: "App",
  components: { VProgress, VCheckbox, VModal, VSelect, VButton, VAlert, VTooltip, VSwitch, VMenu  },
  data() {
    return {
      isSelectOpen: false,
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
      nullNum: null,
      option2: true,
      selected: null,
      nullPhone: null,
      text: 'text123123',
      isModalOpen: false,
      isModalOpen2: false,
      isProcessing: false,
      isLoaded: false,
      options: [
    {
        userId: 1,
        id: 1,
        title: "",
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
      isModalOpen1: false,
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
      rando: 0,
  }
},
  // mounted() {
  //   this.getOptions()
  // },
  methods: {
    handleP(value) {
      console.log(value)
    },
    startProcessing() {
      this.isProcessing = true
      this.isModalOpen = !this.isModalOpen
      setTimeout(() => {
        this.isProcessing = false
      }, 3000);
    },
    decreasePage() {
      if (this.page > 0) {
        this.page--
      }
    },
    async getOptions(text) {
      this.isLoaded = true
      this.options = (await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')).data

      if (text) {
        this.options = this.options.filter(option => option.title.includes(text))
      }

      this.isLoaded = false
    },

    logger() {
      console.log(34)
    },

    changeTextValue() {
      this.text = '00000'
    },

    addOneToPhone() {
      this.phone = this.phone + '3'
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
  @apply p-10 m-5 bg-neutral-100 w-[350px];
}
.container {
  /* width: 30%; */
  height: 400vh;
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

.w102 {
  width: 50%;
}

.w100 {
  width: 100% !important;
}

.test-box {
  width: 150px;
}
</style>
