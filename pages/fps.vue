<script setup lang="ts">
const fps = useFps()

useSeoMeta({
  title: 'FPS checker',
})
</script>

<template>
  <div class="md:container min-h-[calc(100vh-20rem)] mx-6 md:mx-auto flex flex-col items-stretch justify-center">
    <div class="self-center">
        <h1 v-if="fps" class="text-gray-500 self-center">
          {{ fps }}fps
        </h1>
    </div>
  </div>
</template>
