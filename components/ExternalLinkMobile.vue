<template>
  <div class="mt-4 d-md-flex flex-column sticky" v-show="showTocMobile">
    <p class="pt-6 font-weight-black pointer" @click="showToc">
      Table of Contents
      <v-icon class="icon-right">mdi-chevron-right</v-icon>
    </p>

    <nuxt-link v-for="(item, index) in contentTitle" :key="index" :to="item.path" v-show="showToc">
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
      showToc: true,
    }
  },
  async fetch() {
    this.contentTitle = await this.$content('doc').sortBy('createdAt').fetch()
  },
  methods: {
    showTocMobile() {
      return window.screen.width < 430
    },
    showToc() {
      this.showToc = !this.showToc
      if (showToc) {
        document.getElementsByClassName('icon-right').style.transform = 'rotate(50deg)'
      }
    },
  },
}
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  min-height: 50px;
  padding-bottom: 10px;
  top: 80px;
  z-index: 10;
  background-color: white;
}
a {
  text-decoration: none;
}
</style>