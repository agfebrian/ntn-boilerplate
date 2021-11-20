<template>
  <div>
    <v-navigation-drawer v-model="showNav" style="position: fixed; top: 80px; left: 0; z-index: 15" absolute temporary>
      <v-list dense class="lighten-1">
        <!-- <v-list-item
          link
          exact
          v-for="(item, a) in mainMenuItem"
          :key="a"
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/'">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/product'">
          <v-list-item-content>
            <v-list-item-title>Product</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group :value="false" no-action color="gray">
          <template v-slot:activator>
            <v-list-item-title>Case Study</v-list-item-title>
          </template>
          <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/case-study/case-a/'">
            <v-list-item-title style="margin-left: -30px">Startup</v-list-item-title>
          </v-list-item>
          <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/case-study/case-b/'">
            <v-list-item-title style="margin-left: -30px">Investors</v-list-item-title>
          </v-list-item>
          <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/case-study/case-c/'">
            <v-list-item-title style="margin-left: -30px">Market Researcher</v-list-item-title>
          </v-list-item>
          <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/case-study/case-d/'">
            <v-list-item-title style="margin-left: -30px">Professionals</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item link exact :href="'//' + 'lp.interconnectdata.com/about'">
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link exact :href="'//' + 'apps.interconnectdata.com/subscribe'">
          <v-list-item-content>
            <v-list-item-title>Subscribe</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact to="/faq">
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact :href="'//' + 'apps.interconnectdata.com/register'">
          <v-list-item-content>
            <v-list-item-title>Try it free</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact :href="'//' + 'apps.interconnectdata.com/login'">
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      mainMenuItem: [
        { text: 'Home', to: '/' },
        { text: 'Product', to: '/product' },
        { text: 'About', to: '/about' },
      ],
    }
  },
  computed: {
    showNav: {
      get() {
        return this.show
      },
      set(val) {
        this.$emit('close', val)
      },
    },
  },
}
</script>
