<template>
  <main>
    <section v-if="post">
      <article>
        <external-link-mobile></external-link-mobile>
        <external-link-middle></external-link-middle>
        <h1 class="">{{ post.title }}</h1>
        <!-- <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ post.description }}</p> -->
        <nuxt-content ref="nuxtContent" :document="post" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('doc', params.doc).fetch()
    } catch (e) {
      error({ message: 'Doc not found' })
    }
    return { post }
  },
  data() {
    return {
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
  mounted() {
    window.scroll(0, 0)

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.$store.commit('SET_CURRENTLY_ACTIVE_TOC', id)
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
      this.observer.observe(section)
    })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
}
</script>

<style scoped>
* {
  color: #00253d;
}
article p {
  line-height: 1.8;
  text-align: justify;
}
article img {
  width: 100%;
}
ul li,
ol li {
  font-size: 0.8525rem !important;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

@media only screen and (max-width: 429px) {
  h1 {
    position: relative;
    font-size: 1.7rem;
  }
  p:first-child img {
    position: absolute;
    top: 0;
  }
}
</style>
