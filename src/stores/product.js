import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { toast } from 'vue3-toastify'
import axios from 'axios'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const schema = ref([])
  const selectedIds =ref([])
  const loading = ref(true)

function findProductById(id) {
  return products.value.find(p => p.id == id)
}

  function addToschema(id) {

    let schemaItem =selectedIds.value.find(i => i == id)
    if (!schemaItem) {
      selectedIds.value.push(id)
      let p = findProductById(id)
      if (p) {
        toast.success(`${p.name} sikeres kiválasztás.`)
      }
    } else {
      toast.warning('Ez kiválasztva!')
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

  return {products, loading, schema, selectedIds, addToschema, removeFromschema, isSelected}
})
