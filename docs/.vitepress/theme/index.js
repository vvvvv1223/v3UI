import DefaultTheme from 'vitepress/theme'

import VIcon from '@vv/components/icon/index'
import VButton from '@vv/components/button/index'
import '@vv/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    app.use(VIcon).use(VButton)
  }
}