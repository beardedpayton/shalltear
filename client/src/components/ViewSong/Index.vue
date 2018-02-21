<template>
  <section>
    <v-layout row wrap >
      <v-flex xs6>
        <song-meta-data :song="song" />
      </v-flex>
      <v-flex xs6>
        <lyrics :lyrics="song.lyrics"/>
      </v-flex>
      <v-flex xs6>
        <tabs :tabs="song.tabs"/>
      </v-flex>
      <v-flex xs6>
        <Youtube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetaData from './SongMetadata'
import Lyrics from './Lyrics'
import Tabs from './Tabs'
import Youtube from './Youtube'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetaData,
    Lyrics,
    Tabs,
    Youtube
  }
}
</script>

<style>
</style>
