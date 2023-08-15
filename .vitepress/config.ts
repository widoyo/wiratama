import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiratama Rental Mobil",
  description: "Dapatkan sewa mobil dengan layanan yang mudah dan efisien",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WhatsApp', link: 'https://wa.me/6282137339589?text=Mohon%20info%20' }
    ],

  }
})
