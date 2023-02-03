import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from '@vv/components/icon'
import Tree from '@vv/components/tree'
import Button from '@vv/components/button'
import Input from '@vv/components/input'
import '@vv/theme-chalk/src/index.scss'
const plugins = [
  Icon,
  Tree,
  Button,
  Input
]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
