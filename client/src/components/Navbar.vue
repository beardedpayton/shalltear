<template>
 <v-toolbar fixed color="blue darken-1" class="white--text">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link :to="{name: 'home'}">
      <v-toolbar-title>
        Full Stack App
      </v-toolbar-title>
    </router-link>
    <v-toolbar-items>
      <v-btn flat dark
      :to="{name: 'songs', path: '/songs'}"
      >
      Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat dark
      :to="{name: 'register', path: '/register'}"
      v-if="!$store.state.isUserLoggedIn">
      Sign Up
      </v-btn>
      <v-btn flat dark
      :to="{name: 'login', path: '/login'}"
      v-if="!$store.state.isUserLoggedIn">
      Login
      </v-btn>
      <v-btn flat dark
      v-if="$store.state.isUserLoggedIn"
      @click="logout">
      Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
