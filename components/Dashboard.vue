<template>
  <div class="flex h-screen">
    <Sidebar />
    <main class="flex-1 bg-gray-100">
      <Navbar />
      <div>
        <slot/>
      </div>
      <div>
        <h1 class="text-primary p-6 text-2xl">{{ greetings }}</h1>
      </div>
    <!-- <InvoiceForm/> -->
    </main>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '@/components/DashboardHeader.vue'
import LoanRequestForm from './LoanRequestForm.vue';





const greetings = ref()
const userName = "Franklin"

const message = new Date();
const time = message.getHours();

if(time < 12){
  greetings.value =userName, + "Good Morning "
}else if(time >= 12 && time < 18){
  greetings.value = userName + " , " + "Good AfterNoon "
}else{
  greetings.value = userName, + "Good Evenning "
}
</script>

<style scoped>
.main-content {
  padding: 2rem;
}
</style>
