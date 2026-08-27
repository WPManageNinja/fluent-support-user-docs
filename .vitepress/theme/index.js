
import DefaultTheme from 'vitepress/theme'
import Feedback from './components/Feedback.vue' // Import the file for feedback widget
import ZoomableImage from './components/ZoomableImage.vue' // Click-to-zoom image wrapper
import Layout from './Layout.vue' // Import new layout file
import './index.css'



export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Feedback', Feedback)

    // Registered globally so the markdown renderer can emit <ZoomableImage>.
    // Guarded because enhanceApp can run more than once (HMR / multiple passes).
    if (!app.component('ZoomableImage')) {
      app.component('ZoomableImage', ZoomableImage)
    }
  }
} 
