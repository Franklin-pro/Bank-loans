<template>
  <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">Submit New Loan Request</h1>
    <form @submit.prevent="submitLoanRequest">
      <div class="mb-4">
        <label for="amount" class="block text-sm font-medium text-gray-700">Loan Amount (Max 70% of Invoice)</label>
        <input type="number" id="amount" v-model="form.amount" class="mt-1 block w-full" required>
      </div>
      <div class="mb-4">
        <label for="purpose" class="block text-sm font-medium text-gray-700">Purpose</label>
        <input type="text" id="purpose" v-model="form.purpose" class="mt-1 block w-full" required>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Submit Loan Request</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({
  amount: '',
  purpose: ''
})
const submitLoanRequest = () => {
  // Implement loan request submission logic
  console.log('Submitting loan request', form.value)
}
</script>
