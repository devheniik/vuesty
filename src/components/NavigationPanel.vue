<template>
  <div>
    <ul>
      <li class=" rounded-md  hover:bg-gray-100 hover:cursor-pointer p-2 m-2">
        <router-link :to="{ name: 'ui' }">Buttons</router-link>
      </li>
      <li class=" rounded-md  hover:bg-gray-100 hover:cursor-pointer p-2 m-2">
        <router-link :to="{ name: 'ui' }">Inputs</router-link>
      </li>
      <li class=" rounded-md  hover:bg-gray-100 hover:cursor-pointer p-2 m-2">
        <router-link :to="{ name: 'ui' }">Avatars</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
