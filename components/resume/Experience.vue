<template>
  <header class="grid grid-cols-10 gap-2 p-0">
    <figure class="col-span-3">
      <img :src="`/companies/${company.slug}.png`" alt="">
    </figure>
    <div class="col-span-7">
      <h4>{{ title }}</h4>
      <p class="mb-1">
        <span>{{ company.name }}</span>
        <small v-if="period" class="block">
          <span v-if="period.start">
            {{ $dayjs(period.start).format('MMM YYYY') }}
            <span v-if="period.end"> - </span>
          </span>
          <span v-if="period.start">
            {{ period.end ? $dayjs(period.end).format('MMM YYYY') : '- Present' }}
            <span v-if="period.hours"> - </span>
          </span>
          <span v-if="period.hours" v-html="`(${period.hours} hours)`" />
          <span v-if="!period.hours && period.start" class="ml-1">
            ({{ calculateDuration }})
          </span>
        </small>
      </p>
    </div>
  </header>
  <p v-if="description" class="description">{{ description }}</p>
  <ol v-if="items" class="list-disc pl-5 !mt-1">
    <li v-for="item of items" class="text-black">{{ item }}</li>
  </ol>
</template>

<script setup>
import { computed } from 'vue'
import { useDayjs } from '#dayjs'

import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

const dayjs = useDayjs()
dayjs.extend(duration)
dayjs.extend(relativeTime)

const props = defineProps({
  title: String,
  description: String,
  items: {
    type: Array,
    default: () => ([])
  },
  remoteWork: Boolean,
  company: {
    type: Object,
    required: true
  },
  period: {
    type: Object,
    default: () => ({})
  },
  hiddenTime: {
    type: Boolean,
    default: false
  }
})

const calculateDuration = computed(() => {
  if (!props.period.start) return '1 month'
  
  const start = dayjs(props.period.start)
  const end = props.period.end ? dayjs(props.period.end) : dayjs()
  const diff = end.diff(start)
  const durationObj = dayjs.duration(diff)
  
  const years = Math.floor(durationObj.asYears())
  const months = Math.floor(durationObj.asMonths() % 12)
  const weeks = Math.floor((durationObj.asDays() % 30) / 7)
  
  const parts = []
  if (years) parts.push(`${years} year${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} month${months > 1 ? 's' : ''}`)
  if (weeks && !years) parts.push(`${weeks} week${weeks > 1 ? 's' : ''}`)
  
  return parts.join(' ')
})

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
