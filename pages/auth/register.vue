<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <form @submit.prevent="register">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" id="username" v-model="form.username" class="mt-1 block w-full" required>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" v-model="form.password" class="mt-1 block w-full" required>
      </div>
      <div class="mb-4">
        <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
        <select id="role" v-model="form.role" class="mt-1 block w-full" required>
          <option value="pharmacist">Pharmacist</option>
          <option value="banker">Banker</option>
          <option value="insurer">Insurer</option>
        </select>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const form = ref({
  username: '',
  password: '',
  role: ''
})
const register = () => {
  // Implement registration logic
  console.log('Registering', form.value)
}
</script>
