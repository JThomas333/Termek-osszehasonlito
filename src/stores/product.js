import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const compare = ref([])
  const selectedIds =ref([])

function findProductById(id) {
  return products.value.find(p => p.id == id)
}

  function addToCompare(id) {

    let compareItem =selectedIds.value.find(i => i == id)
    if (!compareItem) {
      selectedIds.value.push(id)
      let p = findProductById(id)
      if (p) {
        toast.success(`${p.name} sikeres kiválasztás.`)
      }
    } else {
      toast.warning('Ez kiválasztva!')
    }
  }

  function removeFromCompare(id) {
    
    selectedIds.value = selectedIds.value.filter(item => item !== id)
    let p = findProductById(id)
    if (p) {
      toast.danger(`${p.name} vissza vonták.`)
    }
  }

  function isSelected(id) {
    return selectedIds.value.find(x => x === id)
  }

  return {products, compare, selectedIds, addToCompare, removeFromCompare, isSelected}
})
