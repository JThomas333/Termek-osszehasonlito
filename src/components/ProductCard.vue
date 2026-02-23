<template>
 
<div class="card col-12 col-sm-6 col-md-4 col-lg-3">
        <img :src="product.image" :alt="product.name" class="card-image-top">
        <p class="card-text">Brend: {{ product.brand }}</p>
        <p class="card-text">Neve: {{ product.name }}</p>
        <p class="card-text">Ára: {{product.price}}</p>
        <div class="card-footer">
            <button :disabled="product.stock < 1" @click="store.addToComparison(product.id)" class="btn btn-primary">Kiválaszt</button>
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product';
const store = useProductStore();
const props = defineProps({product: Object})
</script>