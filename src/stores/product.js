import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  products = ref([])
  comparison = ref([])

  return {products, comparison }
})
