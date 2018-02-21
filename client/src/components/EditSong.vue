<template>
  <section>
    <v-layout row wrap>
      <v-flex xs4>
        <Panel title="Song Metadata">
          <v-form>
            <div class="input-wrapper">
              <v-text-field
              label="Title"
              required
              :rules="[required]"
              v-model="song.title"
              >
              </v-text-field>
              <v-text-field
              label="Artist"
              required
              :rules="[required]"
              v-model="song.artist"
              >
              </v-text-field>
              <v-text-field
              label="Genre"
              required
              :rules="[required]"
              v-model="song.genre"
              >
              </v-text-field>
              <v-text-field
              label="Album"
              required
              :rules="[required]"
              v-model="song.album"
              >
              </v-text-field>
              <v-text-field
              label="Album Image Url"
              required
              :rules="[required]"
              v-model="song.albumImageUrl"
              >
              </v-text-field>
              <v-text-field
              label="YouTube ID"
              required
              :rules="[required]"
              v-model="song.youtubeId"
              >
              </v-text-field>
            </div>
          </v-form>
        </Panel>
      </v-flex>
      <v-flex xs8>
        <Panel title="Song Lyrics/Tabs" class="ml-4">
          <v-form>
            <div class="input-wrapper">
              <v-text-field
              label="Lyrics"
              multi-line
              required
              :rules="[required]"
              v-model="song.lyrics"
              >
              </v-text-field>
              <v-text-field
              label="Tabs"
              multi-line
              required
              :rules="[required]"
              v-model="song.tabs"
              >
              </v-text-field>
            </div>
          </v-form>
        </Panel>
        <div class="ml-4 mt-4">
          <div class="danger">{{error}}</div>
          <v-btn
          @click="save"
          color="blue darken-1"
          class="white--text">
          Edit Song
          </v-btn>
        </div>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        tab: null,
        lyrics: null
      },
      // !! converts value to boolean for true false check
      required: value => !!value || 'Required',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async save () {
      console.log('testing')
      this.error = null
      const dataInAllFields = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!dataInAllFields) {
        this.error = 'All fields are required before creating a song'
        return
      }
      try {
        await SongsService.put(this.song)
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
