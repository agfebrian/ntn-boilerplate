<template>
  <div class="mt-4 d-none d-sm-flex d-md-none flex-column sticky">
    <p class="pt-6 font-weight-black pointer" @click="toggleToc">
      Table of Contents
      <v-icon transition="scale-transition" class="icon-right" v-show="showToc == false">mdi-chevron-right</v-icon>
      <v-icon transition="scale-transition" class="icon-right" v-show="showToc == true">mdi-chevron-down</v-icon>
    </p>

    <nuxt-link
      transition="scroll-y-transition"
      v-for="(item, index) in contentTitle"
      :key="index"
      :to="item.path"
      v-show="showToc"
    >
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
      showToc: false,
    }
  },
  async fetch() {
    this.contentTitle = await this.$content('doc').sortBy('createdAt').fetch()
  },
  methods: {
    toggleToc() {
      const icon = document.querySelector('.v-icon.v-icon')
      this.showToc = !this.showToc

      if (this.showToc) {
        console.log(this.showToc, icon)
        icon.style.transform = 'rotate(90deg) !important'
      } else {
        icon.style.transform = 'none'
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