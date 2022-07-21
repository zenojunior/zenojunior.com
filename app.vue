<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()
  useHead({
    title: 'Zeno Junior',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    meta: [
      { name: 'heme-color', content: '#1870ae' },
      { name: 'og:title', content: `${route.meta.title} - Zeno Junior` },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
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