<template>
  <Panel title="Song Meta Data">
    <div class="song">
      <v-layout>
        <v-flex xs6>
          <h1>{{song.title}}</h1>
          <h3>Artist: <span>{{song.artist}}</span></h3>
          <h3>Genre: <span>{{song.genre}}</span></h3>
          <v-btn :to="{name: 'edit-song'}">Edit Song</v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" :alt="song.title" >
          <div><p>{{song.album}}</p></div>
        </v-flex>
      </v-layout>
    </div>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  props: [
    'song'
  ]
}
</script>

<style>
.album-image {
  width: 80%;
}
</style>
