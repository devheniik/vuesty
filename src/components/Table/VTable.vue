<template>
  <div class="v-table">
    <div class="v-table-container">
      <div class="v-table-container-fluid">
        <div class="v-table-container-fluid-box">
          <table class="v-table__table">
            <thead class="v-table__table-head">
              <tr class="v-table__table-head__row">
                <th v-for="(header, index) in headers" :key="index" scope="col" class="v-table__table-head__item">
                  <slot :name="`header-${header}`">
                    {{ header }}
                  </slot>
                </th>
                <th v-if="deleteAction || editAction" class="v-table__table-head__item">
                  <slot :name="`header-action`"></slot>
                </th>
              </tr>
            </thead>
            <tbody class="v-table__body-container">
              <tr v-for="(row, index) in rows" :key="index" class="'v-table__body__row">
                <td v-for="(col, value) in _cols" :key="value" class="v-table__body__row__cell">
                  <slot :name="col" :data="row[col]" class="v-table__body__row__slot">
                    {{ row[col] }}
                  </slot>
                </td>
                <td v-if="deleteAction || editAction" class="v-table__body__row__action">
                  <PencilIcon v-if="editAction" class="v-table__body__action-icon-primary" @click="handleEdit(row)" />
                  <TrashIcon v-if="deleteAction" class="v-table__body__action-icon-danger" @click="handleDelete(row)" />
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
import { PencilIcon, TrashIcon } from '@devheniik/icons'
const props = withDefaults(
  defineProps<{
    rows: string[] | object[] | number[]
    headers: string[],
    cols?: string[] | object[] | number[] | null
    deleteAction?: boolean
    editAction?: boolean
  }>(),
  {
    cols: null,
    action: true,
    deleteAction: true,
    editAction: true
  }
)

interface Emits {
  (e: 'edit', value:  object | string | number): void
  (e: 'delete', value:  object | string | number): void
}

const emit = defineEmits<Emits>()

const handleEdit = (entity: object | string | number):void => {
  emit('edit', entity)
}

const handleDelete = (entity: object | string | number):void => {
  emit('delete', entity)
}

const _cols = ref(props.cols ? props.cols : props.rows.length ? Object.keys(props.rows[0]) : [])

</script>

<style scoped lang="scss">
@import '../../assets/themes/main/components/table.scss';
</style>
