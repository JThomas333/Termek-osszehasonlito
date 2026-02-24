<script setup>
import { useProductStore } from '@/stores/product'

const store = useProductStore()


</script>

<template>
    <div v-if="store.selectedIds.length > 1" class="selection-bar">
        <button @click="$router.push('/schema')">Kiválasztott termékek: <strong>{{ store.selectedIds.length }}/3</strong></button>
    </div>
</template>

