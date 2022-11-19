<template>
    <v-main class="bg-dark-lighten-1">
    <v-container
        class="py-8 px-6"
        fluid>
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="1">
            <v-btn 
                icon color="secondary"
                size="x-large"
                fab
                @click="isEditing = !isEditing">
                <v-icon v-if="isEditing">
                mdi-close
                </v-icon>
                <v-icon v-else>
                mdi-pencil
                </v-icon>
            </v-btn>
            </v-col>
        </v-row>
        <div class="my-5" />
        <v-card class="overflow-hidden" dark>
            <v-card-text>
            <v-text-field
                :disabled="!isEditing"
                color="grey"
                label="Project Name"
            ></v-text-field>
            <v-autocomplete
                :disabled="!isEditing"
                :items="states"
                :custom-filter="customFilter"
                color="grey"
                item-title="name"
                item-value="id"
                label="State"
            ></v-autocomplete>
            <v-autocomplete
                :disabled="!isEditing"
                :items="customers"
                :custom-filter="customFilter"
                color="grey"
                item-title="name"
                item-value="id"
                label="Customer"
            ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                variant="flat"
                :disabled="!isEditing"
                color="secondary"
                @click="get_order"
            >
                Save
            </v-btn>
            </v-card-actions>
            <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                location="bottom left"
            >
            Order has been updated
            </v-snackbar>
        </v-card>
    </v-container>
    </v-main>
</template>

<script>
 import order_service from '@/service/order'


  export default {
    data () {
      return {
        hasSaved: false,
        isEditing: null,
        model: null,
        states: [
          { name: 'Information', id: 1 },
          { name: 'Inquiry', id: 2 },
          { name: 'Received', id: 3 },
        ],
        customers: [
          { name: 'Sales',  id: 1 },
          { name: 'Design',  id: 2 },
          { name: 'Production', id: 3 },
        ],
      }
    },

    methods: {
      customFilter (item, queryText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.indexOf(searchText) > -1 ||
          textTwo.indexOf(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
      //api call
      get_order (){
        alert(this.$route.query.id);
        let res = order_service.show(this.$route.query.id);
        alert(res);
        console.log(res);
      }
    },
  }
</script>