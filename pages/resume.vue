<script setup lang="ts">
const yearsWorked = ref(useYearsWorked())
const { share, isSupported: canShare } = useShare()
const optionsA4 = reactive({ fullscreen: { enable: false } })

definePageMeta({ title: 'View my resume 📃' })

const handleFullscreen = () => optionsA4.fullscreen.enable = !optionsA4.fullscreen.enable;
const handlePrint = () => window.print()
const handleShare = () => {
 share({
    title: 'Zeno Junior\'s Resume',
    url: location.href,
  })
}
</script>

<template>
  <div>
    <Head>
      <Title>Download my resume 📃 - Zeno Junior</Title>
    </Head>
    <h1 class="text-center mb-5 print:hidden">My resume</h1>
    <div class="flex justify-center mb-10 gap-3 print:hidden">
      <Button @click="handlePrint">Save</Button>
      <Button @click="handleFullscreen">Fullscreen</Button>
      <Button v-if="canShare" @click="handleShare">Share</Button>
    </div>
    <ResumeA4 :options="optionsA4">
      <section>
        <h1>Zeno Junior</h1>
        <h2>Front-end engineer enthusiastic about scalable products and users experiences</h2>
        <hr>
        <article data-title="About me">
          <p>I have {{ yearsWorked }} years of experience with web and mobile development. I'm dedicating myself to become a specialist front-end engineer. My greatest strength is the desire to change and enjoy making things happen.</p>
        </article>
        <article data-title="Experiences" class="mt-6">
          <ResumeExperience
            title="Front-end developer"
            description="I built the extension for the Chrome Web Store, SPA as the main architecture, using Vue 2 Framework (Javascript). I did help to build the Cuponomia's App using React Native (Javascript for mobile apps) and currently I'm on the app squad."
            :company="{ name: 'Cuponomia', slug: 'cuponomia' }"
            :period="{ start: '2019-09-10' }"
            remoteWork
          />
          <ResumeExperience
            title="Full-stack developer"
            description="I built PWAs using the Laravel Framework (PHP). I developed a Chatbot for Discord using Nodejs (Javascript on the server side). I was responsible for creating the mobile app front-end using Flutter (Dart)."
            :company="{ name: 'Itcode Soluções Web', slug: 'itcode' }"
            :period="{ start: '2018-09-01', end: '2019-09-10' }"
          />
          <ResumeExperience
            title="Junior Front-end developer"
            description="I worked on the recreation of the product interfaces, using Jquery and Bootstrap. I improved my knowledge in Mobile First, Accessibility and W3C Standards for web development. I was responsible for the implementation and training of services in government institutions. Here I developed advanced skills with CSS3 and HTML5."
            :company="{ name: 'Visãoi Sistemas Web', slug: 'visaoi' }"
            :period="{ start: '2014-06-01', end: '2018-09-01' }"
          />
        </article>
        <article data-title="Formation">
          <ResumeExperience
            title="Software Engineering"
            :company="{ name: 'Universidade do Vale do Taquari - Univates', slug: 'univates' }"
            :period="{ start: '2014-06-01', end: '2023-06-02', hours: 3360 }"
          />
        </article>
      </section>
      <aside>
        <ol>
          <li>Zeno Sbardelotto Junior</li>
          <li>Lajeado - RS, Brazil</li>
          <li>me@zenojunior.com</li>
        </ol>
        <ol data-title="Skills">
          <li>User experience</li>
          <li>Development</li>
          <li>HTML/CSS</li>
          <li>Git workflow</li>
          <li>Design for Interfaces</li>
        </ol>
        <ol data-title="Interests">
          <li>Micro services/Serverless</li>
          <li>Client-side and UX</li>
          <li>Scalable digitals products</li>
          <li>Internal process automation</li>
        </ol>
        <ol data-title="Motivators">
          <li>People engaged in the team</li>
          <li>Remote work</li>
          <li>Work flexible hours</li>
          <li>Build things for users</li>
        </ol>
        <ol data-title="Links">
          <li>zenojunior.com</li>
          <li>linkedin.com/ln/zenojunior</li>
          <li>github.com/zenojunior</li>
        </ol>
      </aside>
    </ResumeA4>
  </div>
</template>
