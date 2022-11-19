<template>
  <v-app>
    <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
  <div>
    <v-navigation-drawer v-model="drawer">
      <v-sheet
        class="pa-4"
      >
        <!-- <v-avatar
          class="mb-4"
          color="grey-darken-1"
          size="64"
        ></v-avatar> -->

        <h1 class="title">SMIL Project</h1>
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

  </div>
    
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
        ['mdi-pencil-ruler', 'Design', '/design'],
        ['mdi-hammer-screwdriver', 'Part/Bom', '/parts'],
        ['mdi-bell', 'Notifications', '/notifications'],
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

.title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
