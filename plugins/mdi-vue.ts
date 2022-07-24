import mdiVue from 'mdi-vue/v3'
// import * as mdijs from '@mdi/js'
import {
  mdiVuejs,
  mdiNuxt,
  mdiLanguageJavascript,
  mdiHumanGreetingVariant,
  mdiFileAccount,
  mdiNotebook,
  mdiTooltipAccount,
  mdiGithub,
  mdiLinkedin,
  mdiSoundcloud,
  mdiClose,
  mdiPrinter,
  mdiMenu,
} from '@mdi/js'

// https://github.com/therufa/mdi-vue
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(mdiVue, {
    icons: {
      mdiVuejs,
      mdiNuxt,
      mdiLanguageJavascript,
      mdiHumanGreetingVariant,
      mdiFileAccount,
      mdiNotebook,
      mdiTooltipAccount,
      mdiGithub,
      mdiLinkedin,
      mdiSoundcloud,
      mdiClose,
      mdiPrinter,
      mdiMenu,
    },
  })
})
