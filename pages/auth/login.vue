<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-2xl text-red-500 font-bold mb-6">Login</h1>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <UInput type="text" id="username" v-model="form.username" class="mt-1 block w-full" required/>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <UInput type="password" id="password" v-model="form.password" class="mt-1 block w-full" required/>
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
    </form>
  </div>
  <div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import banker from '../dashboards/banker.vue'
const form = ref({
  username: '',
  password: ''
})
const login = () => {
  // Implement login logic
  console.log('Logging in', form.value)
}
</script>
