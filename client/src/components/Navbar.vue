<template>
 <v-toolbar fixed color="blue darken-1" class="white--text">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="home">
      <v-toolbar-title>
        Full Stack App
      </v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark
      to="register"
      v-if="!$store.state.isUserLoggedIn">
      Sign Up
      </v-btn>
      <v-btn flat dark
      to="login"
      v-if="!$store.state.isUserLoggedIn">
      Login
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
