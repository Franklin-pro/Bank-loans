<template>
  <aside class="w-64 bg-white text-[#193780] shadows h-full p-2 flex flex-col justify-between">
    <div>
      <nav>
        <div class="pb-6">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
        <div class="pb-3">
          <h1 class="bg-[#5C59E8] text-white rounded-xl p-2 flex items-center gap-2">
            <UIcon name="i-heroicons-squares-2x2" />
            <NuxtLink to="/dashboard">Dashboard</NuxtLink>
          </h1>
        </div>
        <ul>
          <li @click="toggleLoanRequests" class="flex justify-between  items-center gap-2 rounded-xl p-2 hover:bg-[#EFEFFD] hover:text-[#5C59E8] cursor-pointer">
            <div>
              <UIcon name="i-heroicons-banknotes" />
              Loan Requests
            </div>
            <UIcon name="i-heroicons-chevron-down"/>
          </li>
          <ul v-if="showLoanRequests" class="pl-6">
            <li class="flex items-center gap-2 rounded-xl p-2 hover:text-[#225CE8] hover:text-[#5C59E8]">
              <NuxtLink to="/loan-requests/new">View Loan Request</NuxtLink>
            </li>
            <li class="flex items-center gap-2 rounded-xl p-2 hover:text-[#225CE8] hover:text-[#5C59E8]">
              <NuxtLink to="/loan-requests/pending">Submit New Loan Requests</NuxtLink>
            </li>
          </ul>
          <li @click="toggleInvoices" class="flex justify-between  items-center gap-2 rounded-xl p-2 hover:bg-[#EFEFFD] hover:text-[#5C59E8] cursor-pointer">
            <div>
              <UIcon name="i-heroicons-banknotes" :class="[isOpen ? 'rotate-[360deg]' : 'text-2xl cursor-pointer duration-500 mr-2 float-left block', 'text-2xl mr-3 text-[#688279]']" />
             Invoices
            </div>
            <UIcon name="i-heroicons-chevron-down"/>
          </li>
          <ul v-if="showInvoices" class="pl-6">
            <li class="flex items-center gap-2 rounded-xl p-2 hover:text-[#225CE8] hover:text-[#5C59E8]">
              <NuxtLink to="/invoices/new">New Invoice</NuxtLink>
            </li>
            <li class="flex items-center gap-2 rounded-xl p-2 hover:text-[#225CE8] hover:text-[#5C59E8]">
              <NuxtLink to="/invoices/pending">View All Invoices</NuxtLink>
            </li>
          </ul>
          <li class="flex items-center gap-2 rounded-xl p-2 hover:bg-[#EFEFFD] hover:text-[#5C59E8]">
            <UIcon name="i-heroicons-document-chart-bar" />
            <NuxtLink to="/report">Report</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <ul>
        <li class="flex items-center gap-2 rounded-xl p-2 hover:bg-[#EFEFFD] hover:text-[#5C59E8]">
          <UIcon name="i-heroicons-arrow-uturn-left" />
          <NuxtLink to="/outloan">Outloan</NuxtLink>
        </li>
        <li class="flex items-center gap-2 rounded-xl p-2 hover:bg-[#EFEFFD] hover:text-[#5C59E8]">
          <UIcon name="i-heroicons-logout" />
          <UIcon name="i-heroicons-arrow-left-start-on-rectangle" />
          <NuxtLink to="/logout">Logout</NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>



<script setup>
import { ref } from 'vue';

const showLoanRequests = ref(false);
const showInvoices = ref(false);
const isOpen = ref(true)
const toggleLoanRequests = () => {
  showLoanRequests.value = !showLoanRequests.value;
};

const toggleInvoices = () => {
  showInvoices.value = !showInvoices.value;
};
</script>


<style scoped>
nav ul {
  list-style: none;
  padding: 0;
}

nav ul li a {

  text-decoration: none;
}

</style>
