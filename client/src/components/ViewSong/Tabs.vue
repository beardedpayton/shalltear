<template>
  <Panel title="Guitar Tabs">
    <div class="song">
      <v-layout>
        <v-flex xs12>
          <textarea v-model="tabs" readonly>
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
    'tabs'
  ]
}
</script>

<style>
</style>
