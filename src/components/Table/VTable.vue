<template>
  <div class="v-table">
    <div class="v-table-container">
      <div class="v-table-container-fluid">
        <div class="v-table-container-fluid-box">
          <table class="v-table__table">
            <thead class="v-table__table-head">
              <tr>
                <th v-for="(header, index) in headers" :key="index" scope="col" class="v-table__table-head__item">
                  <slot :name="`header-${header}`">
                    {{ header }}
                  </slot>
                </th>
                <th v-if="editAction" class="v-table__table-head__item">
                  <slot :name="`header-edit-action`"></slot>
                </th>
                <th v-if="deleteAction" class="v-table__table-head__item">
                  <slot :name="`header-delete-action`"></slot>
                </th>
              </tr>
            </thead>
            <tbody class="v-table__body-container">
              <tr v-for="(row, index) in rows" :key="index">
                <td v-for="(key, value) in Object.entries(row)" :key="value" class="v-table__body__row">
                  <slot :name="key[0]" :data="key[1]" class="v-table__body__row__slot">
                    {{ key[1] }}
                  </slot>
                </td>
                <td v-if="editAction" class="v-table__body__row__action">
                  <PencilIcon class="v-table__body__action-icon-primary" @click="handleEdit(row)" />
                </td>
                <td v-if="deleteAction" class="v-table__body__row__action">
                  <TrashIcon class="v-table__body__action-icon-danger" @click="handleDelete(row)" />
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
import { ref } from 'vue'
import { PencilIcon, TrashIcon } from '@devheniik/icons'
const props = withDefaults(
  defineProps<{
    rows: string[] | object[] | number[]
    headers: string[],
    deleteAction: boolean,
    editAction: boolean,
  }>(),
  {
    deleteAction: true,
    editAction: true,
  }
)

interface Emits {
  (e: 'edit', value:  object | string | number): void
  (e: 'delete', value:  object | string | number): void
}

// const value = ref(props.modelValue)

const emit = defineEmits<Emits>()

const handleEdit = (entity: object | string | number):void => {
  emit('edit', entity)
}

const handleDelete = (entity: object | string | number):void => {
  emit('delete', entity)
}

</script>

<style scoped lang="scss">
@import '../../assets/themes/main/components/table.scss';
</style>
