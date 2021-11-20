<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
      style="z-index: 100; border-bottom: 1px solid #d2d2d2 !important"
      id="top"
      height="80px"
    >
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
            <v-btn class="hidden-md-and-up" icon @click="showNav">
              <v-img max-width="23" contain class="pointer" :src="require('@/assets/img/menu-2.svg')"></v-img>
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
                <!-- <div class="ml-9 mega-menu-wrapper" @mouseover="showMegaMenu = true" @mouseleave="showMegaMenu = false">
                  <p class="mb-0 font-weight-bold darkgrey--text pointer">Case Study</p>
                  <v-scroll-y-transition>
                    <div v-show="showMegaMenu" class="mega-menu">
                      <ul>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-a/')"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              :src="require('@/assets/img/icon/startup.svg')"
                            ></v-img>
                            <p class="mt-1 mb-0 title">Startup <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get to know your target market easily</p>
                        </li>
                        <v-divider></v-divider>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-b/')"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              :src="require('@/assets/img/icon/investors.svg')"
                            ></v-img>
                            <p class="mt-1 mb-0 title">Investors <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get valid and relevant information from various prospects</p>
                        </li>
                        <v-divider></v-divider>
                        <li class="d-flex flex-column text-truncate">
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              :src="require('@/assets/img/icon/market-research.svg')"
                            ></v-img>
                            <p class="mt-1 mb-0 title">Market Researcher <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get accurate and reliable information according to your needs</p>
                        </li>
                        <v-divider></v-divider>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-d/')"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              max-height="25px"
                              contain
                              :src="require('@/assets/img/icon/professional-person.svg')"
                            ></v-img>
                            <p class="mt-1 mb-0 title">Professionals <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get your best business opportunities with reliable information</p>
                        </li>
                      </ul>
                    </div>
                  </v-scroll-y-transition>
                </div> -->
                <div class="ml-9 mega-menu-wrapper" @mouseover="showMegaMenu = true" @mouseleave="showMegaMenu = false">
                  <p
                    class="mb-0 font-weight-bold pointer"
                    :class="$route.path == '/case-study' ? 'textcolor--text' : 'darkgrey--text'"
                  >
                    Case Study
                  </p>
                  <v-scroll-y-transition>
                    <div v-show="showMegaMenu" class="mega-menu">
                      <ul>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-a/')"
                          @mouseover="hoverCaseA = true"
                          @mouseleave="hoverCaseA = false"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3 svg"
                              max-width="30px"
                              :src="
                                hoverCaseA
                                  ? require('@/assets/img/icon/startup-black.svg')
                                  : require('@/assets/img/icon/startup.svg')
                              "
                            ></v-img>
                            <p class="mt-1 mb-0 title">Startup <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get to know your target market easily</p>
                        </li>
                        <v-divider></v-divider>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-b/')"
                          @mouseover="hoverCaseB = true"
                          @mouseleave="hoverCaseB = false"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              :src="
                                hoverCaseB
                                  ? require('@/assets/img/icon/investors-black.svg')
                                  : require('@/assets/img/icon/investors.svg')
                              "
                            ></v-img>
                            <p class="mt-1 mb-0 title">Investors <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get valid and relevant information from various prospects</p>
                        </li>
                        <v-divider></v-divider>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-c/')"
                          @mouseover="hoverCaseC = true"
                          @mouseleave="hoverCaseC = false"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              :src="
                                hoverCaseC
                                  ? require('@/assets/img/icon/market-research-black.svg')
                                  : require('@/assets/img/icon/market-research.svg')
                              "
                            ></v-img>
                            <p class="mt-1 mb-0 title">Market Researcher <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get accurate and reliable information according to your needs</p>
                        </li>
                        <v-divider></v-divider>
                        <li
                          class="d-flex flex-column text-truncate"
                          @click="goToLink('https://lp.interconnectdata.com/case-study/case-d/')"
                          @mouseover="hoverCaseD = true"
                          @mouseleave="hoverCaseD = false"
                        >
                          <div class="d-flex justify-start align-center pt-1">
                            <v-img
                              class="mr-3"
                              max-width="30px"
                              max-height="25px"
                              contain
                              :src="
                                hoverCaseD
                                  ? require('@/assets/img/icon/professional-person-black.svg')
                                  : require('@/assets/img/icon/professional-person.svg')
                              "
                            ></v-img>
                            <p class="mt-1 mb-0 title">Professionals <v-icon small>mdi-arrow-right</v-icon></p>
                          </div>
                          <p class="mt-1 text">Get your best business opportunities with reliable information</p>
                        </li>
                      </ul>
                    </div>
                  </v-scroll-y-transition>
                </div>
                <p
                  class="mb-0 ml-9 font-weight-bold darkgrey--text pointer"
                  @click="goToLink('https://lp.interconnectdata.com/about')"
                >
                  About Us
                </p>
                <p
                  class="mb-0 ml-9 font-weight-bold pointer darkgrey--text"
                  @click="goToLink('https://apps.interconnectdata.com/subscribe')"
                >
                  Subscribe
                </p>
                <p
                  class="mb-0 mr-6 ml-9 font-weight-bold pointer darkgrey--text"
                  :class="$route.path == '/' ? 'textcolor--text' : 'darkgrey--text'"
                  @click="$router.push('/')"
                >
                  Help
                </p>
                <v-btn
                  color="primary"
                  dark
                  class="ml-12"
                  @click="goToLink('https://apps.interconnectdata.com/register')"
                >
                  <v-img :src="require('@/assets/img/icon/rocket-new.svg')" contain class="mr-2" max-width="21"></v-img>
                  Try it free</v-btn
                >
                <v-btn
                  outlined
                  color="primary"
                  class="ml-3"
                  style="background-color: #f6f9ff"
                  dark
                  @click="goToLink('https://apps.interconnectdata.com/login')"
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
    return {
      showMegaMenu: false,
      hoverCaseA: false,
      hoverCaseB: false,
      hoverCaseC: false,
      hoverCaseD: false,
    }
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

<style lang="scss" scoped>
.mega-menu-wrapper {
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
}
.mega-menu {
  width: 500px;
  margin-left: -200px;
  padding: 10px 20px;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  background-color: #ffffff;
  box-shadow: 1px 5px 10px rgba(202, 203, 209, 0.75);
  -webkit-box-shadow: 1px 5px 10px rgba(202, 203, 209, 0.75);
  -moz-box-shadow: 1px 5px 10px rgba(202, 203, 209, 0.75);
  border: 1px solid white !important;
  // transition: all 0.8s ease-out;
  ul {
    margin: 0px;
    padding: 0px;
    li {
      list-style: none;
      p {
        color: rgb(56, 52, 52);
      }
    }
    li:hover {
      cursor: pointer;
      p {
        color: black;
      }
      i {
        color: black;
      }
    }
  }
}
</style>
