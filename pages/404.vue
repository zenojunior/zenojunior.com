<script setup>
const title = useTitle();
definePageMeta({ title: "404" });
</script>

<template>
  <div
    class="
      md:container
      min-h-[calc(100vh-20rem)]
      mx-6
      md:mx-auto
      flex flex-col
      items-stretch
      justify-center
    "
  >
    <Head>
      <Title>Page not found - {{ title }}</Title>
    </Head>
    <div class="self-center">
      <h1 class="<xl:text-5xl">404</h1>
    </div>
  </div>
</template>
