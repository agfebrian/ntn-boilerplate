<template>
  <div class="mt-4 d-flex flex-column fixed">
    <nuxt-link v-for="(item, index) in contentTitle" :key="index" :to="item.path">
      <p
        class="my-1 font-weight-bold darkgrey--text pointer"
        :class="$route.path == item.path ? 'textcolor--text' : ''"
      >
        {{ item.title }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentTitle: [],
    }
  },
  async fetch() {
    this.contentTitle = await this.$content('doc').sortBy('createdAt').fetch()
  },
}
</script>

<style scoped>
.fixed {
  position: fixed;
}
a {
  text-decoration: none;
}
</style>