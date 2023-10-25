
const path = require('path')
export default defineNuxtConfig({
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  nitro: {
    output: {
      publicDir: path.join(__dirname, 'dist')
    }
  },
  build: {
    transpile: ["vuetify"],
  },
  
  devtools: { enabled: true }
});