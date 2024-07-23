<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6">Loan Requests</h1>
    <ul>
      <li v-for="loan in loans" :key="loan.id" class="mb-2">
        {{ loan.date }} - {{ loan.amount }} - {{ loan.status }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loans = ref([])

onMounted(() => {
  // Fetch all loan requests
  loans.value = [
    { id: 1, date: '2024-07-01', amount: '3500', status: 'Pending' },
    { id: 2, date: '2024-07-02', amount: '2100', status: 'Approved' }
  ]
})
</script>
