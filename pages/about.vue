<script setup>
const { data } = await useAsyncData('about', () => queryCollection('about').path('/about').first())

useSeoMeta({
  title: 'About me',
  ogTitle: 'Read about me',
})
</script>

<template>
  <div class="md:container min-h-[calc(100vh-20rem)] md:mx-auto flex flex-col items-stretch justify-center">
    <article class="self-center max-w-[calc(100%-4rem)] md:max-w-3xl mb-10 md:px-0">
      <ContentRenderer :value="data" />
    </article>
  </div>
</template>
