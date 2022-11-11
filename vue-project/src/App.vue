<template>
  <v-app>
    <v-main>
      <InboxView />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InboxView from './components/InboxView.vue'

export default {
  name: 'App',

  components: {
    InboxView,
  },

  data: () => ({
    //
  }),
}
</script>
