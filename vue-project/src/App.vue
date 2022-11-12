<template>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div> -->
  <v-app>
    <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
    <v-navigation-drawer v-model="drawer">
      <v-sheet
        color="indigo"
        class="pa-4"
      >
        <!-- <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar> -->

        <h1>SMIL Project</h1>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :to="to"
          link
        >
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>
        <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view/>


  </v-app>
  
  
</template>

<script>
export default {
    data: () => ({
      cards: ['Recently added orders', 'Deadline is coming up soon'],
      drawer: null,
      links: [
        ['mdi-home', 'Home', '/'],
        ['mdi-shopping', 'Order', '/orders'],
        ['mdi-pencil-ruler', 'Design', '/about'],
        ['mdi-hammer-screwdriver', 'Part/Bom', '/parts'],
      ],
    }),
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
