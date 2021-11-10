<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <!-- <h1 class="title">Blog</h1> -->
      <!-- <posts post-type="doc" :amount="10" /> -->
    </section>
  </main>
</template>

<script>
export default {
  middleware: 'defaultContent',
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('doc').fetch()
    } catch (e) {
      error({ message: 'Doc not found' })
    }
    return { posts }
  },
}
</script>
