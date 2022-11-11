<template>
  <div class="home">
    <InboxView />
  </div>
</template>

<script>
// @ is an alias to /src
import InboxView from '@/components/InboxView.vue'

export default {
  name: 'HomeView',
  components: {
    InboxView
  }
}
</script>
