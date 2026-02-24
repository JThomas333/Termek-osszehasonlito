<script setup>
import ProductCard from '@/components/ProductCard.vue';
import SelectionBar from '@/components/SelectionBar.vue';
import { useProductStore } from '@/stores/product';
import axios from 'axios'
  import {onMounted} from 'vue'
const store = useProductStore();


try {
  onMounted(() => {
    axios.get('http://localhost:3000/items')
    .then(res => {
      store.products = res.data
      setTimeout(() => {
      store.loading = false;
      }, 2000);
    })
    axios.get('http://localhost:3000/fields')
    .then(res => {
      store.fields = res.data
    })
  })
} catch (error) {
  console.error("Hiba történt az adatok betöltése közben. Kérjük, próbálja meg később újra.", error.message);
}
 

</script>

<template>
  <h1>Termékek</h1>
  <div v-if="store.loading">Loading...</div>
  <div v-else class="row">
    <SelectionBar />
    <ProductCard v-for="p in store.products" :product="p"/>
    
  </div>
</template>
