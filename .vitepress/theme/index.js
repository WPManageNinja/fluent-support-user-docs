import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue'
import Layout from './Layout.vue'
import ZoomableImage from './components/ZoomableImage.vue'
import './index.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  },
}
