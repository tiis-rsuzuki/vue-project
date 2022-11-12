<template>
   <v-main class="bg-dark-lighten-1">
    <v-container
        class="py-8 px-6"
        fluid
      >
      <v-row class="justify-end">
        <v-col cols="1">
            <v-btn icon color="secondary" size="x-large" v-on:click="order">
                <v-icon icon="mdi-plus"></v-icon>
            </v-btn>
        </v-col>
      </v-row>
      <v-row>
          <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
                <v-list lines="two">
                <v-list-subheader>{{ card }}</v-list-subheader>
                <template v-for="n in 6" :key="n">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="secondary"></v-avatar>
                    </template>

                    <v-list-item-title>Order {{ n }}</v-list-item-title>

                    <v-list-item-subtitle>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                    </v-list-item-subtitle>
                    <!-- link  -->
                    <router-link :to="{ path: 'order', query: { id: n }}">View detail</router-link>
                    <!-- link  -->
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    </v-main>
  </template>
  
  <script>
    export default {
        methods: {
            order(){
                this.$router.push('/order')
            }
        },
    data: () => ({
      cards: ['Recently added orders', 'Deadline is coming up soon'],
      drawer: null,
    }),
  }
  </script>