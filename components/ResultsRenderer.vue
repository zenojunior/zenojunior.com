<template>
  <KBarResults
    :items="matches.results"
    :item-height="itemHeight"
    class="max-h-96 w-96"
  >
    <!-- KBarResults creates a virtual list to manage mass of actions -->
    <!-- It also reacts to up/down/enter keystroke for activeIndex management -->
    <!-- You still may use your own component if you really want to customize the result list -->
    <template #item="{ item, active }">
      <div v-if="typeof item === 'string'" class="section text-white ">
        {{ item }}
      </div>
      <div v-else class="item cursor-pointer" :class="{ active }">
        <!-- render featured actions -->
        <div class="main">{{ item.name }}</div>
        <span v-if="item.subtitle" class="subtitle"> {{ item.subtitle }} </span>
      </div>
    </template>
  </KBarResults>
</template>

<script>
import { useKBarMatches, KBarResults } from "@bytebase/vue-kbar";

export default {
  name: 'ResultsRenderer',
  components: { KBarResults },
  setup() {
    // Visit the latest matches
    const matches = useKBarMatches();

    // Tell KBarResults the height of each item will be rendered
    const itemHeight = (params) => {
      if (typeof params.item === 'string') return 32;
      return 64;
    };

    return { matches, itemHeight };
  },
};
</script>

<style lang="scss">
.section {
  padding: 8px 16px;
  font-size: 11px;
  text-transform: uppercase;
}
.item {
  padding: 15px 10px;
  .main {
    color: #fff;
    line-height: 1;
  }
  .subtitle {
    font-size: 13px;
    color: #808080;
  }
}
.item.active {
  background: #38383e;
}
</style>