<script setup>
const nav = ref(null)
const emit = defineEmits(['close'])
const props = defineProps(['visible'])

onClickOutside(nav, () => emit('close'))
</script>

<template>
  <nav :class="props.visible ? 'modal' : 'hidden md:flex gap-10'">
    <slot v-if="!props.visible" />
    <div v-else ref="nav" class="bg-picton-blue-800 rounded-xl m-12 py-12 flex flex-col">
      <button
        @click="$emit('close')"
        class="close self-end w-12 h-12 flex justify-center items-center bg-gray-800 p-2 rounded-xl absolute top-4 right-4"
      >
        <mdicon name="close" />
      </button>
      <div class="mobile-nav self-center">
        <slot />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
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
  @apply gap-4 flex flex-col;
}
.mobile-nav:deep(svg) {
  @apply mr-2 relative top-1;
}
.mobile-nav:deep(a) {
  @apply flex text-xl;
}
</style>