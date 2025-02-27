<script setup>
import { onClickOutside } from '@vueuse/core'

const nav = ref(null)
const emit = defineEmits(['close'])
const props = defineProps(['visible'])

onClickOutside(nav, () => emit('close'))
</script>

<template>
  <nav :class="props.visible ? 'modal' : 'hidden md:flex gap-10 min-h-20'">
    <slot v-if="!props.visible" />
    <Transition name="fade" mode="out-in" appear>
      <div v-if="props.visible" ref="nav" class="bg-picton-blue-800 rounded-xl m-12 py-6 flex flex-col">
        <button
          @click="$emit('close')"
          class="close self-end w-12 h-12 flex justify-center items-center bg-gray-800 p-2 rounded-xl absolute top-4 right-4"
        >
          <mdi-icon icon="mdiClose" />
        </button>
        <div class="mobile-nav">
          <slot />
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modal {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0, 0.8);
}
</style>

<style lang="postcss" scoped>
.mobile-nav {
  @apply gap-4 flex flex-col pl-8 pr-4;
}
.mobile-nav:deep(svg) {
  @apply mr-3 relative top-1 h-7 w-7;
}
.mobile-nav:deep(a) {
  @apply flex text-2xl;
}
</style>