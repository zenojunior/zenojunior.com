<template>
  <div
    class="
      md:container
      mx-6
      md:mx-auto md:px-32 md:max-w-5xl
      print:hidden
      flex flex-col
      md:flex-row
      justify-between
      gap-6
      h-20
    "
  >
    <div v-if="isContent" class="flex-1 flex flex-col self-center">
      <p v-if="pending" class="text-gray-400 inline-block text-tiny mb-0">
        Loading...
      </p>
      <p
        v-if="!pending && contributors"
        class="text-gray-400 inline-block text-tiny mb-0"
      >
        Contributors:
      </p>
      <ul v-if="contributors" class="gap-2 flex">
        <li
          class="inline"
          v-for="(contributor, index) in contributors"
          :key="index"
        >
          <a
            :href="contributor.url"
            class="hover:opacity-60 flex gap-1 text-tiny"
            target="_blank"
          >
            <img
              class="'w-4 h-4 rounded-full select-none relative top-1"
              :src="contributor.avatar"
              :alt="`Foto de ${contributor.username}`"
            />
            {{ contributor.username }}
          </a>
        </li>
      </ul>
    </div>
    <div
      :class="[
        'flex-1 flex justify-center md:justify-end self-center',
        { 'items-center': isContent },
      ]"
    >
      <NuxtLink
        :href="url"
        target="_blank"
        class="text-gray-400 hover:opacity-40 mx-6 text-tiny inline-flex gap-1"
      >
        View this {{ isContent ? "post" : "page" }} on
        <mdicon name="github" class="opacity-40" /> Github
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const url = ref("");
const contributorsUrl = ref("/api/contributors");
const props = defineProps({
  defaultBranch: String,
  isContent: {
    default: false,
    type: Boolean,
  },
  repo: String,
});
const { data: contributors, pending } = useFetch(contributorsUrl, {
  refetch: true,
});

const buildUrl = (folder, filename) =>
  [props.repo, "blob", props.defaultBranch, folder, filename.substring(1)]
    .filter((path) => !!path)
    .join("/");

const updateUrl = () => {
  let filename;
  let path = props.isContent ? "content" : "pages";

  if (props.isContent) {
    filename = `${route.path}.md`;
  } else {
    const isIndex = route.matched[0].components.default.__name === "index";
    filename = isIndex ? `${route.path}/index.vue` : `${route.path}.vue`;
  }

  url.value = buildUrl(path, filename);
  if (path && filename && props.isContent) {
    contributorsUrl.value = `/api/contributors?file=${path + filename}`;
  }
};

onMounted(() => updateUrl());
watch(
  () => route.path,
  () => updateUrl()
);
</script>
