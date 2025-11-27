// Import custom CSS for brand colors
import './index.css'

// Export default theme (using VitePress default theme)
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'

export default {
  ...DefaultTheme,
  setup() {
    // Function to update logo based on theme for element with data-v-bf706f89
    const updateLogo = () => {
      const logoElement = document.querySelector('[data-v-bf706f89]')
      if (logoElement) {
        const logoImg = logoElement.querySelector('img')
        if (logoImg) {
          const isDark = document.documentElement.classList.contains('dark')
          if (isDark) {
            logoImg.src = '/images/brand/fluentsupport_secondary_logo.png'
          } else {
            logoImg.src = '/images/brand/fluentsupport_primary_logo.png'
          }
          
          // Ensure image is visible
          logoImg.style.display = 'block'
          logoImg.style.visibility = 'visible'
          logoImg.style.opacity = '1'
        }
        
        // Hide title text elements (but keep image containers)
        const textElements = logoElement.querySelectorAll('span, .text, .title')
        textElements.forEach(el => {
          // Only hide if it doesn't contain an image and has text content
          if (!el.querySelector('img') && el.textContent && el.textContent.trim() !== '') {
            el.style.fontSize = '0'
            el.style.lineHeight = '0'
            el.style.width = '0'
            el.style.height = '0'
            el.style.overflow = 'hidden'
            el.style.visibility = 'hidden'
          }
        })
      }
    }

    onMounted(() => {
      updateLogo()
      
      // Watch for theme changes
      const observer = new MutationObserver(() => {
        updateLogo()
      })
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
      
      // Also watch for DOM changes (in case element loads later)
      const navObserver = new MutationObserver(() => {
        updateLogo()
      })
      
      navObserver.observe(document.body, {
        childList: true,
        subtree: true
      })
    })
  }
}

