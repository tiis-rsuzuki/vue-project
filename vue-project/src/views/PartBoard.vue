<template>
    <v-main class="bg-dark-lighten-1">
        <v-container>
            <template v-for="n in 1" :key="n">
              <v-col
                class="mt-2"
                cols="12"
              >
                <strong>Category {{ n }}</strong>
              </v-col>
              <v-row>
                <v-col
                    v-for="item in display_items"
                    :key="item.index"
                    cols="6"
                    md="2"
                    >
                    <v-sheet height="150">{{item.part_name}}</v-sheet>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="length"
                        @click = "pageChange"
                        prev-icon="mdi-menu-left"
                        next-icon="mdi-menu-right"
                    ></v-pagination>
                </div>
              </v-col>
              </v-row>
            </template>
        </v-container>
    </v-main>
  </template>

  <script>
  export default {

    data () {
    return {
      page: 1,
      length:0,
      items: [],
      display_items: [],
      page_size: 5,
    }
  },
  methods: {
    pageChange: function(){
        console.log(this.page);
        this.display_items = this.items.slice(this.page_size*(this.page -1), this.page_size*(this.page));
    }
  },
  mounted: function(){
    this.items = [
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'},
        {id : '1234', part_category: 'big', part_name: 'ABCD'}
    ]

    this.length = Math.ceil(this.items.length/this.page_size);

    this.display_items = this.items.slice(this.page_size*(this.page -1), this.page_size*(this.page));
  }

  }
  </script>