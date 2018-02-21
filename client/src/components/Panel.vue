<template>
  <div class="register-card">
    <v-toolbar color="blue darken-1">
      <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
      <slot name="add" />
    </v-toolbar>
    <slot>
      No content defined
    </slot>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style>
.input-wrapper {
  padding: 25px 25px;
}
.register-card {
  background-color: #efefef;
}
</style>
