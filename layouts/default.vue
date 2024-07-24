<template>
  <div class="flex ">
    <Sidebar />
    <main class="flex-1 ml-64  bg-gray-100">
      <Navbar />
      
      <div>
        <h1 class="text-primary p-6 text-2xl">{{ greetings }}</h1>
      </div>
     <div class="p-6">
      <NuxtPage />
     </div>
      
    </main>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '@/components/DashboardHeader.vue'
import { ref } from 'vue'

const greetings = ref('')
const userName = "Franklin"

const message = new Date()
const time = message.getHours()

if (time < 12) {
  greetings.value = userName + " Good Morning"
} else if (time >= 12 && time < 18) {
  greetings.value = userName + " Good Afternoon"
} else {
  greetings.value = userName + " Good Evening"
}
</script>

<style scoped>
.main-content {
  padding: 2rem;
}
</style>
