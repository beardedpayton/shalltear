<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" name="email">
    <br>
    <input type="password" v-model="password" name="password">
    <br>
    <button @click="registerUser">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser () {
      AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
</style>
