<template>
  <section>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <Panel title="Browse Songs">
          <v-btn
          slot="add"
          :to="{name: 'create-song', path: 'songs/create'}"
          fab
          absolute
          right
          middle
          small
          >
          <v-icon>add</v-icon>
          </v-btn>
          <div
          v-for="song in songs"
          class="song"
          :key="song.id">
          <v-layout>
            <v-flex xs6>
              <h1>{{song.title}}</h1>
              <h3>Artist: <span>{{song.artist}}</span></h3>
              <h3>Genre: <span>{{song.genre}}</span></h3>
              <v-btn
              :to="{
                name: 'view-song',
                params: {
                  songId: song.id
                }
              }"
              >
                View Song
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl">
            </v-flex>
          </v-layout>
          </div>
        </Panel>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  components: {
    Panel
  },
  // get request once songs component is mounted on page
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>

<style scoped>
h1 {
  color: #DAA520;
}
</style>
