<template>
  <div class="mt-4 d-flex flex-column">
    <nuxt-link v-for="(item, index) in contentTitle" :key="index" :to="item.path">
      <p
        class="my-1 font-weight-bold darkgrey--text pointer"
        :class="$route.path == item.path ? 'textcolor--text' : ''"
      >
        {{ item.title }}
      </p>
      <div v-show="$route.path == item.path" transition="scroll-y-transition">
        <nuxt-link class="d-block w-100" v-for="(itemToc, indexToc) in item.toc" :key="indexToc" :to="'#' + itemToc.id">
          <p
            class="toc ml-4 my-2 font-weight-normal darkgrey--text pointer"
            :class="$route.fullPath.includes(itemToc.id) ? 'textcolor--text font-weight-bold' : ''"
          >
            {{ itemToc.text }}
          </p>
        </nuxt-link>
      </div>
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