import { defineNuxtConfig } from 'nuxt3'

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/strapi'
  ],
  publicRuntimeConfig: {
    STRAPI_URL,
  },
  meta: {
    title: 'IniZio',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Staatliches",
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    "uikit/dist/css/uikit.min.css",
    "uikit/dist/css/uikit.css",
    "~/assets/css/main.css",
  ]
})
