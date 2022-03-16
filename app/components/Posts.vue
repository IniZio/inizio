<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <PostCard v-for="post in leftPosts" :key="post.id" :post="post" />
      </div>
      <div>
        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <PostCard v-for="post in rightPosts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";

export default {
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    leftPostsCount() {
      return Math.ceil((this.posts?.length ?? 0) / 5);
    },
    leftPosts() {
      return this.posts?.slice(0, this.leftPostsCount);
    },
    rightPosts() {
      return this.posts?.slice(this.leftPostsCount, this.posts.length);
    },
  },
};
</script>
