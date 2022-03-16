<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <Posts :posts="posts?.data ?? posts" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Posts from "../components/Posts.vue";

const strapi = useStrapi4();

const { data: posts } = useAsyncData("posts", async () =>
  strapi.find("posts", { populate: ["image"] })
);
</script>
