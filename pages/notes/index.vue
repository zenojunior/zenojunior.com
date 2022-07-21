<script setup>
import { format } from 'date-fns'
</script>

<template>
  <div>
    <Head>
      <Title>Saving some notes - Zeno Junior</Title>
    </Head>
    <h1 class="text-center mb-12">Notes</h1>
    <div class="md:container min-h-[calc(100vh-20rem)] mx-6 md:mx-auto flex flex-col items-stretch justify-center">
      <div class="self-center max-w-3xl mb-10">
        <ContentList path="/notes" v-slot="{ list }">
          <div class="mb-28" v-for="note in list" :key="note._path">
            <a :href="note._path" class="opacity-80 hover:opacity-100 text-left block">
              <h2 class="text-picton-blue-300 hover:text-picton-blue-400">{{ note.title }}</h2>
            </a>
            <ul class="horizontal-info flex gap-4 items-center mt-3 text-gray-400 text-xl mb-6">
              <li>
                {{ note.category }}
              </li>
              <li>
                {{ format(new Date(note.date), "PP") }}
              </li>
            </ul>
            <p>
              {{ note.description }}
            </p>
          </div>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.horizontal-info {
  li {
    color: inherit;
  }
  li::after {
    content: "";
    display: inline;
    border-right: 1px solid rgb(95, 95, 95);
    padding-right: 1rem;
  }

  li:last-child::after {
    display: none;
  }
}
@media screen and (max-width: 992px) {
  h2 {
    font-size: 2.25rem;
    line-height: 2.4rem;
  }
}
</style>
