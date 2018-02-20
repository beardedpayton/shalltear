<template>
  <section>
    <v-layout row wrap>
      <v-flex xs4>
        <Panel title="Song Metadata">
          <v-form>
            <div class="input-wrapper">
              <v-text-field
              label="Title"
              v-model="song.title"
              >
              </v-text-field>
              <v-text-field
              label="Artist"
              v-model="song.artist"
              >
              </v-text-field>
              <v-text-field
              label="Genre"
              v-model="song.genre"
              >
              </v-text-field>
              <v-text-field
              label="Album"
              v-model="song.album"
              >
              </v-text-field>
              <v-text-field
              label="Album Image Url"
              v-model="song.albumImageUrl"
              >
              </v-text-field>
              <v-text-field
              label="YouTube ID"
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
              v-model="song.lyrics"
              >
              </v-text-field>
              <v-text-field
              label="Tab"
              multi-line
              v-model="song.tab"
              >
              </v-text-field>
            </div>
          </v-form>
        </Panel>
        <v-btn
        @click="createSong"
        color="blue darken-1"
        class="white--text ml-4 mt-4">
        Create Song
        </v-btn>
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
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async createSong () {
      try {
        await SongsService.post(this.song)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
