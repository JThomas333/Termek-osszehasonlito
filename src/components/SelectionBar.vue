<script setup>
import { useProductStore } from '@/stores/product'

const store = useProductStore()
</script>

<template>
    <div v-if="store.selectedIds.length > 1" class="selection-bar">
        <p>Kiválasztott termékek: <strong>{{ store.selectedIds.length }}/3</strong></p>
    </div>
</template>

