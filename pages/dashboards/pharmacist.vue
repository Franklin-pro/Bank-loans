<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6">Pharmacist Dashboard</h1>
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Submitted Invoices</h2>
      <ul>
        <li v-for="invoice in invoices" :key="invoice.id" class="mb-2">
          {{ invoice.date }} - {{ invoice.amount }} - {{ invoice.status }}
        </li>
      </ul>
    </div>
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Loan Requests</h2>
      <ul>
        <li v-for="loan in loans" :key="loan.id" class="mb-2">
          {{ loan.date }} - {{ loan.amount }} - {{ loan.status }}
        </li>
      </ul>
    </div>
    <router-link to="/invoices/new" class="bg-green-500 text-white py-2 px-4 rounded-lg">Submit New Invoice</router-link>
    <router-link to="/loans/new" class="bg-green-500 text-white py-2 px-4 rounded-lg ml-4">Submit New Loan Request</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const invoices = ref([])
const loans = ref([])

onMounted(() => {
  // Fetch submitted invoices and loan requests
  invoices.value = [
    { id: 1, date: '2024-07-01', amount: '5000', status: 'Pending' },
    { id: 2, date: '2024-07-02', amount: '3000', status: 'Approved' }
  ]
  loans.value = [
    { id: 1, date: '2024-07-01', amount: '3500', status: 'Pending' },
    { id: 2, date: '2024-07-02', amount: '2100', status: 'Approved' }
  ]
})
</script>
