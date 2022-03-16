export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  function getStrapiMedia(media) {
    const url = media?.data?.attributes?.url
    if (url?.startsWith("/")) {
      return `${config.STRAPI_URL}${url}`;
    }
    return url;
  }

  return {
    provide: {
      strapiMedia: getStrapiMedia
    }
  }
});
