<template>
  <!-- <main>
    <section class="self-center flex flex-col flex-1 items-center justify-center">
      <h1 class="title text-center">Nuxt — Tailwind — Netlify CMS</h1>
      <h2 class="subtitle text-center">Boilerplate</h2>
    </section>

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main> -->
  <div>
    <v-card flat>
      <v-img
        style="border-radius: 0px !important; height: 80vh"
        class="d-flex justify-center"
        :src="require('@/assets/img/hero-faq1.png')"
      >
        <!-- show on medium -->
        <h2 style="font-size: 3rem; margin-top: 150px" class="text-center white--text hidden-sm-and-down">
          InterconnectDATA Docs
        </h2>
        <p class="mb-10 text-subtitle-cust-1 text-center white--text hidden-sm-and-down">
          Learn More About InterconnectDATA and Get Answers to All Your Questions
        </p>
        <!-- <p class="text-subtitle-cust-1 text-center white--text hidden-sm-and-down">Data with Intermediate</p> -->
        <v-text-field
          v-model="query"
          class="mx-auto cust__input white--text rounded-lg hidden-sm-and-down"
          placeholder="Search"
          hide-details
          clearable
          outlined
          flat
        >
          <template v-slot:prepend-inner>
            <v-img class="mr-2" :src="require('@/assets/img/icon/search.svg')"></v-img>
          </template>
        </v-text-field>

        <!-- show on small -->
        <h2 class="mt-16 text-center white--text hidden-md-and-up">InterconnectDATA</h2>
        <h2 class="text-center white--text hidden-md-and-up">Docs</h2>
        <p class="mt-4 mb-0 text-subtitle-cust-2 text-center white--text hidden-md-and-up">
          Learn More About InterconnectDATA and Get Answers to All Your Questions
        </p>
        <!-- <p class="text-subtitle-cust-2 text-center white--text hidden-md-and-up">Data with Intermediate</p> -->
        <v-text-field
          v-model="query"
          style="width: 80%"
          class="mx-auto white--text rounded-lg hidden-md-and-up"
          placeholder="Search"
          hide-details
          clearable
          outlined
          flat
        >
          <template v-slot:prepend-inner>
            <v-img class="mr-2" :src="require('@/assets/img/icon/search.svg')"></v-img>
          </template>
        </v-text-field>
        <!-- show on medium -->

        <!-- show on small -->
      </v-img>
    </v-card>

    <!-- list a result search -->
    <div class="box-wrapper" v-show="query.length > 0">
      <v-card class="box-search px-4">
        <v-card-title
          style="border-bottom: 1px solid #e5e5e5"
          class="d-flex flex-column align-start pointer"
          v-for="item of items"
          :key="item.title"
          @click="$router.push(item.path)"
        >
          <v-card-text class="pa-0 text-h6 text-truncate">{{ item.title }}</v-card-text>
          <v-card-text class="pa-0 text-truncate">{{ item.description }}</v-card-text>
        </v-card-title>
      </v-card>
    </div>

    <!-- show on medium -->
    <div class="hidden-sm-and-down" style="margin: -200px 0px 300px 0px">
      <v-row class="d-flex justify-center mt-16">
        <v-col cols="12" md="8" lg="8" class="mt-10 d-flex flex-wrap justify-center">
          <v-card
            v-for="(item, index) in menus"
            :key="index"
            class="pa-6 ma-3 d-flex flex-column align-center shadow"
            style="transition-duration: 0.4s"
            width="40%"
            outlined
          >
            <div class="d-flex flex-column align-center justify-space-between">
              <v-img class="mt-4" max-height="100px" :src="item.icon" contain> </v-img>
              <h3 class="mt-6 mb-6">{{ item.title }}</h3>
            </div>
            <div style="height: 100%" class="d-flex flex-column align-center justify-space-between">
              <p class="text-center" style="line-height: 2">{{ item.content }}</p>
              <p class="primary--text font-weight-bold pointer" @click="$router.push(item.link)">
                Learn more <v-icon color="primary">mdi-menu-right</v-icon>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- show on small -->
    <div class="hidden-md-and-up" style="margin: -200px 0px 300px 0px">
      <v-row class="d-flex justify-center mt-16">
        <v-col cols="12" md="6" lg="6" class="mt-10 d-flex flex-wrap justify-center">
          <v-card
            v-for="(item, index) in menus"
            :key="index"
            class="pa-6 ma-3 d-flex flex-column align-center shadow"
            style="transition-duration: 0.4s"
            width="100%"
            outlined
          >
            <div class="d-flex flex-column align-center justify-space-between">
              <v-img class="mt-4" max-height="100px" :src="item.icon" contain> </v-img>
              <h3 class="mt-6 mb-6">{{ item.title }}</h3>
            </div>
            <div style="height: 100%" class="d-flex flex-column align-center justify-space-between">
              <p class="text-center" style="line-height: 2">{{ item.content }}</p>
              <p class="primary--text font-weight-bold" @click="$router.push(item.link)">
                Learn more <v-icon color="primary">mdi-menu-right</v-icon>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- <div style="position: relative; margin: 200px 0px"></div> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>

<script>
export default {
  data() {
    return {
      query: '',
      items: [],
      menus: [
        {
          icon: require('@/assets/img/icon/rocket-new-blue2.svg'),
          title: 'Getting Started',
          content: 'Start your journey with InterconnectDATA',
          link: '/doc/getting-started',
        },
        {
          icon: require('@/assets/img/icon/lamp-light.svg'),
          title: 'Knowledge Base',
          content: 'Learn how to use InterconnectDATA platform',
          link: '/doc/knowledge-base',
        },
        {
          icon: require('@/assets/img/icon/package.svg'),
          title: 'FAQ',
          content: 'Get answers to your questions here',
          link: '/doc/frequently-asked-question',
        },
        {
          icon: require('@/assets/img/icon/integration.svg'),
          title: 'API Integrations',
          content: 'Integrate InterconnectDATA into your web and mobile applications with REST API',
          link: '/doc/api-integration',
        },
      ],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.query = ''
        this.items = []
        return
      }

      this.items = await this.$content('doc').sortBy('createdAt', 'asc').search(query).fetch()
    },
  },
}
</script>

<style scoped>
.mx-auto {
  width: 30%;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 8px 60px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(24px);
}
.mx-auto .v-input__slot::before {
  border-style: none !important;
}
.box-search {
  position: absolute;
  z-index: 10;
  top: 370px;
  width: 30%;
  max-height: 400px;
  overflow-y: auto;
}
.box-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
@media only screen and (max-width: 958px) {
  .box-wrapper {
    padding: 0px 20px;
  }
  .box-search {
    width: 90%;
  }
}
</style>