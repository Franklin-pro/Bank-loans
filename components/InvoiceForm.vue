<template>
  <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">Submit New Invoice</h1>
    <form @submit.prevent="submitInvoice">
      <div class="mb-4">
        <label for="amount" class="block text-sm font-medium text-gray-700">Invoice Amount</label>
        <input type="number" id="amount" v-model="form.amount" class="mt-1 block w-full" required>
      </div>
      <div class="mb-4">
        <label for="recipient" class="block text-sm font-medium text-gray-700">Recipient</label>
        <input type="text" id="recipient" v-model="form.recipient" class="mt-1 block w-full" required>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Submit Invoice</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({
  amount: '',
  recipient: ''
})
const submitInvoice = () => {
  // Implement invoice submission logic
  console.log('Submitting invoice', form.value)
}
</script>
