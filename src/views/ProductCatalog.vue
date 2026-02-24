<script setup>
import ProductCard from '@/components/ProductCard.vue';
import SelectionBar from '@/components/SelectionBar.vue';
import { useProductStore } from '@/stores/product';
const store = useProductStore();

</script>

<template>
  <h1>Termékek</h1>
  <div class="row">
    <SelectionBar />
    <ProductCard v-for="p in store.products" :product="p"/>
    
  </div>
</template>
