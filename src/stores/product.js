import { ref} from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const selectedIds =ref([])
  const loading = ref(true)

function findProductById(id) {
  return products.value.find(p => p.id == id)
}

  function addToschema(id) {
      selectedIds.value.push(id)
      let p = findProductById(id)
      if (p) {
        toast.success(`${p.name} sikeres kiválasztás.`)
      }
  }

  function removeFromschema(id) {
    
    selectedIds.value = selectedIds.value.filter(item => item !== id)
    let p = findProductById(id)
    toast.error(`${p.name} vissza vonták.`)
    
  }

  function isSelected(id) {
    return selectedIds.value.find(x => x === id)
  }

  return {products, loading, selectedIds, addToschema, removeFromschema, isSelected}
})
