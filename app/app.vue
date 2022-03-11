<template>
  <div>
    <h1 class="bg-green-500">Hello {{ message }}</h1>
    <input v-model="message" />
    <textarea :value="$md.render(data, null, 4)" />
  </div>
</template>

<script setup lang="ts">
const strapi = useStrapi4();
const message = ref("A");

const { data } = await useAsyncData('posts', () => strapi.find('posts', { populate: ["content"] }))

onMounted(() => {
  strapi.find('posts')
})
</script>
