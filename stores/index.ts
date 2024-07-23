import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '~/utils/api'

export const useStore = defineStore('main', () => {
  const user = ref(null)
  const invoices = ref([])
  const loans = ref([])

  const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials)
    user.value = response.data.user
  }

  const register = async (data) => {
    const response = await api.post('/auth/register', data)
    user.value = response.data.user
  }

  const fetchInvoices = async () => {
    const response = await api.get('/invoices')
    invoices.value = response.data
  }

  const fetchLoans = async () => {
    const response = await api.get('/loans')
    loans.value = response.data
  }

  return {
    user, invoices, loans,
    login, register, fetchInvoices, fetchLoans
  }
})
