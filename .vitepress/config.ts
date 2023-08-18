import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiratama Rental Mobil",
  description: "Dapatkan sewa mobil dengan layanan yang bersahabat di Solo",
  cleanUrls: true,
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-EFMJSJ2WXX' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'WhatsApp', link: 'https://wa.me/6282137339589?text=id:Mohon%20info%20Sewa%20Mobil%20' }
    ],

  }
})
