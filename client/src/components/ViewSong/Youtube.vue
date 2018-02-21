<template>
  <Panel title="YouTube Video">
    <div class="song">
      <v-layout>
        <v-flex xs12>
          <youtube :video-id="youtubeId">

          </youtube>
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
    'youtubeId'
  ]
}
</script>

<style>
</style>
