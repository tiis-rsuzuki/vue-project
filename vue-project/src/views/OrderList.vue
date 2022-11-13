<template>
    <v-main class="bg-dark-lighten-1">
      <v-table
        fixed-header
        height="500px"
        hover="true"
      >
    <thead>
      <tr>
        <th class="text-left">
          ProjectNo
        </th>
        <th class="text-left">
          Status
        </th>
        <th class="text-left">
          Customer
        </th>
        <th class="text-left">
          Deadline
        </th>
        <th class="text-left">
          Manager
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="order in orders"
        :key="order.projectNo"
      >
        <td>{{ order.projectNo }}</td>
        <td v-if="order.status== 'process'">
          <v-btn
            rounded
            small
            text
            color="primary"
            dark
          >
            {{ order.status }}
          </v-btn>
        </td>
        <td v-else-if="order.status== 'finished'">
          <v-btn
            rounded
            small
            color="blue-grey"
            dark
          >
            {{ order.status }}
          </v-btn>
        </td>
        <td v-else-if="order.status== 'inquiry'">
          <v-btn
            rounded
            small
            color="warning"
            dark
          >
            {{ order.status }}
          </v-btn>
        </td>
        <td>{{ order.customer }}</td>
        <td>{{ order.deadline }}</td>
        <td>{{ order.manager }}</td>
        <td><router-link :to="{ path: 'order', query: { id: order.projectNo }}">View Detail</router-link>     
        </td>
      </tr>
    </tbody>
  </v-table>

    </v-main>
  </template>
  
  <script>
  import order_service from '@/service/order' 

  export default {
    data () {
      return {
        orders: []
      }
    },
    methods: {
      fetch_orders: function(){
        const self = this
        order_service.show().then(function(res){
          console.log(res);
          console.log(res.status);
          self.orders = res.data;
        });
      }
    },
    mounted: function(){
      this.fetch_orders()
    }
  }
</script>

<style scoped>

</style>