<template>
  <div class="mt-4 d-md-flex flex-column sticky">
    <nuxt-link v-for="(item, index) in contentTitle" :key="index" :to="item.path">
      <p
        class="my-1 font-weight-bold darkgrey--text pointer"
        :class="$route.path == item.path ? 'textcolor--text' : ''"
      >
        {{ item.title }}
      </p>
      <div v-show="$route.path == item.path" transition="scroll-y-transition">
        <nuxt-link
          class="d-block w-100 py-1"
          v-for="(itemToc, indexToc) in item.toc"
          :key="indexToc"
          :to="'#' + itemToc.id"
          style="border-left: 2px solid #e5e5e5"
          :style="
            itemToc.id === $store.state.currentlyActiveToc
              ? { borderLeft: '2px solid #00253d' }
              : { borderLeft: '2px solid #e5e5e5' }
          "
        >
          <p
            class="toc ml-4 my-0 font-weight-normal darkgrey--text pointer"
            :class="itemToc.id === $store.state.currentlyActiveToc ? 'textcolor--text font-weight-bold' : ''"
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
.sticky {
  position: -webkit-sticky;
  position: sticky;
  min-height: 500px;
  padding-bottom: 100px;
  top: 100px;
}
a {
  text-decoration: none;
}
</style>