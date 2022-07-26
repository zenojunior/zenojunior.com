<script setup>
const title = useTitle()
const yearsOfWork = useYearsWorked()
definePageMeta({ title: 'Read about me' })
</script>

<template>
  <div>
    <Head>
      <Title>About me - {{ title }}</Title>
    </Head>
    <h1 class="text-center">About me</h1>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/3 flex justify-center lg:justify-end items-center lg:py-24">
        <figure>
          <div class="relative overflow-hidden lg:rounded-r-3xl">
            
            <img src="~/assets/wien.webp" class="w-full scale-150 h-auto rounded-tr-lg rounded-br-lg grayscale-[1]" alt="">
          </div>
          <figcaption class="py-2 text-tiny opacity-40 text-white text-center">Viena - Austria</figcaption>
        </figure>
      </div>
      <div class="lg:w-1/2 p-10 flex">
        <p class="lg:2xl xl:text-3xl font-light self-center">I'm Brazilian and living in Rio Grande do Sul, Brasil. I have been working for {{ yearsOfWork }} years with software. I like to play competitive multi-player games and watch sci-fi movies.</p>
      </div>
    </div>
    <div class="md:container mx-6 md:mx-auto">
      <article class="xl:px-64 mb-20">
        <h2>Work</h2>
        <p>
          Currently I Work at <a href="https://www.linkedin.com/company/cuponomia/">Cuponomia</a>, a startup which helps shoppers save money and receive cashback for their purchases.
        </p>
        <h2>Offline</h2>
        <p>
          When I'm not coding, I enjoy play multiplayer games also discover news technology projects (or trying build somethings).
        </p>
        <p>But currently I've been studying a lot because these are my last two years at <a href="https://www.univates.br/en/">Univates</a> (university).</p>
        <p>
          Listening a good sound while I code is awesome. There are my favorite bands:
          <a href="https://music.youtube.com/channel/UCXv6UMItAxIebYSLqsfcXnQ" target="_blank">DROELOE</a> (to code),
          <a href="https://music.youtube.com/channel/UCOlopik2E2HUHaWlktS0QmA" target="_blank">Tom Walker</a> (to relax).
        </p>
      </article>
    </div>
  </div>
</template>
