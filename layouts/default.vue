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
          <v-row class="d-flex justify-center">
            <v-col class="py-16" cols="12" md="2" lg="2" xl="2">
              <external-link></external-link>
            </v-col>
            <v-col class="pa-16" cols="12" md="10" lg="10" xl="10">
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
