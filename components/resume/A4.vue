<template>
  <section id="print" class="flex justify-center mb-20">
    <div class="transform preserve-3d justify-center flex lg:inline-block items-center">
      <div class="paper" :style="`background: url(a4-texture.png) #fff;`">
        <slot />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.paper {
  width: 21cm!important;
  height: 29.7cm!important;
  *::selection {
    background: #283441;
    color: #fff;
  }
}
</style>

<style lang="postcss" scoped>
.paper {
  @apply flex gap-10 p-16 cursor-text;
}
.paper:deep(section) {
  @apply w-4/6;
}

.paper:deep(aside) {
  @apply w-2/6;
}
.paper:deep(h1) {
  color: #666666;
  @apply font-semibold mb-3 font-roboto text-5xl leading-6 mb-6;
}
.paper:deep(hr) {
  @apply my-5 border-t-gray-300;
}

.paper:deep(h2) {
  font-size: 16px;
  color: #000;
  @apply text-regular font-roboto text-gray-500 leading-5;
}
.paper:deep(h4) {
  @apply font-bold font-sans text-gray-600 text-tiny leading-6;
}

.paper:deep(ol)::before, .paper:deep(article)::before {
  content: attr(data-title);
  @apply block uppercase cursor-text font-roboto font-light text-tiny mb-1 print:text-picton-blue-700;
}
.paper:deep(ol > li), .paper:deep(p) {
  @apply text-tiny font-roboto text-gray-500 text-justify leading-4;
}

.paper:deep(ol) {
  @apply mb-5;
}
.paper:deep(ol:first-of-type) {
  @apply mt-5;
}
</style>