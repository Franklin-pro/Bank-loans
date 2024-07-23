<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6">Invoices</h1>
    <ul>
      <li v-for="invoice in invoices" :key="invoice.id" class="mb-2">
        {{ invoice.date }} - {{ invoice.amount }} - {{ invoice.status }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const invoices = ref([])

onMounted(() => {
  // Fetch all invoices
  invoices.value = [
    { id: 1, date: '2024-07-01', amount: '5000', status: 'Pending' },
    { id: 2, date: '2024-07-02', amount: '3000', status: 'Approved' }
  ]
})
</script>
