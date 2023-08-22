import { defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs'
import { resolve } from 'path'

const links = []

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rental Mobil Wiratama",
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
    footer: {
      message: '',
      copyright: 'Hak Cipta &copy; 2023 CV. Nawasena Wiratama'
    }

  },
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
  },
  buildEnd: ({ outDir }) => {
    // you need to change hostname to your domain
    const sitemap = new SitemapStream({ hostname: 'https://rentalmobilwiratama.id' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
  }
})
