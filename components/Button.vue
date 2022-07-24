<script setup>
const props = defineProps(['class'])
</script>

<template>
  <button :class="['btn flex gap-2 items-center', props.class]" v-bind="$attrs">
    <slot />
  </button>
</template>

<style lang="postcss">
.btn:deep(svg) {
  @apply fill-picton-blue-700;
}
.btn {
  @apply border-b-picton-blue-700 border-solid border-b-4 text-picton-blue-400 px-1;
   &:hover {
    @apply bg-picton-blue-700 text-white;
  }
}
</style>

<!-- <style scoped lang="scss">
  .btn {
    padding: 10px 15px;
    border-radius: 10px;
    background: #313b47;
    font-size: 1.2rem;

    &:hover {
      background: #475769;
    }

    span {
      position: relative;
      bottom: -12px;
    }
  }
</style> -->