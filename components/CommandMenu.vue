<template>
  <KBarProvider :actions="globalActions">
    <ClientOnly>
      <KBarPortal>
        <KBarPositioner class="bg-black bg-opacity-70 relative" style="z-index: 500">
          <KBarAnimator class="rounded-lg w-128 overflow-hidden bg-zinc-800">
            <KBarSearch class="px-3 py-4 text-lg w-full box-border outline-none border-none bg-zinc-800" />
            <ResultsRenderer />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
    </ClientOnly>
    <slot />
  </KBarProvider>
</template>

<script>
import { useRouter } from 'vue-router';
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  createAction,
} from '@bytebase/vue-kbar';
export default {
  components: {
    KBarProvider,
    KBarPortal,
    KBarPositioner,
    KBarAnimator,
    KBarSearch,
  },
  setup() {
    const router = useRouter();
    const globalActions = [
      createAction({
        id: 'resume',
        name: 'Resume',
        shortcut: ['r', 'c'],
        section: 'Site',
        perform: () => router.push('/resume'),
      }),
      createAction({
        id: 'projects',
        name: 'Projects',
        shortcut: ['p', 'r'],
        section: 'Site',
        perform: () => router.push('/projects'),
      }),
      createAction({
        id: 'about',
        name: 'About',
        shortcut: ['a'],
        subtitle: `Who I'm`,
        section: 'Site',
        perform: () => router.push('/about'),
      }),
    ];
    return { globalActions };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');
#__nuxt {
  height: 100%;
  z-index: 2;
  position: relative;
}
</style>