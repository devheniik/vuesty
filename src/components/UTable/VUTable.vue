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
              </tr>
            </thead>
            <tbody class="v-utable__body-container">
              <tr v-for="(row, index) in rows" :key="index" :class="[{'v-utable__body__row_cut-border': trCount > 6}, 'v-utable__body__row']">
                <td v-for="(col, value) in _cols" :key="value" class="v-utable__body__row__cell">
                  <slot :name="col" :data="row" class="v-utable__body__row__slot">
                  </slot>
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
const props = withDefaults(
  defineProps<{
    rows: string[] | object[] | number[]
    headers: string[],
    cols?: string[] | object[] | number[] | null
    trCount?: number
  }>(),
  {
    cols: null,
    editAction: true,
    trCount: 1,
  }
)


const _cols = ref(props.cols ? props.cols : props.rows.length ? Object.keys(props.rows[0]) : [])

</script>

<style scoped lang="scss">
@import '../../assets/themes/main/components/utable.scss';
</style>
