<template>
  <div>
    <v-navigation-drawer
      v-model="showNav"
      style="position: fixed; top: 0; left: 0"
      absolute
      temporary
    >
      <v-list dense class="lighten-1">
        <v-list-item
          link
          exact
          v-for="(item, a) in mainMenuItem"
          :key="a"
          :to="item.to"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link exact :href="'//' + 'devapps.interconnectdata.com/subscribe'">
          <v-list-item-content>
            <v-list-item-title>Subscribe</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact to="/faq">
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact :href="'//' + 'devapps.interconnectdata.com/register'">
          <v-list-item-content>
            <v-list-item-title>Try it free</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link exact :href="'//' + 'devapps.interconnectdata.com/login'">
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
  props: ["show"],
  data() {
    return {
      mainMenuItem: [
        { text: "Home", to: "/" },
        { text: "Product", to: "/product" },
        { text: "About", to: "/about" },
      ],
    };
  },
  computed: {
    showNav: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("close", val);
      },
    },
  },
};
</script>
