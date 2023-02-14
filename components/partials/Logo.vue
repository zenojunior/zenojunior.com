<script setup>
const route = useRoute()
</script>

<template>
  <nuxt-link
    to="/"
    :class="[
      'logo',
      route.path === '/' ? 'cursor-text' : 'hover:opacity-75'
    ]"
  >
    <img
      src="~/assets/zeno.webp"
      class="w-12 h-12 rounded-full select-none"
      alt="Foto de Zeno"
      loading="lazy"
    />
    <span class="text-base font-bold">Zeno Junior</span>
  </nuxt-link>
</template>

<style lang="postcss" scoped>
a {
  @apply flex items-center gap-4;
}
</style>