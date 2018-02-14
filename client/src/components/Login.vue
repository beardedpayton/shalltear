<template>
  <section>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <div class="register-card">
          <v-toolbar color="blue darken-1">
            <v-toolbar-title class="white--text">Login</v-toolbar-title>
          </v-toolbar>
          <div class="input-wrapper">
            <div class="error" v-html="error"></div>
            <v-text-field
              label="Email Address"
              v-model="email"
            >
            </v-text-field>
            <br>
            <v-text-field
              label="Password"
              v-model="password"
            >
            </v-text-field>
            <br>
            <v-btn color="blue darken-1" class="white--text">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.error {
  color: red;
}
.input-wrapper {
  padding: 25px 25px;
}
.register-card {
  background-color: #efefef;
}
</style>
