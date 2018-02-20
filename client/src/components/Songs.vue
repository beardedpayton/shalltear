<template>
  <section>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <Panel title="Browse Songs">
          <div v-for="song in songs" :key="song.id">
            {{song.title}} -
            {{song.artist}} -
            {{song.genre}}
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
</style>
