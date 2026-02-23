<template>
 
<div class="card">
  <img :src="product.image" :alt="product.name" class="card-image">
  
</div>


</template>
<script>
import { useProductStore } from '@/stores/product';
const store = useProductStore();
const props = defineProps({product: Object})
</script>