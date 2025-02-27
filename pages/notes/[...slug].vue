<script setup lang="ts">
const slug = useRoute().params.slug
const { data: note } = await useAsyncData(`note-${slug}`, () => {
  return queryCollection('notes').path(`/notes/${slug}`).first()
})
</script>

<template>
  <div class="md:container min-h-[calc(100vh-20rem)] md:mx-auto flex flex-col items-stretch justify-center">
    <article class="self-center max-w-[calc(100%-4rem)] md:max-w-3xl mb-10 md:px-0">
      <template v-if="note">
        <h1 v-if="note.title" class="leading-[4rem] text-[3.5rem] mb-10">{{ note.title }}</h1>
        <ContentRenderer :value="note">
        </ContentRenderer>
      </template>
      <template v-else>
        <div class="empty-page">
          <h1>Ops</h1>
          <p>I haven't written this yet... 😕</p>
          <NuxtLink to="/notes">See my notes</NuxtLink>
        </div>
      </template>
    </article>
  </div>
</template>

<style lang="scss">
pre {
  background: #2d3748;
  padding: 1rem 7rem;
  margin: 2.5rem -7rem;
  border-radius: 1rem
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
