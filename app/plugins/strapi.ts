export default defineNuxtPlugin(() => {
  function getStrapiMedia(media) {
    const url = media?.data?.attributes?.url
    if (url?.startsWith("/")) {
      return `${process.env.STRAPI_URL}${url}`;
    }
    return url;
  }

  return {
    provide: {
      strapiMedia: getStrapiMedia
    }
  }
});
