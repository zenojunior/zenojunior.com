<script setup>
const config = useRuntimeConfig()

const { data: stars } = await useAsyncData('github-stars', () => $fetch('/api/github-stars'))

</script>

<template>
  <footer class="print:hidden">
    <div class="md:container mx-6 md:mx-auto flex flex-col md:flex-row justify-center gap-y-12 md:gap-x-36">
      <div class="md:min-w-32">
        <h3>Links</h3>
        <ul>
          <NuxtLink to="/resume">Resume</NuxtLink>
          <NuxtLink to="/notes">Notes</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </ul>
      </div>
      <div class="md:min-w-32">
        <h3>Socials</h3>
        <nav class="flex gap-2 mt-4">
          <a
            v-for="(social, index) in config.public.socials"
            :key="index"
            :href="social.url"
            class="hover:opacity-75"
            target="_blank"
          >
            <mdi-icon :icon="social.icon" size="1.8rem" />
          </a>
        </nav>
      </div>
      <div>
        <a
          :href="config.public.repositoryUrl"
          target="_blank"
          class="inline-flex mt-2 items-center gap-2 text-white px-3 py-1 rounded-xl bg-gray-800 hover:bg-picton-blue-900"
        >
          <mdi-icon icon="mdiGithub" size="1.5rem" />
          <span>{{ stars }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply border-t-picton-blue-900 border-solid border-t-2 py-14 mt-10;
}
h3 {
  @apply w-full font-bold;
}
ul {
  @apply mt-1 flex flex-col items-start;
}
ul a {
  @apply underline hover:no-underline hover:opacity-75 my-1 inline-block;
}
ul a.router-link-active {
  @apply no-underline opacity-75 cursor-text select-none;
}
</style>
