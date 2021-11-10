<template>
  <main>
    <section v-if="post">
      <article>
        <h1 class="">{{ post.title }}</h1>
        <!-- <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ post.description }}</p> -->
        <nuxt-content :document="post" />
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
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>

<style scoped>
article p {
  line-height: 1.8;
  text-align: justify;
}
</style>
