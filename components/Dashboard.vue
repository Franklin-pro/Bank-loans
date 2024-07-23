<template>
  <div class="flex h-screen">
    <Sidebar />
    <main class="flex-1 bg-gray-100">
      <Navbar />
      <div>
        <slot/>
      </div>
      <!-- <Pharmacist/> -->
      <!-- <Banker /> -->
    </main>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '@/components/DashboardHeader.vue'
import Banker from '~/pages/dashboards/banker.vue';
import Insurer from '~/pages/dashboards/insurer.vue';
import Pharmacist from '~/pages/dashboards/pharmacist.vue';
</script>

<style scoped>
.main-content {
  padding: 2rem;
}
</style>
