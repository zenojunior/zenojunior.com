<script setup>
definePageMeta({ layout: "content" });
</script>

<template>
  <div
    class="
      md:container
      min-h-[calc(100vh-20rem)]
      md:mx-auto
      flex flex-col
      items-stretch
      justify-center
    "
  >
    <article
      class="self-center max-w-[calc(100%-4rem)] md:max-w-3xl mb-10 md:px-0"
    >
      <ContentDoc v-slot="{ doc }">
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </div>
</template>

<style lang="scss">
pre {
  background: #2d3748;
  padding: 1rem 7rem;
  margin: 2.5rem -7rem;
  border-radius: 1rem;
}
@media screen and (max-width: 992px) {
  pre {
    padding: 1rem;
    margin: 2rem -1.5rem;
  }
  h1 {
    font-size: 3rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  }
}
</style>