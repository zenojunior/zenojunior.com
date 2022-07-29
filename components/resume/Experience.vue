<template>
  <div>
    <header class="grid grid-cols-10 gap-2 p-0">
      <figure class="col-span-3">
        <img :src="`/companies/${company.slug}.png`" alt="" />
      </figure>
      <div class="col-span-7">
        <h4>{{ title }}</h4>
        <p class="mb-1">
          <span>{{ company.name }}</span>
          <small v-if="period" class="block">
            <span v-if="period.start">
              {{ formatPeriod(period.start) }}
              <span v-if="period.end"> - </span>
            </span>
            <span v-if="period.start">
              {{ formatPeriod(period.end) || "- moment" }}
              <span v-if="period.hours"> - </span>
            </span>
            <span v-if="period.hours" v-html="`(${period.hours} hours)`" />
            <span v-if="!period.hours && period.start" class="ml-1">
              ({{
                duration(
                  new Date(period.start),
                  period.end ? new Date(period.end) : undefined
                )
              }})
            </span>
          </small>
        </p>
      </div>
    </header>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
import { intervalToDuration, formatDuration, format } from "date-fns";
export default {
  props: {
    title: String,
    description: String,
    remoteWork: Boolean,
    company: {
      name: String,
      slug: String,
    },
    period: {
      start: String,
      end: String,
    },
    hiddenTime: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    duration(start, end = new Date()) {
      const duration = intervalToDuration({ start, end });
      return formatDuration(duration, { format: ["years", "months", "weeks"] });
    },
    formatPeriod(period) {
      if (!period?.length) return "";
      return format(new Date(period), "MMM yyyy");
    },
  },
};
</script>

<style lang="postcss" scoped>
header h4 {
  @apply text-base leading-none text-picton-blue-600 font-bold;
}
header figure {
  max-height: 60px;
  @apply p-2 w-28 flex justify-center items-center;
}
header figure img {
  max-width: 90px;
  max-height: 35px;
  @apply grayscale print:grayscale-0;
}
header p > small {
  font-size: 80%;
  @apply font-light font-montserrat leading-5 text-gray-400;
}

.description {
  @apply mt-1 mb-4;
}
</style>
