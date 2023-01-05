<template>
  <div>
    <ul>
      <li class="m-2 rounded-md p-2 hover:cursor-pointer hover:bg-gray-100">
        <router-link :to="{ name: 'ui' }">Buttons</router-link>
      </li>
      <li class="m-2 rounded-md p-2 hover:cursor-pointer hover:bg-gray-100">
        <router-link :to="{ name: 'ui' }">Inputs</router-link>
      </li>
      <li class="m-2 rounded-md p-2 hover:cursor-pointer hover:bg-gray-100">
        <router-link :to="{ name: 'ui' }">Avatars</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
