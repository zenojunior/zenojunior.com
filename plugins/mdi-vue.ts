import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

// https://github.com/therufa/mdi-vue
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(mdiVue, {
    icons: {
      mdiVuejs: mdijs.mdiVuejs,
      mdiNuxt: mdijs.mdiNuxt,
      mdiLanguageJavascript: mdijs.mdiLanguageJavascript,
      mdiHumanGreetingVariant: mdijs.mdiHumanGreetingVariant,
      mdiFileAccount: mdijs.mdiFileAccount,
      mdiNotebook: mdijs.mdiNotebook,
      mdiTooltipAccount: mdijs.mdiTooltipAccount,
      mdiGithub: mdijs.mdiGithub,
      mdiLinkedin: mdijs.mdiLinkedin,
      mdiSoundcloud: mdijs.mdiSoundcloud,
      mdiClose: mdijs.mdiClose,
      mdiPrinter: mdijs.mdiPrinter,
      mdiMenu: mdijs.mdiMenu,
    },
  })
})
