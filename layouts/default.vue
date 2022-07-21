<template>
  <div class="wrapper flex flex-col justify-between">
    <header>
      <div class="flex container md:mx-auto justify-between items-center">
        <PartialsLogo />
        <nav class="hidden md:flex gap-10">
          <NuxtLink to="/">
            <mdicon name="human-greeting-variant" />
            home
          </NuxtLink>
          <NuxtLink to="/resume">
            <mdicon name="file-account" />
            resume
          </NuxtLink>
          <NuxtLink to="/notes">
            <mdicon name="notebook" />
            notes
          </NuxtLink>
          <NuxtLink to="/about">
            <mdicon name="tooltip-account" />
            about
          </NuxtLink>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
  <PartialsFooter />
</template>

<style lang="postcss">
  header {
    @apply flex justify-between py-16 px-12;
  }
  nav > a {
    @apply flex flex-col items-center gap-1 pb-1 opacity-75;

    &.router-link-active {
      @apply border-b-4 mb-4 cursor-text opacity-100;
    }

    &:hover:not(.router-link-active) {
      @apply opacity-100;
    }
  }
</style>