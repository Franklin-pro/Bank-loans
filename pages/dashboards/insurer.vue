<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6">Insurer Dashboard</h1>
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Pending Invoices</h2>
      <ul>
        <li v-for="invoice in pendingInvoices" :key="invoice.id" class="mb-2">
          {{ invoice.date }} - {{ invoice.amount }} - {{ invoice.status }}
          <button class="bg-green-500 text-white py-1 px-2 rounded-lg ml-2" @click="validateInvoice(invoice.id)">Validate</button>
          <button class="bg-red-500 text-white py-1 px-2 rounded-lg ml-2" @click="rejectInvoice(invoice.id)">Reject</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pendingInvoices = ref([])

const validateInvoice = (invoiceId) => {
  // Implement invoice validation logic
  console.log('Validating invoice', invoiceId)
}

const rejectInvoice = (invoiceId) => {
  // Implement invoice rejection logic
  console.log('Rejecting invoice', invoiceId)
}

onMounted(() => {
  // Fetch pending invoices
  pendingInvoices.value = [
    { id: 1, date: '2024-07-01', amount: '5000', status: 'Pending' },
    { id: 2, date: '2024-07-02', amount: '3000', status: 'Pending' }
  ]
})
</script>
