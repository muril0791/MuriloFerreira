// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  ssr: true,
  components: true,
  devServer: {
    port: 3030,
  },
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
 
  tailwindcss: {
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  colorMode: {
    preference: "system",
    dataValue: "theme",
    classSuffix: "",
  },
});