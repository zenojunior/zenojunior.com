<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const [isMenuOpen, toggleMenu] = useToggle(false)
const mdAndSmaller = breakpoints.smaller('md')

const menu = [
  {
    to: '/',
    icon: 'human-greeting-variant',
    text: 'home'
  },
  {
    to: '/resume',
    icon: 'file-account',
    text: 'resume'
  },
  {
    to: '/notes',
    icon: 'notebook',
    text: 'notes'
  },
  {
    to: '/about',
    icon: 'tooltip-account',
    text: 'about'
  }
]
</script>

<template>
  <div class="wrapper flex flex-col justify-between">
    <header class="print:hidden">
      <div class="flex container md:mx-auto justify-between items-center">
        <PartialsLogo />
        <nav class="flex gap-10">
          <button class="flex md:hidden" @click="toggleMenu(true)"><mdicon name="menu" /></button>
          <MobileNav :visible="isMenuOpen && mdAndSmaller" @close="toggleMenu(false)">
            <NuxtLink
              v-for="link in menu"
              @click="toggleMenu(false)"
              :to="link.to"
              :key="link.text"
            >
              <mdicon :name="link.icon" />
              {{ link.text }}
            </NuxtLink>
          </MobileNav>
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