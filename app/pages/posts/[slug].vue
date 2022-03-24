<template>
  <div class="uk-container uk-container-small">
    <div
      v-if="post?.attributes?.image"
      id="banner"
      class="uk-height-medium uk-height-max-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
      :data-src="$strapiMedia(post.attributes.image)"
      uk-img
    >
      <h1>{{ post.attributes.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <div v-for="child in post?.attributes?.content">
          <div
            v-if="child.__component === 'atom.markdown'"
            id="editor"
            v-html="$md.render(child.value)"
          />
          <div
            v-else-if="child.__component === 'atom.playground'"
            id="editor"
            v-html="$md.render('```' + `${child.language}\n` + child.code + '\n```')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const strapi = useStrapi4();

const { $md } = useNuxtApp();
const route = useRoute()

const { data: post } = useAsyncData("post", async () => {
  const matchingPosts = await strapi.find("posts", {
    filters: {
      slug: route.params.slug,
    },
    populate: ["image", "content"],
  });

  return matchingPosts.data[0];
});
</script>
