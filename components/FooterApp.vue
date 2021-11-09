<template>
  <div>
    <!-- <v-row style="background-color: #f9fbff" class="hidden-sm-and-down mt-16" v-if="showSubscribeView">
      <v-col cols="12" md="6" lg="6" class="py-16">
        <v-img 
          transition="scroll-x-transition"
          :src="require('@/assets/img/laptop-phone-1.png')"></v-img>
      </v-col>
      <v-col cols="12" md="6" lg="6" class="py-16">
        <div style="width: 600px" class="mt-16 ml-6">
          <h2 style="font-size: 3rem">Download App on your</h2>
          <h2 style="font-size: 3rem">Device</h2>
          <p class="mt-6 text-subtitle-cust-2 darkgrey--text">Download our apps on your Device. its free and you can check the data</p>
          <v-divider style="width: 600px" class="my-10"></v-divider>
          <div class="flex-row justify-start d-flex flex-wrap mt-6">
            <v-img
              max-width="280"
              contain
              style="transition-duration: 0.4s"
              :src="require('@/assets/img/google-play.png')"
              class="pointer mr-5"
              @click="
                goTo(
                  'https://play.google.com/store/apps/details?id=com.interconnect.data'
                )
              "
            ></v-img>
            <v-img
              max-width="280"
              contain
              style="transition-duration: 0.4s"
              :src="require('@/assets/img/app-store.png')"
              class="pointer ml-5"
            ></v-img>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="py-16 mb-16">
        <div class="d-flex flex-column justify-center align-center">
          <v-card style="width: 60%" class="pa-16 d-flex flex-column align-center shadow" outlined>
            <h2 style="font-size: 3rem">Subscribe Our Newsletter</h2>
            <v-text-field
              class="mt-8 rounded-lg"
              style="width: 100%"
              dense
              outlined
              placeholder="Your E-Mail"
            >
              <template v-slot:append>
                <div class="d-flex" style="height: 100%">
                  <v-btn class="ml-2 mb-2 mx-0" color="primary" dark x-large>
                    Subscribe
                  </v-btn>
                </div>
              </template>
            </v-text-field>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <v-row style="background-color: #f9fbff" class="hidden-md-and-up" v-if="showSubscribeView">
      <v-col cols="12" class="py-16 mb-16">
        <div class="px-10 d-flex justify-center">
          <v-img 
            max-width="300px" 
            transition="scroll-y-reverse-transition"
            :src="require('@/assets/img/laptop-phone-1.png')"></v-img>
        </div>
        <div style="width: 100%" class="mt-16">
          <div class="px-10">
            <h2 class="font-weight-bold">Download App on your Device</h2>
            <p class="mt-6 darkgrey--text">Download our apps on your Device. its free and you can check the data</p>
          </div>
          <v-divider class="my-10 mx-10"></v-divider>
          <div style="width: 100%" class="flex-row justify-center d-flex flex-wrap mt-6 px-10">
            <v-img
              max-width="200"
              contain
              style="transition-duration: 0.4s"
              :src="require('@/assets/img/google-play.png')"
              class="pointer mx-5 my-2"
              @click="
                goTo(
                  'https://play.google.com/store/apps/details?id=com.interconnect.data'
                )
              "
            ></v-img>
            <v-img
              max-width="204"
              contain
              style="transition-duration: 0.4s"
              :src="require('@/assets/img/app-store.png')"
              class="pointer mx-5 my-2"
            ></v-img>
          </div>
        </div>

        <div class="d-flex flex-column justify-center align-center px-10 mt-16">
          <v-card style="width: 100%" class="pa-16 d-flex flex-column justify-center align-center shadow" outlined>
            <h2 class="font-weight-bold">Subscribe</h2>
            <h2 class="font-weight-bold">Our</h2>
            <h2 class="font-weight-bold">Newsletter</h2>
            <v-text-field
              class="mt-8 mb-0"
              style="width: 100%"
              placeholder="Your E-Mail"
              hide-details
              outlined
              dense
            ></v-text-field>
            <v-btn style="width: 100%" class="my-4" color="primary" dark>
              Subscribe
            </v-btn>
          </v-card>
        </div>
      </v-col>
    </v-row> -->
    <v-sheet color="primary" width="100%" class="py-12 white--text">
      <v-container class="mb-9">
        <v-row no-gutters>
          <v-col cols="12" md="6" lg="6" xl="6" class="pr-12">
            <v-img max-width="170" :src="require('@/assets/img/logo-white.svg')" class="mb-3"></v-img>
            <div class="flex-row mt-6 d-flex">
              <div>
                <v-btn
                  icon
                  outlined
                  color="#CED1D6"
                  large
                  class="mr-4"
                  @click="goTo('https://www.facebook.com/Interconnect-data-100846515646821')"
                >
                  <v-icon> mdi-facebook </v-icon>
                </v-btn>
                <v-btn
                  icon
                  outlined
                  color="#CED1D6"
                  large
                  class="mr-4"
                  @click="goTo('https://www.instagram.com/interconnectdata/')"
                >
                  <v-icon> mdi-instagram </v-icon>
                </v-btn>
                <v-btn
                  icon
                  outlined
                  color="#CED1D6"
                  large
                  class="mr-4"
                  @click="goTo('https://www.youtube.com/channel/UCJLNL0mDSrKt-oUfMLH-o0w')"
                >
                  <v-icon> mdi-youtube </v-icon>
                </v-btn>
                <v-btn
                  icon
                  outlined
                  color="#CED1D6"
                  large
                  @click="goTo('https://www.linkedin.com/company/femmeline-inc/about/')"
                >
                  <v-icon> mdi-linkedin </v-icon>
                </v-btn>
              </div>
            </div>
            <!-- <v-divider color="#667C8B" class="mt-6"></v-divider> -->
            <!-- <div class="flex-row mt-3 pr-9 d-flex align-center">
              <v-text-field
                v-model="subscribe"
                placeholder="Your email"
                class="pb-0 my-auto mr-3 mt-7"
                solo
                dense
              ></v-text-field>
              <v-btn class="my-auto">Subscribe</v-btn>
            </div> -->
            <!-- <div class="hidden-sm-and-down">
              <div class="d-flex justify-start">
                <v-card style="background-color: rgba(196, 196, 196, 0.1);" class="d-flex rounded-pill pa-2" outlined>
                  <div style="max-width: 70px">
                    <v-img
                      :src="require('@/assets/img/icon/phone-circle-outlined.svg')"
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column">
                    <v-card-text class="py-0">
                      <p class="text-uppercase mb-0" style="color: #FFFFFF; opacity: 0.5">
                        call center 24 hours
                      </p>
                    </v-card-text>
                    <v-card-text class="py-0">
                      <h2 style="font-size: 1.2rem; color: #FFFFFF">+65 69732390</h2>
                    </v-card-text>
                  </div>
                </v-card>
              </div>
            </div> -->
          </v-col>
          <v-col cols="12" md="6" lg="6" xl="6">
            <v-row>
              <v-col cols="6" md="4" lg="4" xl="4">
                <h3 class="mb-3 white--text">About</h3>
                <p
                  class="pointer white--text"
                  @click="$route.path == '/about' ? $vuetify.goTo('#top', options) : $router.push('/about')"
                >
                  About Us
                </p>
                <p
                  class="pointer white--text"
                  @click="
                    $route.path == '/about' ? $vuetify.goTo('.contact', options) : $router.push('/about?contact=us')
                  "
                >
                  Contact Us
                </p>
              </v-col>
              <v-col cols="6" md="4" lg="4" xl="4">
                <h3 class="mb-3 white--text">Social</h3>
                <a href="https://www.facebook.com/Interconnect-data-100846515646821" target="_blank"
                  ><p class="pointer white--text">Facebook</p></a
                >
                <a href="https://www.instagram.com/interconnectdata/" target="_blank"
                  ><p class="pointer white--text">Instagram</p></a
                >
                <a href="https://www.youtube.com/channel/UCJLNL0mDSrKt-oUfMLH-o0w" target="_blank"
                  ><p class="pointer white--text">Youtube</p></a
                >
                <a href="https://www.linkedin.com/company/femmeline-inc/about/" target="_blank"
                  ><p class="pointer white--text">LinkedIn</p></a
                >
              </v-col>
              <v-col cols="6" md="4" lg="4" xl="4">
                <h3 class="mb-3 white--text">Service</h3>
                <p class="pointer white--text" @click="$router.push('/terms-and-condition')">Terms & Condition</p>
                <p class="pointer white--text" @click="$router.push('/privacy-policy')">Privacy Policy</p>
              </v-col>
              <!-- <v-col cols="12">
                <div class="flex-row d-flex">
                  <v-img
                    max-width="180"
                    contain
                    :src="require('@/assets/img/idx.jpg')"
                    class="mx-auto pointer"
                    @click="goTo('https://idx.co.id/')"
                  ></v-img>
                </div>
                ini asalnya di comment
                <div class="flex-row justify-center mt-6 d-flex">
                  <v-img
                    max-width="180"
                    contain
                    :src="require('@/assets/img/googleplay.png')"
                    class="pointer"
                    @click="
                      goTo(
                        'https://play.google.com/store/apps/details?id=com.interconnect.data'
                      )
                    "
                  ></v-img>
                  <v-img
                    max-width="170"
                    contain
                    :src="require('@/assets/img/appstore.png')"
                    class="pointer"
                  ></v-img>
                </div>
              </v-col> -->
            </v-row>
          </v-col>
          <v-col cols="12 hidden-md-and-up mb-6">
            <div class="d-flex justify-space-start">
              <div class="d-flex justify-start">
                <v-card
                  style="background-color: rgba(196, 196, 196, 0.1); border: 1px solid #5f88bf"
                  class="d-flex rounded-pill pa-2"
                  outlined
                >
                  <div style="max-width: 70px">
                    <v-img :src="require('@/assets/img/icon/phone-circle-outlined.svg')"></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column">
                    <v-card-text class="py-0">
                      <p class="text-uppercase mb-0" style="color: #ffffff; opacity: 0.5">call center 24 hours</p>
                    </v-card-text>
                    <v-card-text class="py-0">
                      <h2 style="font-size: 1.2rem; color: #ffffff">+65 69732390</h2>
                    </v-card-text>
                  </div>
                </v-card>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-space-between align-center">
              <div class="hidden-sm-and-down">
                <div class="d-flex justify-start">
                  <v-card
                    style="background-color: rgba(196, 196, 196, 0.1); border: 1px solid #5f88bf"
                    class="d-flex rounded-pill pa-2"
                    outlined
                  >
                    <div style="max-width: 70px">
                      <v-img :src="require('@/assets/img/icon/phone-circle-outlined.svg')"></v-img>
                    </div>
                    <div class="d-flex justify-center flex-column">
                      <v-card-text class="py-0">
                        <p class="text-uppercase mb-0" style="color: #ffffff; opacity: 0.5">call center 24 hours</p>
                      </v-card-text>
                      <v-card-text class="py-0">
                        <h2 style="font-size: 1.2rem; color: #ffffff">+65 69732390</h2>
                      </v-card-text>
                    </div>
                  </v-card>
                </div>
              </div>
              <div>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <div class="hidden-md-and-up">
                      <div
                        style="border: 1px solid #5f88bf; width: 80px"
                        class="d-flex rounded-xl pa-4 pointer"
                        @click="goTo('https://idx.co.id')"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-img :src="require('@/assets/img/IDX.png')"></v-img>
                      </div>
                    </div>

                    <div class="hidden-sm-and-down">
                      <div
                        style="border: 1px solid #5f88bf"
                        class="d-flex rounded-xl pa-4 pointer"
                        @click="goTo('https://idx.co.id')"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-img :src="require('@/assets/img/IDX.png')"></v-img>
                      </div>
                    </div>
                  </template>
                  <span>Indonesia Stock Exchange (IDX)</span>
                </v-tooltip>
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <v-divider color="#667C8B" class="mt-12"></v-divider>
            <v-footer absolute padless>
              <v-card flat style="border-radius: 0px !important" color="primary" width="100%" class="pb-6 text-center">
                <v-card-text class="white--text">
                  <strong>Copyright</strong> &copy; {{ new Date().getFullYear() }}. All rights reserved. Powered by:
                  InterconnectDATA, Teknologi Cakra Internasional
                </v-card-text>
              </v-card>
            </v-footer>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribe: null,
      options: {
        duration: 900,
        offset: 0,
        easing: 'easeInOutQuint',
      },
    }
  },
  methods: {
    goTo(link) {
      window.location = link
    },
  },
  computed: {
    showSubscribeView() {
      return (
        this.$route.path != '/faq' &&
        this.$route.path != '/privacy-policy' &&
        this.$route.path != '/terms-and-condition'
      )
    },
  },
}
</script>
