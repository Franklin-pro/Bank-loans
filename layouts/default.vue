<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 ml-64 bg-gray-100">
      <Navbar />
      
      <div>
        <h1 class="text-primary p-6 text-2xl">{{ greetings }}</h1>
   
        <!-- <UButton @click="sayHello">Greet your app</UButton> -->
      </div>
      <div class="p-6">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '@/components/DashboardHeader.vue'

const greetings = ref('')
const userName = "Franklin"

const sayHello = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(greetings.value);
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn('Speech Synthesis not supported in this browser.');
  }
}

onMounted(() => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    greetings.value = `${userName}, Good Morning`;
  } else if (currentHour >= 12 && currentHour < 18) {
    greetings.value = `${userName}, Good Afternoon`;
  } else {
    greetings.value = `${userName}, Good Evening`;
  }

  sayHello();
});
</script>

<style scoped>
.main-content {
  padding: 2rem;
}
</style>
