<template>
  <div>
    <div class="wrapper flex flex-col justify-between">
      <main class="pt-12">
        <div
          class="container mx-auto flex justify-center items-center gap-3 mb-6"
        >
          <PartialsLogo class="opacity-80 hover:opacity-100" />
        </div>
        <slot />
        <EditOnGithub
          repo="https://github.com/zenojunior/zenojunior.com"
          defaultBranch="main"
          isContent
        />
      </main>
    </div>
    <PartialsFooter />
  </div>
</template>

<style lang="postcss">
header {
  @apply flex justify-between px-2 py-16 md:px-12;
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