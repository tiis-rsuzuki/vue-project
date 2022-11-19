<template>
  <v-main class="bg-dark-lighten-1">
    <v-container
        class="py-8 px-6"
        fluid>
        <h2>Sales trend</h2>
        <graph></graph>
    </v-container>
    </v-main>
</template>

<script>
import Graph from '../components/GraphChart.vue';

export default {
  components: {
    Graph,
  },
}
</script>