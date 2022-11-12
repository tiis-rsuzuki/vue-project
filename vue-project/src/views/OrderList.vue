<template>
    <v-main class="bg-dark-lighten-1">
    <v-container
        class="py-8 px-6"
        fluid
      >
      <v-table
        fixed-header
        height="500px"
        hover="true"
      >
    <thead>
      <tr>
        <th class="text-left">
          projectNo
        </th>
        <th class="text-left">
          customer
        </th>
        <th class="text-left">
          deadline
        </th>
        <th class="text-left">
          manager
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="order in orders"
        :key="order.projectNo"
      >
        <td>{{ order.projectNo }}</td>
        <td>{{ order.customer }}</td>
        <td>{{ order.deadline }}</td>
        <td>{{ order.manager }}</td>
      </tr>
    </tbody>
  </v-table>
    </v-container>
    </v-main>
  </template>
  
  <script>
  export default {
    data () {
      return {
        orders: [
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
          {
            projectNo: '202211121700',
            customer: 'amcd',
            deadline: '2022/12/24',
            manager: 'Smith'
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>