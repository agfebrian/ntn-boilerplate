<template>
  <div>
    <v-app-bar app color="white" flat style="border-bottom: 1px solid #d2d2d2 !important" id="top" height="80px">
      <v-container class="px-8" fluid>
        <div class="d-flex">
          <div class="logo d-flex align-center pointer" id="logo">
            <v-img
              max-width="120"
              :src="require('@/assets/img/logo-blue.svg')"
              @click="goToLink('https://lp.interconnectdata.com/')"
            ></v-img>
          </div>
          <v-spacer></v-spacer>
          <div class="d-flex align-center">
            <!-- show on mobile only -->
            <v-btn icon @click="showNav">
              <v-img
                max-width="23"
                contain
                class="pointer hidden-md-and-up"
                :src="require('@/assets/img/menu-2.svg')"
              ></v-img>
            </v-btn>

            <!-- show on dekstop only -->
            <div class="hidden-sm-and-down">
              <div class="flex-row d-flex align-center">
                <p
                  class="mb-0 font-weight-bold darkgrey--text pointer"
                  @click="goToLink('https://lp.interconnectdata.com/')"
                >
                  Home
                </p>
                <p
                  class="mb-0 ml-9 font-weight-bold darkgrey--text pointer"
                  @click="goToLink('https://lp.interconnectdata.com/product')"
                >
                  Product
                </p>
                <p
                  class="mb-0 ml-9 font-weight-bold darkgrey--text pointer"
                  @click="goToLink('https://lp.interconnectdata.com/about')"
                >
                  About Us
                </p>
                <p
                  class="mb-0 ml-9 font-weight-bold pointer darkgrey--text"
                  @click="goToLink('https://devapps.interconnectdata.com/subscribe')"
                >
                  Subscribe
                </p>
                <p
                  class="mb-0 mr-6 ml-9 font-weight-bold pointer darkgrey--text"
                  :class="$route.path == '/*' ? 'textcolor--text' : 'darkgrey--text'"
                >
                  Help
                </p>
                <v-btn
                  color="primary"
                  dark
                  class="ml-12"
                  @click="goToLink('https://devapps.interconnectdata.com/register')"
                >
                  <v-img :src="require('@/assets/img/icon/rocket.svg')" contain class="mr-2" max-width="21"></v-img>
                  Try it free</v-btn
                >
                <v-btn
                  outlined
                  color="primary"
                  class="ml-3"
                  style="background-color: #f6f9ff"
                  dark
                  @click="goToLink('https://devapps.interconnectdata.com/login')"
                >
                  <span class="font-weight-bold">Login</span></v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    goToLink(link) {
      window.location = link
    },
    showNav() {
      this.$emit('showNav', true)
    },
  },
}
</script>

<style lang="scss" scoped></style>
