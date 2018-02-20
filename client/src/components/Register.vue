<template>
  <section>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <Panel title="Register">
          <v-form autocomplete="off">
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
                type="password"
                required
              >
              </v-text-field>
              <br>
              <v-btn @click="registerUser" color="blue darken-1" class="white--text">Register</v-btn>
            </div>
          </v-form>
        </Panel>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async registerUser () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
</style>
