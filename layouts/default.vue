<template>
  <v-app>
    <app-bar @showNav="showNav"></app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <footer-app></footer-app>
    <nav-mobile :show="navigationMobile" @close="showNav"></nav-mobile>
  </v-app>
</template>

<script>
// import '@fontsource/plus-jakarta-sans'

export default {
  data() {
    return {
      navigationMobile: false,
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
