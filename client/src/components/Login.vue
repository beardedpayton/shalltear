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
              required
            >
            </v-text-field>
            <br>
            <v-text-field
              label="Password"
              v-model="password"
              required
            >
            </v-text-field>
            <br>
            <v-btn @click="login" color="blue darken-1" class="white--text">Login</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
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
