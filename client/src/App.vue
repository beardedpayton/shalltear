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
h1 {
  font-size: 42px;
}
section {
  padding: 75px 0;
}
.danger {
  color: red;
}
.album-image {
  width: 80%;
}
.song {
  padding: 15px;
  margin-bottom: 25px;
  text-align: center;
}
.song span {
  font-style: italic;
}
.register-card {
  width: 95%;
}
</style>
