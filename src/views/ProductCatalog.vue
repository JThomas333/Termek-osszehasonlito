<script setup>
import ProductCard from '@/components/ProductCard.vue';
import SelectionBar from '@/components/SelectionBar.vue';
import { useProductStore } from '@/stores/product';
const store = useProductStore();

</script>

<template>
  <main>
    <ProductCard />
    <SelectionBar />
  </main>
</template>
