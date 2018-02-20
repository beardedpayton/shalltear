<template>
  <div id="app">
    <v-app>
      <v-content>
        <Navbar></Navbar>
        <v-container><router-view/></v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;;
}
h1,
h2,
h3,
h4 {
  font-family: 'Open Sans Condensed', sans-serif;
}
section {
  padding: 75px 0;
}
.error {
  color: red;
}
</style>
