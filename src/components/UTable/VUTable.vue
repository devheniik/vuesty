<template>
  <div class="v-utable">
    <div class="v-utable-container">
      <div class="v-utable-container-fluid">
        <div class="v-utable-container-fluid-box">
          <table class="v-utable__table">
            <thead class="v-utable__table-head">
              <tr class="v-utable__table-head__row">
                <th v-for="(header, index) in headers" :key="index" scope="col" class="v-utable__table-head__item">
                  <slot :name="`header-${header}`">
                    {{ header }}
                  </slot>
                </th>
                <th v-if="editAction" class="v-utable__table-head__item">
                  <slot :name="`header-edit-action`"></slot>
                </th>
              </tr>
            </thead>
            <tbody class="v-utable__body-container">
              <tr v-for="(row, index) in rows" :key="index" class="v-utable__body__row">
                <td v-for="(col, value) in _cols" :key="value" class="v-utable__body__row__cell">
                  <slot :name="col" :data="row" class="v-utable__body__row__slot">
                  </slot>
                </td>
                <td v-if="editAction" class="v-utable__body__row__cell">
                  <VMenu v-if="menuOptions.length">
                    <template #menuItems>
                    <div v-for="(option, i) in menuOptions" :key="i">
                      {{ option }}
                    </div>
                    </template>
                  </VMenu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import VMenu from '../Menu/VMenu.vue';
const props = withDefaults(
  defineProps<{
    rows: string[] | object[] | number[]
    headers: string[],
    cols?: string[] | object[] | number[] | null
    editAction?: boolean,
    menuOptions: string[] | string,
  }>(),
  {
    cols: null,
    editAction: true,
  }
)


const _cols = ref(props.cols ? props.cols : props.rows.length ? Object.keys(props.rows[0]) : [])

</script>

<style scoped lang="scss">
@import '../../assets/themes/main/components/utable.scss';
</style>
