<template>
  <v-app>
    <div v-if="$route.path == '/'">
      <app-bar @showNav="showNav"></app-bar>
      <v-main>
        <v-container fluid class="pa-0">
          <Nuxt />
        </v-container>
      </v-main>
      <footer-app></footer-app>
      <nav-mobile :show="navigationMobile" @close="showNav"></nav-mobile>
    </div>

    <div v-else>
      <app-bar @showNav="showNav"></app-bar>
      <v-main>
        <v-container class="pa-0">
          <v-row>
            <v-col class="d-flex flex-column" cols="12" md="3" lg="3" xl="3">
              <div v-if="posts">
                <nuxt-link v-for="(item, index) in posts" :key="index" :to="item.title">{{ item.title }}</nuxt-link>
              </div>
              <!-- <nuxt-link to="#">Link 2</nuxt-link>
              <nuxt-link to="#">Link 3</nuxt-link> -->
            </v-col>
            <v-col cols="12" md="7" lg="7" xl="7">
              <Nuxt />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <footer-app></footer-app>
      <nav-mobile :show="navigationMobile" @close="showNav"></nav-mobile>
    </div>
  </v-app>
</template>

<script>
// import '@fontsource/plus-jakarta-sans'

export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('doc').fetch()
    } catch (e) {
      error({ message: 'Doc not found' })
    }
    return { posts }
    // console.log(posts)
    // this.tableOfContent = posts
  },
  data() {
    return {
      navigationMobile: false,
      tableOfContent: [],
    }
  },
  methods: {
    showNav(e) {
      this.navigationMobile = e
    },
  },
  created() {
    if (process.client) {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date()
      ;(function () {
        var s1 = document.createElement('script'),
          s0 = document.getElementsByTagName('script')[0]
        s1.async = true
        s1.src = 'https://embed.tawk.to/6165478286aee40a573621aa/1fhppum73'
        s1.charset = 'UTF-8'
        s1.setAttribute('crossorigin', '*')
        s0.parentNode.insertBefore(s1, s0)
      })()
    }
  },
}
</script>
