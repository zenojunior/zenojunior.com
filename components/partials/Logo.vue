<script setup>
const props = defineProps({
  inline: Boolean,
});
const inline = ref(props.inline);
const title = useTitle();
const route = useRoute();
</script>

<template>
  <div>
    <a
      href="/"
      :class="[
        'logo',
        route?.path === '/' ? 'cursor-text' : 'hover:opacity-75',
        inline ? 'gap-2' : 'gap-4',
        $attrs.class,
      ]"
    >
      <img
        src="~/assets/zeno.webp"
        :class="[inline ? 'w-6 h-6' : 'w-12 h-12', 'rounded-full select-none']"
        alt="Foto de Zeno"
      />
      <span :class="[inline ? 'text-tiny font-thin' : 'text-base font-bold']">{{
        title
      }}</span>
    </a>
  </div>
</template>

<style lang="postcss" scoped>
a {
  @apply flex items-center;
}
</style>