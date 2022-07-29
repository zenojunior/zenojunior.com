<script setup>
const socials = [
  {
    icon: "github",
    url: "https://github.com/zenojunior",
  },
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/zenojunior/",
  },
  {
    icon: "soundcloud",
    url: "https://soundcloud.com/zenojunior/likes",
  },
];
</script>

<template>
  <footer class="print:hidden">
    <div class="md:container mx-6 md:mx-auto grid grid-cols-4">
      <div class="col-span-1 hidden md:flex"></div>
      <div>
        <h3>Made with</h3>
        <p class="flex gap-2 mt-4">
          <mdicon name="vuejs" />
          <mdicon name="nuxt" />
          <mdicon name="language-javascript" />
        </p>
      </div>
      <div class="col-span-2 mx-auto md:col-span-1 md:mx-0">
        <h3>Links</h3>
        <ul>
          <NuxtLink to="/resume">Resume</NuxtLink>
          <NuxtLink to="/notes">Notes</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </ul>
      </div>
      <div>
        <h3>Socials</h3>
        <nav class="flex gap-2 mt-4">
          <NuxtLink
            v-for="(social, index) in socials"
            :key="index"
            :href="social.url"
            class="hover:opacity-75"
            target="_blank"
          >
            <mdicon :name="social.icon" />
          </NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply border-t-picton-blue-900 border-solid border-t-2 py-8 mt-10;
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