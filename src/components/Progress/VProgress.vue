z<script setup lang="ts">
defineProps<{
  progress: string
}>()
</script>

<template>
  <div class="meter orange nostripes bg-neutral-200">
    <span :style="{ width: progress }">
      <!-- <span :class=`[w-10]`> -->
      <span class="absolute top-0 right-0 h-full w-[6px] bg-upgrade-500"></span>
    </span>
  </div>
</template>

<style>
.meter {
  box-sizing: content-box;
  height: 20px;
  position: relative;
  border-radius: 35px;
}
.meter > span {
  display: block;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: rgb(0, 71, 253);
  background: linear-gradient(90deg, rgba(0, 71, 253, 0.7) 0%, rgba(53, 224, 152, 0.7) 100%);
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}
/* .meter > span:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 6px;
  height: 100%;
  background: #FF5964;
} */
</style>
