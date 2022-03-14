<template>
  <nuxt-link
    :key="post.id"
    :to="{ name: 'posts-slug', params: { slug: post.attributes.slug } }"
    class="uk-link-reset"
  >
    <div class="uk-card uk-card-muted">
      <div class="uk-card-media-top">
        <img :src="$strapiMedia(post.attributes.image)" height="100" />
      </div>
      <div class="uk-card-body">
        <p id="title" class="uk-text-large">{{ post.attributes.title }}</p>
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <!-- <div>
            <img
              class="avatar"
              :src="$strapiMedia(post.author.picture.url)"
              style="position: static; border-radius: 50%; object-fit: cover"
              width="40px"
              height="40px"
              :alt="post.title"
            />
          </div> -->
          <!-- <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">{{ post.author.name }}</p>
          </div> -->
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
