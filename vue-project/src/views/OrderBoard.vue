<template>
    <v-main>
        <v-container
          class="py-8 px-6"
          fluid
        >
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card"
              cols="12"
            >
              <v-card>
  
                <v-list lines="two">
                  <v-list-subheader>{{ card }}</v-list-subheader>
                  <template v-for="n in 4" :key="n">
                    <v-list-item>
                      <template v-slot:prepend>
                        <v-avatar color="grey-darken-1"></v-avatar>
                      </template>
  
                      <v-list-item-title>Order {{ n }}</v-list-item-title>
  
                      <v-list-item-subtitle>
                        new equipment
                      </v-list-item-subtitle>
                    </v-list-item>
  
                    <v-divider
                      v-if="n !== 4"
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
      data: () => ({
        cards: ['Recently added orders', 'Deadline is coming up soon'],
        drawer: null,
        links: [
          ['mdi-home', 'Home'],
          ['mdi-shopping', 'Order'],
          ['mdi-pencil-ruler', 'Design'],
          ['mdi-hammer-screwdriver', 'Part/Bom'],
        ],
      }),
    }
  </script>