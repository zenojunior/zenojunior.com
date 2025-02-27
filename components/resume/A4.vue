<script setup>
import { useFullscreen, onClickOutside, useStyleTag } from '@vueuse/core'

const props = defineProps(['options'])
const a4 = ref(null)
const print = ref(null)

const { isFullscreen, exit, toggle } = useFullscreen(print)
watch(() => props.options.fullscreen.enable, () => toggle())
onClickOutside(a4, (event) => exit())

// Hack when only one page to print. Won't show the second empty page
onMounted(() => {
  const { load, unload } = useStyleTag('body, html { overflow: hidden }', { media: 'print' })
  const pages = a4.value.getElementsByClassName('page').length;
  (pages === 1) ? load() : unload();
})
</script>

<template>
  <section id="print" ref="print" class="flex justify-center md:mb-10">
    <div ref="a4" :class="['transform', { isFullscreen }]">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" print>
  .page { page-break-after: always; }
  @page { size: A4; margin: 0; }
  body, html { height: 100%; margin: 0 !important; }
</style>

<style lang="scss">
.page {
  width: 21cm!important;
  height: 29.7cm!important;
  background: url('/a4-texture.png') #fff;
  *::selection {
    background: #283441;
    color: #fff;
  }
}

@media not print {
  @media screen and (max-width: 768px) {
    .transform {
      transform: scale(0.5);
      margin: -150px -20rem;
      overflow: hidden;
      &:not(.isFullscreen) { height: 700px; }
    }
    .page {
      align-self: flex-start;
    }
  }
}
</style>

<style lang="postcss" scoped>
#print:deep(.page) {
  @apply flex gap-10 p-16 cursor-text md:mb-4;
}
#print:deep(.page section) {
  @apply w-4/6;
}

#print:deep(.page aside) {
  @apply w-2/6;
}
#print:deep(.page h1) {
  color: #666666;
  @apply font-semibold font-roboto text-5xl leading-6 mb-6;
}
#print:deep(.page hr) {
  @apply my-5 border-t-gray-300;
}

#print:deep(.page h2) {
  font-size: 16px;
  color: #000;
  @apply text-regular font-roboto text-gray-500 leading-5;
}
#print:deep(.page h4) {
  @apply font-bold font-sans text-gray-600 text-tiny leading-6;
}

#print:deep(.page ol)::before, #print:deep(.page article)::before {
  content: attr(data-title);
  @apply block uppercase cursor-text font-roboto font-light text-tiny mb-1 text-gray-900 print:text-picton-blue-700;
}
#print:deep(.page ol > li), #print:deep(.page p), #print:deep(.page span) {
  @apply text-tiny font-roboto text-gray-500 text-justify leading-4;
}

#print:deep(.page ol) {
  @apply mb-5;
}
#print:deep(.page ol:first-of-type) {
  @apply mt-5;
}
</style>