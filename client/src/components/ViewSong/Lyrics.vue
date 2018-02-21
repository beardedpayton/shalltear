<template>
  <Panel title="Song Lyrics">
    <div class="song">
      <v-layout>
        <v-flex xs12>
          <textarea v-model="lyrics" readonly>
          </textarea>
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
    'lyrics'
  ]
}
</script>

<style>
textarea {
  width: 100%;
  border: none;
  resize: none;
  overflow: auto;
  height: 500px;
  
}
</style>
