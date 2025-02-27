<script setup lang="ts">
import { useShare } from '@vueuse/core'
import dayjs from 'dayjs'

const config = useRuntimeConfig()
const { share, isSupported: canShare } = useShare()
const optionsA4 = reactive({ fullscreen: { enable: false } })

const { data: resume } = await useAsyncData('resume', () => queryCollection('resume').first()) as { data: any }

const handleFullscreen = () => optionsA4.fullscreen.enable = !optionsA4.fullscreen.enable
const handlePrint = () => window.print()
const handleShare = () => {
  share({ title: `Resume of ${config.public.title}`, url: location.href })
}

const yearsWorked = dayjs().diff(dayjs('2014-01-01'), 'year').toString()
const aboutText = computed(() => resume.value?.about.replace('%years%', yearsWorked))

useSeoMeta({
  title: 'Download my resume 📃',
  ogTitle: 'View my resume 📃',
})
</script>

<template>
  <ResumeA4 :options="optionsA4">
    <div class="page">
      <section>
        <h1>{{ resume.title }}</h1>
        <h2>{{ resume.subtitle }}</h2>
        <hr>
        <article data-title="About me">
          <p>{{ aboutText }}</p>
        </article>
        <article data-title="Experiences" class="mt-6">
          <ResumeExperience v-for="exp in resume.experiences" :key="exp.company.slug" v-bind="exp" />
        </article>
        <article data-title="Formation">
          <ResumeExperience v-for="form in resume.formation" :key="form.company.slug" v-bind="form" />
        </article>
      </section>
      <aside>
        <ol>
          <li v-for="(item, i) in resume.personal" :key="i">{{ Object.values(item)[0] }}</li>
        </ol>
        <ol data-title="Skills & Interests">
          <li v-for="skill in resume.skills" :key="skill">{{ skill }}</li>
        </ol>
        <ol data-title="Motivators">
          <li v-for="motivator in resume.motivators" :key="motivator">{{ motivator }}</li>
        </ol>
        <ol data-title="Languages">
          <li v-for="lang in resume.languages" :key="lang">{{ lang }}</li>
        </ol>
        <ol data-title="Links">
          <li v-for="link in resume.links" :key="link.url">
            <a :href="link.url" target="_blank">{{ link.label }}</a>
          </li>
        </ol>
      </aside>
    </div>
  </ResumeA4>
  <div class="flex justify-center mb-20 gap-3 print:hidden">
    <Button @click="handlePrint">Download</Button>
    <Button @click="handleFullscreen">Fullscreen</Button>
    <Button v-if="canShare" @click="handleShare">Share</Button>
  </div>
</template>
