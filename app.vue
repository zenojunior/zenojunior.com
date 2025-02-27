<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${config.public.title}` : config.public.title;
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  meta: [
    { name: 'description', content: config.public.description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
  ]
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
#__nuxt {
  height: 100%;
  z-index: 2;
  position: relative;
}

*::selection {
  background: #fff;
  color: #283441;
}
</style>
