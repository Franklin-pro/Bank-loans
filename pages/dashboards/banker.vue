<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-6">Banker Dashboard</h1>
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-4">Pending Loan Requests</h2>
      <ul>
        <li v-for="loan in pendingLoans" :key="loan.id" class="mb-2">
          {{ loan.date }} - {{ loan.amount }} - {{ loan.status }}
          <button class="bg-green-500 text-white py-1 px-2 rounded-lg ml-2" @click="approveLoan(loan.id)">Approve</button>
          <button class="bg-red-500 text-white py-1 px-2 rounded-lg ml-2" @click="rejectLoan(loan.id)">Reject</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pendingLoans = ref([])

const approveLoan = (loanId) => {
  // Implement loan approval logic
  console.log('Approving loan', loanId)
}

const rejectLoan = (loanId) => {
  // Implement loan rejection logic
  console.log('Rejecting loan', loanId)
}

onMounted(() => {
  // Fetch pending loan requests
  pendingLoans.value = [
    { id: 1, date: '2024-07-01', amount: '3500', status: 'Pending' },
    { id: 2, date: '2024-07-02', amount: '2100', status: 'Pending' }
  ]
})
</script>
