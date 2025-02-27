<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const imageUrl = new URL(config.public.image, import.meta.url).href
</script>

<template>
  <nuxt-link
    to="/"
    class="logo"
    :class="{ 'cursor-text': route.path === '/', 'hover:opacity-75': route.path !== '/' }"
  >
    <ClientOnly>
      <template #fallback>
        <span class="w-12 h-12 rounded-full bg-gray-600"></span>
      </template>
      <img :src="imageUrl" class="w-12 h-12 rounded-full select-none" loading="lazy" />
    </ClientOnly>
    <span class="text-base font-bold">{{ config.public.title }}</span>
  </nuxt-link>
</template>

<style lang="postcss" scoped>
a {
  @apply flex items-center gap-4; 
}
</style>