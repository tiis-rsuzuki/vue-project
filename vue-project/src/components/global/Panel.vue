<template>
    <v-main class="bg-dark-lighten-1">
      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
          No slot content defined.
        </slot>
      </div>
    </v-main>    
</template>
  
<script>
export default {
    props: [
        'title'
    ]
}
</script>
  
<style scoped>

</style>
