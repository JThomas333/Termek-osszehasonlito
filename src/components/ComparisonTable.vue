<script setup>
    const props = defineProps({item: Object})
    import {ref, onMounted, onUpdated} from 'vue'
    import { useProductStore } from '@/stores/product';
    const store = useProductStore()
    const product = ref({})
    
    onMounted(() =>{
        product.value = store.products.find(x => x.id == props.item.id)
    })
    
    onUpdated(() =>{
        product.value = store.products.find(x => x.id == props.item.id)
    })
</script>

<template>
    <div>
        {{ product.name }} 
    </div>
</template>