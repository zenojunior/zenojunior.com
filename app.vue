<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute()
  const title = useTitle()
  useHead({
    title,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    meta: [
      { name: 'theme-color', content: '#1870ae' },
      { name: 'og:title', content: !route.meta.title ? title : `${route.meta.title} - ${title.value}` },
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